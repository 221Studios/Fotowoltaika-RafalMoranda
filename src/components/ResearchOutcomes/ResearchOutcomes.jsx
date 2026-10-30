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
  "Models that ship, not just papers",
  "Evaluations anyone can rerun",
  "Failure modes found before users do",
  "Systems that hold under real traffic",
  "Reasoning you can trace and check",
  "Benchmarks we keep honest over time",
  "Findings we publish in full",
  "Tools partners can build on",
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
            left="What comes out"
            right="Proof over promises"
          />
        </Copy>

        <Copy>
          <h2 className={styles.title}>
            What we
            <br />
            prove
          </h2>
        </Copy>

        <Copy>
          <p className={`lg ${styles.copy}`}>
            Research that stops at a benchmark is easy to fake and hard to trust.
            Every track here is meant to leave something real behind, whether that
            is a model, an evaluation, or a system already run in production.
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
