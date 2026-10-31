"use client";

import styles from "./home.module.css";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useLenis } from "lenis/react";
import Image from "next/image";
import { CheckIcon } from "@unlocalhosted/dither-icons";

import Preloader from "@/components/Preloader";
import Copy from "@/components/Copy";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import FocusAreas from "@/components/FocusAreas";
import Marquee from "@/components/Marquee";
import RegionalServiceMap from "@/components/RegionalServiceMap/RegionalServiceMap";
import RecentInstallations from "@/components/RecentInstallations/RecentInstallations";
import CustomerReviews from "@/components/CustomerReviews/CustomerReviews";
import { withBasePath } from "@/lib/withBasePath";

import {
  HOME_COPY_BASE_DELAY,
  PRELOADER_COPY_BASE_DELAY,
  PRELOADER_EASE,
  PRELOADER_HERO_SCALE_DURATION,
  markPreloaderSeen,
  shouldShowPreloader,
} from "@/lib/preloader";

gsap.registerPlugin(useGSAP, CustomEase);

if (typeof window !== "undefined") {
  CustomEase.create("preloaderHop", PRELOADER_EASE);
}

const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "ALFA Rafał Morańda",
  url: "https://www.moranda.com.pl/",
  image: "https://www.moranda.com.pl/images/home/hero.webp",
  logo: "https://www.moranda.com.pl/images/moranda-logo.svg",
  telephone: "+48 600 306 425",
  email: "rafal@moranda.com.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ceków Kolonia 6a",
    addressLocality: "Ceków",
    postalCode: "62-834",
    addressRegion: "Wielkopolskie",
    addressCountry: "PL",
  },
  areaServed: [
    { "@type": "City", name: "Kalisz" },
    { "@type": "AdministrativeArea", name: "Powiat kaliski" },
  ],
  knowsAbout: [
    "Instalacje fotowoltaiczne",
    "Magazyny energii",
    "Instalacje elektryczne",
    "Systemy alarmowe i monitoring CCTV",
  ],
};

