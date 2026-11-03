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
  PRELOADER_EASE,
  PRELOADER_HERO_DELAY,
  PRELOADER_HERO_SCALE_DURATION,
  markPreloaderSeen,
  shouldShowPreloader,
} from "@/lib/preloader";

gsap.registerPlugin(useGSAP, CustomEase);

if (typeof window !== "undefined") {
  CustomEase.create("preloaderHop", PRELOADER_EASE);
}

const INTRO_SLOWDOWN = 1.2;
const COPY_SPEED_FACTOR = 0.8;
const INTRO_GAP = 1.15 * COPY_SPEED_FACTOR;
const HERO_COPY_DURATION = 1.15;
const HERO_REVEAL_DURATION =
  PRELOADER_HERO_SCALE_DURATION * INTRO_SLOWDOWN * 1.1;

export default function Home() {
  const heroRef = useRef(null);
  const ctasRef = useRef(null);
  const lenis = useLenis();
  const showPreloader = shouldShowPreloader();
  const titleDelay = showPreloader
    ? PRELOADER_HERO_DELAY + HERO_REVEAL_DURATION + INTRO_GAP
    : 0.3;
  const supportingCopyDelay = titleDelay + INTRO_GAP;
  const ctaDelay = titleDelay;

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
          duration: HERO_REVEAL_DURATION,
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
        delay: ctaDelay,
        stagger: 0.25,
        ease: "power3.out",
      });
    },
    { scope: ctasRef, dependencies: [ctaDelay] },
  );

  return (
    <>
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
            loading="eager"
            fetchPriority="high"
            unoptimized
          />
        </div>
        <div className={styles.heroHeader}>
          <Copy
            variant="flicker"
            animateOnScroll={false}
            delay={supportingCopyDelay}
            duration={0.05 * INTRO_SLOWDOWN * COPY_SPEED_FACTOR}
          >
            <SectionHeader
              variant="v2"
              groupedRight
              bullet
              left="Dla domu i biznesu"
              right="Instalacje · Kalisz i region"
            />
          </Copy>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroIntro}>
            <Copy
              animateOnScroll={false}
              delay={titleDelay}
              duration={HERO_COPY_DURATION}
              stagger={0}
            >
              <h1 className={styles.heroTitle}>
                Instalacje dla domu i<br />
                firmy w Kaliszu
              </h1>
            </Copy>
            <Copy
              animateOnScroll={false}
              delay={titleDelay}
              duration={HERO_COPY_DURATION}
              stagger={0}
            >
              <p className={styles.heroLead}>
                Projektujemy, montujemy i serwisujemy fotowoltaikę, instalacje
                elektryczne oraz systemy bezpieczeństwa. Działamy z Cekowa,
                obsługując Kalisz i okoliczne miejscowości.
              </p>
            </Copy>
          </div>
          <div ref={ctasRef} className={styles.heroCtas}>
            <Button
              variant="primary"
              href="/kontakt"
              className={styles.ctaPrimary}
            >
              Umów bezpłatną wycenę
            </Button>
            <Button
              variant="secondary"
              href="/realizacje"
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
              <p className={`mono ${styles.localLabel}`}>Oferta ALFA · Ceków, Kalisz i region</p>
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
                href="/kontakt"
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
      </div>

      <CustomerReviews />

      <div className={styles.areaGroup}>
        <RecentInstallations />
      </div>

      <section className={styles.trust} aria-labelledby="credentials-title">
        <div className={`container ${styles.credentialsInner}`}>
          <div className={styles.credentialsHeading}>
            <div>
              <p className={`mono ${styles.trustLabel}`}>Poznaj ALFA Rafał Morańda</p>
              <h2 id="credentials-title">Komponenty, kwalifikacje i serwis</h2>
            </div>
            <Button variant="primary" href="/o-nas" className={styles.aboutLink}>
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
