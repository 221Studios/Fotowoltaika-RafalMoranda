"use client";

import styles from "./ResearchOutcomes.module.css";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckIcon } from "@unlocalhosted/dither-icons";

import Copy from "@/components/Copy";
import SectionHeader from "@/components/SectionHeader";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const OUTCOMES = [
  "Dobór mocy do zużycia energii",
  "Projekt po oględzinach i pomiarach",
  "Moduły fotowoltaiczne JaSolar",
  "Falowniki i magazyny energii Huawei",
  "Mocowania dopasowane do pokrycia dachu",
  "Montaż i uruchomienie instalacji",
  "Monitoring pracy systemu w aplikacji",
  "Serwis i okresowe przeglądy",
];

export default function ResearchOutcomes() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(
    () => {
      const list = listRef.current;
      if (!list) return;

      const checks = list.querySelectorAll(`.${styles.check}`);
      if (!checks.length) return;

      gsap.set(checks, { scale: 0, transformOrigin: "center", force3D: false });
      gsap.to(checks, {
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        force3D: false,
        scrollTrigger: {
          trigger: list,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section ref={sectionRef} className={styles.researchOutcomes}>
      <div className={`container ${styles.inner}`}>
        <Copy variant="flicker">
          <SectionHeader
            bullet
            left="Co ustalamy w ofercie"
            right="Od doboru do serwisu"
          />
        </Copy>

        <Copy>
          <h2 className={styles.title}>
            Instalacja
            <br />
            dopasowana
          </h2>
        </Copy>

        <Copy>
          <p className={`lg ${styles.copy}`}>
            Zanim zdecydujesz się na montaż, ustalamy urządzenia, zakres prac
            i sposób uruchomienia instalacji. Dzięki temu możesz porównać
            ofertę z potrzebami swojego budynku i wiedzieć, co obejmuje
            realizacja oraz późniejsza obsługa.
          </p>
        </Copy>

        <Copy>
          <ul ref={listRef} className={styles.list}>
            {OUTCOMES.map((item) => (
              <li key={item} className={styles.item}>
                <span className={`di-trigger ${styles.check}`} aria-hidden="true">
                  <CheckIcon size={28} texture="dither" animate />
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </Copy>
      </div>
    </section>
  );
}