export default function Home() {
  const heroRef = useRef(null);
  const ctasRef = useRef(null);
  const lenis = useLenis();
  const showPreloader = shouldShowPreloader();
  const wait = showPreloader
    ? PRELOADER_COPY_BASE_DELAY - HOME_COPY_BASE_DELAY
    : 0;

  useEffect(() => {
    return () => {
      markPreloaderSeen();
    };
  }, []);

  const expandHero = () => {
    const hero = heroRef.current;
    if (!hero) return Promise.resolve();

    hero.removeAttribute("data-hero-intro");

    return new Promise((resolve) => {
      gsap.fromTo(
        hero,
        {
          scale: 0,
          rotation: -20,
          autoAlpha: 1,
          transformOrigin: "center center",
          force3D: true,
        },
        {
          scale: 1,
          rotation: 0,
          duration: PRELOADER_HERO_SCALE_DURATION,
          ease: "preloaderHop",
          force3D: true,
          overwrite: true,
          onComplete: () => {
            gsap.delayedCall(0.35, () => {
              lenis?.start();
            });
            resolve();
          },
        },
      );
    });
  };

  useGSAP(
    () => {
      const btns = gsap.utils.toArray(ctasRef.current?.children);
      if (!btns.length) return;

      gsap.set(btns, { y: 300 });

      gsap.to(btns, {
        y: 0,
        duration: 0.75,
        delay: wait + 0.75,
        stagger: 0.25,
        ease: "power3.out",
      });
    },
    { scope: ctasRef, dependencies: [wait] },
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(BUSINESS_SCHEMA).replace(/</g, "\\u003c"),
        }}
      />
      {showPreloader ? <Preloader onExpand={expandHero} /> : null}

      <section
        ref={heroRef}
        className={styles.hero}
        data-hero-intro={showPreloader ? "" : undefined}
      >
        <div className={styles.heroBg}>
          <Image
            className={styles.heroImage}
            src={withBasePath("/images/home/hero.webp")}
            alt=""
            width={2560}
            height={1067}
            unoptimized
          />
        </div>
        <div className={styles.heroHeader}>
          <Copy variant="flicker" animateOnScroll={false} delay={wait + 1}>
            <SectionHeader
              variant="v2"
              groupedRight
              bullet
              left="Dla domu i biznesu"
              right="Fotowoltaika Kalisz"
            />
          </Copy>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroIntro}>
            <Copy animateOnScroll={false} delay={wait + 0.75}>
              <h1 className={styles.heroTitle}>
                Fotowoltaika w Kaliszu dla domu i firmy
              </h1>
            </Copy>
            <Copy animateOnScroll={false} delay={wait + 1}>
              <p className={styles.heroLead}>
                Projektujemy i montujemy instalacje fotowoltaiczne dopasowane do
                zużycia energii i warunków na miejscu. Od bezpłatnej konsultacji
                i wyceny po montaż oraz uruchomienie.
              </p>
            </Copy>
          </div>
          <div ref={ctasRef} className={styles.heroCtas}>
            <Button
              variant="primary"
              href="/contact"
              className={styles.ctaPrimary}
            >
              Umów bezpłatną wycenę
            </Button>
            <Button
              variant="secondary"
              href="/work"
              className={styles.ctaSecondary}
            >
              Zobacz realizacje
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.offerGroup} aria-label="Oferta firmy ALFA">
        <FocusAreas />

        <div className={styles.offerTeaser}>
          <div className={`container ${styles.offerTeaserContent}`}>
            <div className={styles.offerHeading}>
              <p className={`mono ${styles.localLabel}`}>Oferta ALFA · Kalisz i okolica</p>
              <h2>Fotowoltaika, instalacje elektryczne i systemy bezpieczeństwa.</h2>
            </div>
            <div className={styles.offerDescription}>
              <p>
                Projektujemy, montujemy i serwisujemy instalacje fotowoltaiczne,
                elektryczne oraz niskoprądowe. Wykonujemy także alarmy, kontrolę
                dostępu i monitoring CCTV dla domów i firm w Kaliszu i okolicy.
              </p>
              <Button
                variant="primary"
                href="/contact"
                className={styles.offerCta}
              >
                Porozmawiaj o zakresie prac
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <div className={styles.areaGroup}>
        <RegionalServiceMap />
        <RecentInstallations />
      </div>

      <CustomerReviews />

      <section className={styles.trust} aria-labelledby="credentials-title">
        <div className={`container ${styles.credentialsInner}`}>
          <div className={styles.credentialsHeading}>
            <div>
              <p className={`mono ${styles.trustLabel}`}>Poznaj ALFA Rafał Morańda</p>
              <h2 id="credentials-title">Komponenty, kwalifikacje i serwis</h2>
            </div>
            <Button variant="primary" href="/firm" className={styles.aboutLink}>
              Poznaj naszą firmę
            </Button>
          </div>
          <div className={styles.trustGrid}>
            <article className={styles.experienceCard}>
              <p className={`mono ${styles.trustLabel}`}>Doświadczenie</p>
              <p className={styles.experienceNumber}>25+</p>
              <h3>lat praktyki instalacyjnej</h3>
              <p className={styles.trustCopy}>
                Doświadczenie zdobywamy od 1998 roku. Firma ALFA działa od 2005
                roku.
              </p>
            </article>
            <article className={styles.brandsCard}>
              <p className={`mono ${styles.trustLabel}`}>Marki komponentów</p>
              <div className={styles.brandNames} role="group" aria-label="Marki komponentów">
                <span className={styles.brandLogo}>
                  <Image src="/images/brands/ja-solar.svg" alt="JA Solar" width={181} height={32} />
                </span>
                <span className={styles.brandLogo}>
                  <Image src="/images/brands/huawei.svg" alt="Huawei" width={180} height={29} />
                </span>
                <span className={`${styles.brandLogo} ${styles.baksLogo}`}>
                  <Image src="/images/brands/baks.svg" alt="" width={28} height={33} />
                  <strong>BAKS</strong>
                </span>
              </div>
              <p className={styles.trustCopy}>
                Dobór komponentów zależy od projektu i warunków montażu.
              </p>
            </article>
            <article>
              <p className={`mono ${styles.trustLabel}`}>Uprawnienia</p>
              <div className={styles.qualificationIcons} aria-hidden="true">
                <span className={styles.sepWordmark}>SEP</span>
              </div>
              <h3>SEP i licencja II stopnia</h3>
              <p className={styles.trustCopy}>
                Uprawnienia SEP oraz licencja pracownika zabezpieczenia
                technicznego II stopnia.
              </p>
            </article>
            <article>
              <p className={`mono ${styles.trustLabel}`}>Gwarancja i opieka</p>
              <div className={styles.qualificationIcons} aria-hidden="true">
                <span className={`${styles.qualificationIcon} ${styles.warrantyIcon}`}>
                  <CheckIcon size={48} texture="dither" animate />
                </span>
              </div>
              <h3>Serwis także po montażu</h3>
              <p className={styles.trustCopy}>
                Serwis gwarancyjny i pogwarancyjny, przeglądy oraz konserwacja.
                Zakres gwarancji zależy od urządzenia i warunków oferty.
              </p>
            </article>
          </div>
        </div>
      </section>

    </>
  );
}
