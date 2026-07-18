import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z.N.K Tools & Services - Premium Digital Subscriptions",
  description: "Get genuine AI tools, streaming subscriptions and learning platforms at affordable prices. Instant delivery via WhatsApp.",
  keywords: "AI tools, ChatGPT Plus, CapCut Pro, Google AI, digital subscriptions, streaming, learning platforms",
  authors: [{ name: "Z.N.K Tools & Services" }],
  openGraph: {
    title: "Z.N.K Tools & Services - Premium Digital Subscriptions",
    description: "Get genuine AI tools, streaming subscriptions and learning platforms at affordable prices.",
    url: "https://znktools.com",
    siteName: "Z.N.K Tools & Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Z.N.K Tools & Services - Premium Digital Subscriptions",
    description: "Get genuine AI tools, streaming subscriptions and learning platforms at affordable prices.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
