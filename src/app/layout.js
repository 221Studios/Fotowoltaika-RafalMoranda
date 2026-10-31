import "./globals.css";

import { Google_Sans_Flex, Google_Sans_Code } from "next/font/google";

import ClientLayout from "@/components/ClientLayout";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import DitherCursorTrail from "@/components/DitherCursorTrail";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin", "latin-ext"],
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: "Fotowoltaika Kalisz - Bezpłatna Wycena | ALFA",
  description:
    "Fotowoltaika w Kaliszu dla domu i firmy. Projekt, montaż i serwis instalacji PV, magazynów energii, instalacji elektrycznych i CCTV. Bezpłatna wycena.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
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
