"use client";

import styles from "./home.module.css";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useLenis } from "lenis/react";
import Image from "next/image";

import Preloader from "@/components/Preloader";
import DitherImage from "@/components/DitherImage/DitherImage";
import Copy from "@/components/Copy";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import FocusAreas from "@/components/FocusAreas";
import Marquee from "@/components/Marquee";
import ProcessSteps from "@/components/ProcessSteps";
import RecentInstallations from "@/components/RecentInstallations/RecentInstallations";
import StatementBanner from "@/components/StatementBanner";
import { BRAND_COLORS } from "@/lib/brandColors";
import { assetPath } from "@/lib/assetPath";

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
      {showPreloader ? <Preloader onExpand={expandHero} /> : null}

      <section
        ref={heroRef}
        className={styles.hero}
        data-hero-intro={showPreloader ? "" : undefined}
      >
        <div className={styles.heroBg}>
          <DitherImage
            className={styles.heroDither}
            src="/images/home/hero-background.webp"
            alt=""
            darkColor={BRAND_COLORS.red}
            lightColor={BRAND_COLORS.gray}
          />
          <Image
            className={styles.heroForeground}
            src={assetPath("/images/home/hero-foreground.webp")}
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
              left="DLA DOMU I BIZNESU"
              right="Fotowoltaika Kalisz"
            />
          </Copy>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <Copy animateOnScroll={false} delay={wait + 0.75}>
            <h1 className={styles.heroTitle}>
              Najlepsze rozwiązania
            </h1>
          </Copy>
          <div ref={ctasRef} className={styles.heroCtas}>
            <Button
              variant="primary"
              href="/research"
              className={styles.ctaPrimary}
            >
              Oferta
            </Button>
            <Button
              variant="secondary"
              href="/firm"
              className={styles.ctaSecondary}
            >
              O nas
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <Copy variant="flicker">
          <SectionHeader bullet left="ALFA Rafał Morańda" right="Nasze usługi" />
        </Copy>
        <div className={`container ${styles.aboutCols}`}>
          <div className={styles.aboutCol} />
          <div className={styles.aboutCopy}>
            <Copy>
              <h4>
                ALFA Rafał Morańda zapewnia kompleksową obsługę
                elektryczno-telewizyjno-informatyczną oraz techniczną ochronę
                mienia. Wykonujemy instalacje alarmowe, fotowoltaiczne i
                elektryczne, kontrolę dostępu oraz systemy monitoringu CCTV.
              </h4>
            </Copy>
          </div>
        </div>
      </section>

      <FocusAreas />

      <Marquee />

      <ProcessSteps />

      <RecentInstallations />

      <StatementBanner
        lightColor={BRAND_COLORS.gray}
        copyTopLeft="Bezpłatna wycena"
        copyBottomRight={["Zadzwoń:", "+48\u00a0600\u00a0306\u00a0425"]}
      />
    </>
  );
}
