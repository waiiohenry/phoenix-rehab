import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
