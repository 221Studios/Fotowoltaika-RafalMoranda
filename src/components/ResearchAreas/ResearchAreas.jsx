"use client";

import styles from "./ResearchAreas.module.css";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  SunIcon,
  BoltIcon,
  HomeIcon,
  CheckIcon,
} from "@unlocalhosted/dither-icons";

import DitherImage from "@/components/DitherImage/DitherImage";
import { BRAND_COLORS } from "@/lib/brandColors";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CARDS = [
  {
    title: "Panele fotowoltaiczne",
    label: "Moduły",
    description:
      "Dobieramy moc instalacji do zużycia energii i warunków montażu. W realizacjach wykorzystaliśmy moduły JaSolar o mocy 410–550 Wp.",
    Icon: SunIcon,
  },
  {
    title: "Falowniki i monitoring",
    label: "Sterowanie",
    description:
      "Dobieramy falowniki Huawei SUN2000 do instalacji i pomagamy monitorować jej pracę w aplikacji.",
    Icon: BoltIcon,
  },
  {
    title: "Magazyny energii",
    label: "Autokonsumpcja",
    description:
      "Wybrane falowniki Huawei SUN2000 można połączyć z magazynami energii LUNA 2000. Kompatybilność potwierdzamy dla konkretnego modelu.",
    Icon: HomeIcon,
  },
  {
    title: "Konstrukcje montażowe",
    label: "Montaż",
    description:
      "Dobieramy system mocowań do rodzaju dachu lub montażu naziemnego. Wykorzystujemy m.in. rozwiązania BAKS.",
    Icon: CheckIcon,
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
          src="/images/research/areas.webp"
          alt=""
          darkColor={BRAND_COLORS.red}
          lightColor={BRAND_COLORS.white}
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
