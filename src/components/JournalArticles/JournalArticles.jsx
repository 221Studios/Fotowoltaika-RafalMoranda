"use client";

import styles from "./JournalArticles.module.css";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Copy from "@/components/Copy";
import SectionHeader from "@/components/SectionHeader";
import DitherImage from "@/components/DitherImage/DitherImage";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ITEMS = [
  {
    title: "Monitoring domu — podgląd obrazu z kamer w telefonie",
    image: "/images/journal/article-1.webp",
  },
  {
    title: "Monitoring firmy — rejestracja i archiwizacja obrazu",
    image: "/images/journal/article-2.webp",
  },
  {
    title: "System CCTV dopasowany do obiektu i jego otoczenia",
    image: "/images/journal/article-3.webp",
  },
  {
    title: "Zdalny dostęp do obrazu przez internet",
    image: "/images/journal/article-4.webp",
  },
  {
    title: "Kamery, rejestratory i serwis systemu monitoringu",
    image: "/images/journal/article-5.webp",
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
        <SectionHeader bullet left="Monitoring wizyjny" right="CCTV" />
      </Copy>

      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <Copy>
            <h2>System monitoringu dopasowany do Twoich potrzeb</h2>
          </Copy>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {ITEMS.map(({ title, image }) => (
            <article key={title} className={styles.article}>
              <div className={styles.image}>
                <DitherImage src={image} alt="" />
              </div>
              <h3 className={styles.title}>{title}</h3>
              <Button href="/kontakt" className={styles.cta}>
                Zapytaj o montaż
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
