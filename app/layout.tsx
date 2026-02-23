import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://phoenixrehab.ca"),
  title: {
    default:
      "Phoenix Rehab | Physiotherapy, Massage & Chinese Medicine in Burnaby & Vancouver",
    template: "%s — Phoenix Rehab",
  },
  description:
    "Physiotherapy, RMT Massage, Chiropractic, Kinesiology, Acupuncture, Traditional Chinese Medicine & Counseling in Burnaby & Vancouver. Direct billing ICBC, WorkSafeBC, MSP & insurers.",
  openGraph: {
    siteName: "Phoenix Rehab",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-[#2d2d2d] bg-white">
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
