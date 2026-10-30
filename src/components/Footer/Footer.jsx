"use client";

import styles from "./Footer.module.css";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const LINKS = [
  { href: "/firm", label: "O nas" },
  { href: "/research", label: "Fotowoltaika" },
  { href: "/journal", label: "CCTV" },
  { href: "/partnerships", label: "Elektryka" },
  { href: "/work", label: "Realizacje" },
  { href: "/contact", label: "Kontakt" },
  { href: "/contact#faq", label: "FAQ" },
];

export default function Footer() {
  const pathname = usePathname();
  const rootRef = useRef(null);

  useGSAP(
    () => {
      if (pathname === "/work") return;
      const footer = rootRef.current;
      if (!footer) return;

      const headingSplits = gsap.utils
        .toArray(`.${styles.footerWord}`)
        .map((heading) => new SplitText(heading, { type: "chars" }));
      const headingChars = headingSplits.flatMap((split) => split.chars);

      const lineSplits = gsap.utils
        .toArray(`.${styles.footerLink} h6, .${styles.footerCopy}`)
        .map(
          (element) => new SplitText(element, { type: "lines", mask: "lines" }),
        );
      const contentLines = lineSplits.flatMap((split) => split.lines);
      const splits = [...headingSplits, ...lineSplits];

      gsap.set(headingChars, {
        position: "relative",
        yPercent: 125,
      });
      gsap.set(contentLines, { yPercent: 100 });

      const animateIn = () => {
        gsap.to(headingChars, {
          yPercent: 0,
          duration: 1,
          ease: "power3.out",
          stagger: { each: 0.04, from: "center" },
          overwrite: true,
        });
        gsap.to(contentLines, {
          yPercent: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
          overwrite: true,
        });
      };

      const animateOut = () => {
        gsap.to(headingChars, {
          yPercent: 125,
          duration: 0.4,
          ease: "power2.in",
          stagger: { each: 0.01, from: "center" },
          overwrite: true,
        });
        gsap.to(contentLines, {
          yPercent: 100,
          duration: 0.4,
          ease: "power2.in",
          stagger: 0.02,
          overwrite: true,
        });
      };

      ScrollTrigger.create({
        trigger: footer,
        start: "top 50%",
        onEnter: animateIn,
      });
      ScrollTrigger.create({
        trigger: footer,
        start: "top 85%",
        onLeaveBack: animateOut,
      });

      return () => {
        splits.forEach((split) => split.revert());
      };
    },
    { scope: rootRef, dependencies: [pathname] },
  );

  return (
    <footer
      className={`${styles.footer}${pathname === "/work" ? ` ${styles.hidden}` : ""}`}
      ref={rootRef}
      aria-hidden={pathname === "/work"}
    >
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerContent}>
          <nav className={styles.footerLinks} aria-label="Nawigacja w stopce">
            {LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.footerLink}>
                <h6>{label}</h6>
              </Link>
            ))}
          </nav>
          <p className={styles.footerCopy}>
            Fotowoltaika, instalacje elektryczne i monitoring. Doradzamy,
            projektujemy, montujemy i serwisujemy rozwiązania dla domu oraz
            biznesu.
          </p>
        </div>
        <div className={styles.footerHeader}>
          <p className={styles.footerLabel}>Fotowoltaika Kalisz</p>
          <h1 className={styles.footerWord}>Rafał Morańda</h1>
        </div>
      </div>
    </footer>
  );
}
