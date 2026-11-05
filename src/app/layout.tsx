import type { Metadata, Viewport } from "next";
import { getPublicSiteUrl, profile } from "@/config/profile";
import "./globals.css";

const siteUrl = getPublicSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.fullName} | ${profile.company}`,
  description: `${profile.fullName}, ${profile.jobTitle} at ${profile.company}, ${profile.facility}.`,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: "/",
    title: `${profile.fullName} | ${profile.company}`,
    description: `${profile.jobTitle} at ${profile.company} — ${profile.facility}.`,
    siteName: `${profile.fullName} — Digital Business Card`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${profile.fullName}, ${profile.jobTitle}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} | ${profile.company}`,
    description: `${profile.jobTitle} at ${profile.company} — ${profile.facility}.`,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071C3B",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
