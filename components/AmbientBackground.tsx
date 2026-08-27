"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";

// Deliberately sparse — this is ambient texture, not a focal element.
const PARTICLE_COUNT = 360;
const FIELD_RADIUS = 5.5;

// Generated once at module load (not during render, per react-hooks/purity) —
// the field's layout is static for the life of the page, only its rotation animates.
function createParticlePositions() {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    // Even-density sphere sampling, flattened into a soft disc so particles
    // read as atmosphere behind the text rather than a literal globe.
    const r = FIELD_RADIUS * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
    arr[i * 3 + 2] = r * Math.cos(phi) * 0.7 - 1.5;
  }
  return arr;
}

const PARTICLE_POSITIONS = createParticlePositions();

/** True on fine-pointer input (mouse/trackpad); false on touch/coarse pointers. */
function useFinePointer() {
  const [fine, setFine] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
  );
  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const onChange = () => setFine(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return fine;
}

function ParticleField({ interactive, reduced }: { interactive: boolean; reduced: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  // Raw pointer target and the eased value actually applied — kept in refs so
  // pointer movement never triggers a React re-render.
  const target = useRef({ x: 0, y: 0 });
  const eased = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!interactive) return;
    const handlePointerMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    // Listens on window (not the canvas) — the canvas stays pointer-events:none
    // so it never steals clicks/taps from the site's own links and buttons.
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [interactive]);

  useFrame((_, delta) => {
    const points = pointsRef.current;
    if (!points || reduced) return;

    // Slow autonomous drift — present even without pointer input, so touch
    // visitors still get a faint sense of motion.
    points.rotation.y += delta * 0.02;

    if (interactive) {
      const lerp = Math.min(1, delta * 2);
      eased.current.x += (target.current.y * 0.08 - eased.current.x) * lerp;
      eased.current.y += (target.current.x * 0.12 - eased.current.y) * lerp;
      points.rotation.x = eased.current.x;
      points.rotation.z = eased.current.y * 0.25;
      points.position.x = eased.current.y * 0.3;
      points.position.y = -eased.current.x * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[PARTICLE_POSITIONS, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#f5f5f7"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/** Decorative-only: if WebGL init fails for any reason, render nothing rather than break the page. */
class SilentErrorBoundary extends React.Component<{ children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function AmbientBackground() {
  const reduced = Boolean(useReducedMotion());
  const finePointer = useFinePointer();
  const interactive = finePointer && !reduced;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <SilentErrorBoundary>
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
          camera={{ position: [0, 0, 5], fov: 45 }}
          frameloop={reduced ? "demand" : "always"}
          style={{ background: "transparent" }}
        >
          <ParticleField interactive={interactive} reduced={reduced} />
        </Canvas>
      </SilentErrorBoundary>
    </div>
  );
}
