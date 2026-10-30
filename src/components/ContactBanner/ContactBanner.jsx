"use client";

import styles from "./ContactBanner.module.css";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import DitherImage from "@/components/DitherImage/DitherImage";
import Copy from "@/components/Copy";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CLIP_START = "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)";
const CLIP_END = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

const GROUPS = [
  {
    label: "Adres",
    lines: ["Ceków Kolonia 6a", "62-834 Ceków"],
  },
  {
    label: "Kontakt",
    lines: [
      { href: "tel:+48600306425", text: "+48 600 306 425" },
      { href: "mailto:rafal@moranda.com.pl", text: "rafal@moranda.com.pl" },
    ],
  },
  {
    label: "Zakres usług",
    lines: ["Fotowoltaika", "Instalacje elektryczne", "Monitoring i alarmy"],
  },
];

function Line({ line }) {
  if (typeof line === "string") return <p>{line}</p>;

  return (
    <p>
      <a
        href={line.href}
        {...(line.external
          ? { target: "_blank", rel: "noreferrer" }
          : undefined)}
      >
        {line.text}
      </a>
    </p>
  );
}

export default function ContactBanner() {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      gsap.set(panel, { clipPath: CLIP_START });
      gsap.to(panel, {
        clipPath: CLIP_END,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: panel,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section ref={sectionRef} className={styles.contactBanner}>
      <div className={styles.bg} aria-hidden="true">
        <DitherImage src="/images/contact/banner.webp" alt="" />
      </div>

      <div className={styles.wrap}>
        <div ref={panelRef} className={styles.panel}>
          <div className={styles.intro}>
            <Copy delay={0.2} trigger={`.${styles.panel}`}>
              <h6>Skontaktuj się z nami</h6>
            </Copy>
            <Copy delay={0.35} trigger={`.${styles.panel}`}>
              <p>
                Zapytaj o instalację fotowoltaiczną, elektryczną lub system
                zabezpieczeń. Doradzimy i przygotujemy bezpłatną wycenę.
              </p>
            </Copy>
          </div>

          <div className={styles.meta}>
            {GROUPS.map(({ label, lines }, index) => (
              <div key={label} className={styles.group}>
                <Copy
                  variant="flicker"
                  delay={0.5 + index * 0.12}
                  trigger={`.${styles.panel}`}
                >
                  <p className="mono sm">{label}</p>
                </Copy>
                <Copy
                  delay={0.5 + index * 0.12}
                  stagger={0.06}
                  trigger={`.${styles.panel}`}
                >
                  <div className={styles.lines}>
                    {lines.map((line) => (
                      <Line
                        key={typeof line === "string" ? line : line.text}
                        line={line}
                      />
                    ))}
                  </div>
                </Copy>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
