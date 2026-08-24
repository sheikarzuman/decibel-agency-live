export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-6 py-14">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <span className="pl-1 text-sm font-light uppercase tracking-[0.35em] text-white">
          D E C I B E L
        </span>

        <p className="text-[13px] text-foreground-muted">
          Influencer Marketing &amp; UGC Agency &middot; South India
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-foreground-muted">
          <a
            href="mailto:decible.creative.in@gmail.com"
            className="transition-colors duration-150 hover:text-white"
          >
            decible.creative.in@gmail.com
          </a>
          <a
            href="https://wa.me/916369411388"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 hover:text-white"
          >
            +91 63694 11388
          </a>
          <a
            href="https://www.instagram.com/decibel.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 hover:text-white"
          >
            @decibel.co.in
          </a>
          <span>Bengaluru &middot; Coimbatore &middot; Chennai</span>
        </div>

        <p className="text-[12px] text-foreground-muted/70">
          &copy; {year} Decibel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
