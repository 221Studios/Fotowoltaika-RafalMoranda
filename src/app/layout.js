import "./globals.css";

import { Google_Sans_Flex, Google_Sans_Code } from "next/font/google";

import ClientLayout from "@/components/ClientLayout";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import DitherCursorTrail from "@/components/DitherCursorTrail";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tessera — Codegrid",
  description: "MWT by Codegrid — September 2026",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${googleSansFlex.variable} ${googleSansCode.variable}`}
    >
      <body>
        <ClientLayout>
          <Menu />
          {children}
          <Footer />
          <DitherCursorTrail />
        </ClientLayout>
      </body>
    </html>
  );
}
