import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmileCraft Dental Care | Premium Luxury Dentist",
  description: "Experience premium, state-of-the-art dental care at SmileCraft. Specialized in porcelain veneers, dental implants, Invisalign clear aligners, and pain-free dentistry in a relaxing, spa-like environment.",
  keywords: ["Luxury dental clinic", "Cosmetic dentistry", "Beverly Hills dentist", "Dental Implants", "Invisalign aligners", "Teeth whitening", "SmileCraft Dental"],
  openGraph: {
    title: "SmileCraft Dental Care | Premium Luxury Dentist",
    description: "Indulge in exceptional dental care. Crafting confident, healthy smiles using elite technology in a calming environment.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 w-full relative">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
