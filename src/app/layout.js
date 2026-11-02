import "./globals.css";

import { Google_Sans_Flex, Google_Sans_Code, Manrope } from "next/font/google";

import ClientLayout from "@/components/ClientLayout";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import DitherCursorTrail from "@/components/DitherCursorTrail";
import JsonLd from "@/components/JsonLd";
import {
  BUSINESS_SCHEMA,
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin", "latin-ext"],
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin", "latin-ext"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

const isPreview = Boolean(process.env.NEXT_PUBLIC_BASE_PATH);

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Fotowoltaika Kalisz — bezpłatna wycena | ALFA",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: isPreview
    ? { index: false, follow: false, noarchive: true }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: SITE_NAME,
    title: "Fotowoltaika Kalisz — bezpłatna wycena | ALFA",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: "Instalacja fotowoltaiczna ALFA Rafał Morańda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fotowoltaika Kalisz — bezpłatna wycena | ALFA",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className={`${googleSansFlex.variable} ${googleSansCode.variable} ${manrope.variable}`}
    >
      <body>
        <JsonLd data={BUSINESS_SCHEMA} />
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
