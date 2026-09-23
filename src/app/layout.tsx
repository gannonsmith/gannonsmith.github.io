import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gannonsmith.dev"),
  title: "Gannon Smith | Software Engineer",
  description:
    "Gannon Smith is a software engineer at Procter & Gamble working across AI-enabled systems, backend engineering, performance, and computer architecture.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Gannon Smith", url: "https://gannonsmith.dev" }],
  creator: "Gannon Smith",
  publisher: "Gannon Smith",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://gannonsmith.dev/",
    title: "Gannon Smith | Software Engineer",
    description:
      "Software engineering, systems, AI, and performance work by Gannon Smith.",
    siteName: "Gannon Smith",
  },
  twitter: {
    card: "summary",
    title: "Gannon Smith | Software Engineer",
    description:
      "Software engineering, systems, AI, and performance work by Gannon Smith.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
