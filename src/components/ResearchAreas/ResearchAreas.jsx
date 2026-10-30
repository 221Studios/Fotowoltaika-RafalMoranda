"use client";

import styles from "./ResearchAreas.module.css";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  CpuIcon,
  FlaskIcon,
  NetworkIcon,
  TensorIcon,
} from "@unlocalhosted/dither-icons";

import DitherImage from "@/components/DitherImage/DitherImage";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CARDS = [
  {
    title: "How models reach an answer",
    label: "Models",
    description:
      "We study how models actually reach an answer, where that reasoning holds, and where it quietly falls apart.",
    Icon: CpuIcon,
  },
  {
    title: "Systems that hold up at scale",
    label: "Systems",
    description:
      "We turn a working model into infrastructure that stays fast and reliable long after the paper ships.",
    Icon: NetworkIcon,
  },
  {
    title: "Alignment you can inspect",
    label: "Alignment",
    description:
      "We build the evaluations and safeguards that keep a system honest before it ever reaches a real user.",
    Icon: TensorIcon,
  },
  {
    title: "Tested against real problems",
    label: "Field tests",
    description:
      "We take the work out of the benchmark and run it on the messy problems it will actually face in production.",
    Icon: FlaskIcon,
  },
];

export default function ResearchAreas() {
  const container = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(
        container.current.querySelectorAll(`.${styles.area}`),
      );

      cards.forEach((card, index) => {
        if (index >= cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cards[cards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });

        ScrollTrigger.create({
          trigger: cards[index + 1],
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(card, {
              scale: 1 - progress * 0.25,
              rotation: (index % 2 === 0 ? 5 : -5) * progress,
              opacity: 1 - progress,
              filter: `blur(${progress * 8}px)`,
            });
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <section className={styles.researchAreas} ref={container}>
      <div className={styles.bg} aria-hidden="true">
        <DitherImage
          src="/images/research/areas.jpg"
          alt=""
          darkColor="#1757e8"
          lightColor="#e8e6e0"
        />
      </div>

      <div className={styles.stack}>
        {CARDS.map(({ title, label, description, Icon }) => (
          <article key={title} className={styles.area}>
            <div className={styles.panel}>
              <div className={styles.main}>
                <h2 className={styles.title}>{title}</h2>
                <p className="lg">{description}</p>
              </div>

              <div className={styles.side}>
                <div className={`di-trigger ${styles.icon}`}>
                  <Icon size={160} texture="dither" animate />
                </div>
                <p className="mono sm">{label}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
