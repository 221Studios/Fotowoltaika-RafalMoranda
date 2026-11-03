"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Copy from "@/components/Copy";
import styles from "./ContactChecklist.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ITEMS = [
  {
    title: "Rachunek za prąd",
    copy: "Najlepiej fakturę rozliczeniową z rocznym zużyciem energii w kWh. Na jej podstawie dobieramy moc instalacji.",
  },
  {
    title: "Numer PPE i moc przyłączeniowa",
    copy: "Znajdziesz je na fakturze lub w umowie z Energą. Są potrzebne do zgłoszenia mikroinstalacji w Energa-Operator.",
  },
  {
    title: "Informacje o dachu",
    copy: "Rodzaj pokrycia, przybliżony kierunek połaci i zdjęcie dachu. Pozwala to wstępnie ocenić warunki montażu.",
  },
  {
    title: "Plany na najbliższe lata",
    copy: "Pompa ciepła, auto elektryczne albo magazyn energii zmieniają zużycie prądu i potrzebną moc instalacji.",
  },
];

const SCALE_STEP = 0.1;
const SHIFT_VMIN = -2;

export default function ContactChecklist() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cards = gsap.utils.toArray(
        section.querySelectorAll(`.${styles.item}`),
      );
      const faces = gsap.utils.toArray(
        section.querySelectorAll(`.${styles.face}`),
      );
      const last = cards[cards.length - 1];
      if (!cards.length) return;

      const stick = () => getComputedStyle(cards[0]).top;

      gsap.set(faces, { y: 300, opacity: 0 });
      gsap.to(faces, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      cards.forEach((card, index) => {
        const steps = cards.length - 1 - index;
        if (steps < 1) return;

        const shift = () =>
          steps * SHIFT_VMIN * (Math.min(window.innerWidth, window.innerHeight) / 100);

        gsap.to(card, {
          scale: 1 - SCALE_STEP * steps,
          y: shift,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: () => `top ${stick()}`,
            endTrigger: last,
            end: () => `top ${stick()}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(card.querySelector("p"), {
          color: "var(--base-500)",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: () => `top ${stick()}`,
            endTrigger: last,
            end: () => `top ${stick()}`,
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className={styles.section} ref={sectionRef} aria-labelledby="contact-checklist-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.list}>
          {ITEMS.map(({ title, copy }, index) => (
            <article
              key={title}
              className={styles.item}
              style={{ zIndex: index + 1 }}
            >
              <div className={styles.face}>
                <div className={styles.cardCopy}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <h6 className={styles.index}>
                  {String(index + 1).padStart(2, "0")}
                </h6>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.heading}>
          <Copy>
            <p className={`mono ${styles.kicker}`}>Przed bezpłatnymi oględzinami</p>
          </Copy>
          <Copy>
            <h5 id="contact-checklist-title">
              <span className={styles.titlePhrase}>Co przygotować</span>{" "}
              do wyceny fotowoltaiki?
            </h5>
          </Copy>
          <Copy>
            <p className={styles.lead}>
              Z tymi informacjami przygotujemy precyzyjną ofertę już podczas
              pierwszej rozmowy lub wizyty.
            </p>
          </Copy>
        </div>
      </div>
    </section>
  );
}
