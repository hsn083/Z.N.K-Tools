import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import ClientProviders from "@/components/ClientProviders";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: true,
  loading: () => <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px] lg:h-20 bg-[#090909]/95 backdrop-blur-xl border-b border-white/[0.08]" />
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Explorer | Premium AI Tools & Digital Resources",
  description: "Discover the best AI tools, premium subscriptions, productivity software, and digital resources all in one place.",
  keywords: "AI Explorer, AI Tools, ChatGPT Plus, CapCut Pro, Google AI Pro, AI Software, Premium Tools, Digital Products",
  authors: [{ name: "AI Explorer" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "AI Explorer | Premium AI Tools & Digital Resources",
    description: "Discover the best AI tools, premium subscriptions, productivity software, and digital resources all in one place.",
    url: "https://aiexplorer.com",
    siteName: "AI Explorer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Explorer | Premium AI Tools & Digital Resources",
    description: "Discover the best AI tools, premium subscriptions, productivity software, and digital resources all in one place.",
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
        <ClientProviders>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
