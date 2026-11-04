"use client";

import styles from "./JournalArticles.module.css";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Copy from "@/components/Copy";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { withBasePath } from "@/lib/withBasePath";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ITEMS = [
  {
    title: "Kamery zewnętrzne dla domu i posesji",
    copy: "Dobieramy pola widzenia dla wejścia, bramy, podjazdu, garażu i terenu wokół budynku. Kamery montujemy z uwzględnieniem obrazu nocnego i możliwości identyfikacji zdarzeń.",
    image: "/images/journal/article-1.webp",
    alt: "Kamera monitoringu CCTV zamontowana na elewacji budynku",
  },
  {
    title: "Monitoring firmy i wnętrza obiektu",
    copy: "Projektujemy monitoring wejść, biur, magazynów, hal i stref obsługi. Zakres systemu dopasowujemy do organizacji obiektu oraz oczekiwanego czasu przechowywania nagrań.",
    image: "/images/journal/article-2.webp",
    alt: "Kamera CCTV Novus zamontowana pod sufitem obiektu",
  },
  {
    title: "Monitoring obiektów i terenu firmy",
    copy: "Kamery zewnętrzne pomagają obserwować place, parkingi, ciągi komunikacyjne i strefy dostaw. Dobieramy obiektyw, rozdzielczość i doświetlenie do odległości oraz sceny.",
    image: "/images/journal/article-3.webp",
    alt: "Budynek firmy objęty zewnętrznym monitoringiem wizyjnym",
  },
  {
    title: "Podgląd w telefonie i dostęp do nagrań",
    copy: "Konfigurujemy podgląd na żywo, odtwarzanie archiwum i aplikację mobilną. W kompatybilnych systemach ustawiamy także powiadomienia o wykryciu ludzi lub pojazdów.",
    image: "/images/journal/article-4.webp",
    alt: "Stanowisko podglądu obrazu z wielu kamer monitoringu",
  },
  {
    title: "Uruchomienie, modernizacja i serwis CCTV",
    copy: "Testujemy obraz dzienny i nocny, konfigurujemy rejestrator oraz szkolimy z obsługi. Serwisujemy także istniejące kamery, zapis nagrań i zdalny dostęp.",
    image: "/images/journal/article-5.webp",
    alt: "Kamera systemu monitoringu wizyjnego zamontowana w budynku",
  },
];

export default function JournalArticles() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(
    () => {
      const grid = gridRef.current;
      if (!grid) return;

      const cards = grid.querySelectorAll(`.${styles.article}`);
      if (!cards.length) return;

      gsap.set(cards, { y: 300, opacity: 0 });
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section ref={sectionRef} className={styles.journalArticles}>
      <Copy variant="flicker">
        <SectionHeader bullet left="Systemy bezpieczeństwa" right="Monitoring CCTV" />
      </Copy>

      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <Copy>
            <h2>Pełna kontrola nad tym, co dla Ciebie ważne</h2>
          </Copy>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {ITEMS.map(({ title, copy, image, alt }) => (
            <article key={title} className={styles.article}>
              <div className={styles.image}>
                <Image
                  className={styles.photo}
                  src={withBasePath(image)}
                  alt={alt}
                  fill
                  sizes="(max-width: 1040px) 100vw, 33vw"
                  unoptimized
                />
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{copy}</p>
              <Button href="/kontakt" className={styles.cta}>
                Bezpłatna wycena monitoringu
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
