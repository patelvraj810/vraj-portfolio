import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://vrajpatel.dev";

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vraj Patel | Tech Support Specialist & IT Professional",
    template: "%s | Vraj Patel",
  },
  description: "Tech Support Specialist with 6+ years of experience in IT support, Microsoft 365, Azure AD, and AI-driven automation. Making tech headaches disappear since 2019.",
  keywords: [
    "Tech Support Specialist",
    "IT Support",
    "Microsoft 365",
    "Azure AD",
    "IT Professional",
    "Technical Support",
    "Help Desk",
    "ITIL",
    "AI Automation",
    "Toronto IT",
    "Vraj Patel",
  ],
  authors: [{ name: "Vraj Patel", url: siteUrl }],
  creator: "Vraj Patel",
  publisher: "Vraj Patel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Vraj Patel Portfolio",
    title: "Vraj Patel | Tech Support Specialist & IT Professional",
    description: "Tech Support Specialist with 6+ years of experience in IT support, Microsoft 365, Azure AD, and AI-driven automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vraj Patel - Tech Support Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vraj Patel | Tech Support Specialist",
    description: "Tech Support Specialist with 6+ years of experience in IT support, Microsoft 365, Azure AD, and AI-driven automation.",
    images: ["/og-image.png"],
    creator: "@vrajpatel810",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
