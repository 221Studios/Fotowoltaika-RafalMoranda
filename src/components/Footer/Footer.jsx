"use client";

import styles from "./Footer.module.css";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const LINKS = [
  { href: "/o-nas", label: "O nas" },
  { href: "/fotowoltaika", label: "Fotowoltaika" },
  { href: "/kalisz", label: "Kalisz" },
  { href: "/cctv", label: "CCTV" },
  { href: "/elektryka", label: "Elektryka" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/kontakt/faq", label: "FAQ" },
];

export default function Footer() {
  const pathname = usePathname();
  const rootRef = useRef(null);

  useGSAP(
    () => {
      if (pathname === "/realizacje") return;
      const footer = rootRef.current;
      if (!footer) return;

      const headingSplits = gsap.utils
        .toArray(`.${styles.footerWord}`)
        .map((heading) => new SplitText(heading, { type: "chars" }));
      const headingChars = headingSplits.flatMap((split) => split.chars);

      const lineSplits = gsap.utils
        .toArray(
          `.${styles.footerLink} h6, .${styles.quickContactTitle}, .${styles.quickContactText}`,
        )
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
      className={`${styles.footer}${pathname === "/realizacje" ? ` ${styles.hidden}` : ""}`}
      ref={rootRef}
      aria-hidden={pathname === "/realizacje"}
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
          <section className={styles.quickContact} aria-labelledby="quick-contact-title">
            <h3 className={styles.quickContactTitle} id="quick-contact-title">
              Szybki kontakt
            </h3>
            <address className={styles.quickContactList}>
              <p className={styles.quickContactItem}>
                <FiMapPin aria-hidden="true" />
                <span className={styles.quickContactText}>
                  Ceków Kolonia 6a, 62-834 Ceków
                </span>
              </p>
              <a
                className={styles.quickContactItem}
                href="mailto:rafal@moranda.com.pl"
              >
                <FiMail aria-hidden="true" />
                <span className={styles.quickContactText}>
                  rafal@moranda.com.pl
                </span>
              </a>
              <a className={styles.quickContactItem} href="tel:+48600306425">
                <FiPhone aria-hidden="true" />
                <span className={styles.quickContactText}>+48 600 306 425</span>
              </a>
            </address>
          </section>
        </div>
        <div className={styles.footerHeader}>
          <p className={styles.footerLabel}>Fotowoltaika Kalisz</p>
          <h2 className={styles.footerWord}>Rafał Morańda</h2>
        </div>
      </div>
    </footer>
  );
}
