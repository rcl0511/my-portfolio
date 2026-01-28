import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "류채린 포트폴리오",
  description: "Frontend · Healthcare · IoT · 포트폴리오",
  openGraph: {
    title: "Chaerin Ryu | Portfolio",
    description: "Frontend · Healthcare · IoT · 포트폴리오",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaerin Ryu | Portfolio",
    description: "Frontend · Healthcare · IoT · 포트폴리오",
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
