import type { Metadata, Viewport } from "next";
import { SiteBackground } from "@/components/SiteBackground";
import "./globals.css";

const SITE_TITLE = "Decibel | Influencer Marketing & UGC Agency";
const SITE_DESCRIPTION =
  "Creator campaigns, high-converting UGC studio production, and quantified ROI attribution for modern brands.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Decibel",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 2332,
        height: 1800,
        alt: "Decibel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
  other: {
    "contact:sheik": "sheik@decibel.co",
    "contact:anu": "anu@decibel.co",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
