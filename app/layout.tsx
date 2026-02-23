import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
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
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PQP4RNN7');`}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17373242935"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17373242935');`}
        </Script>

        {/* Event snippet for Submit lead form conversion page */}
        <Script id="google-conversion" strategy="afterInteractive">
          {`function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-17373242935/WHLLCLy17ZgbELfMmtxA',
                'event_callback': callback
            });
            return false;
          }`}
        </Script>
      </head>
      <body className="font-sans antialiased text-[#2d2d2d] bg-white">
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
