"use client";

import { useState } from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import InstallationCard from "@/components/InstallationCard/InstallationCard";
import styles from "./work.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function RealizationsCatalog({ installations }) {
  const [activeYear, setActiveYear] = useState("all");
  const projectsRef = useRef(null);
  const years = [
    ...new Set([
      "2026",
      "2025",
      ...installations.map(({ publishedAt }) => publishedAt.slice(0, 4)),
    ]),
  ].sort((a, b) => b.localeCompare(a));
  const visibleInstallations = installations.filter(
    ({ publishedAt }) => activeYear === "all" || publishedAt.startsWith(activeYear),
  );
  const resultCountLabel =
    visibleInstallations.length === 1
      ? "realizacja"
      : visibleInstallations.length > 1 && visibleInstallations.length < 5
        ? "realizacje"
        : "realizacji";

  useEffect(() => {
    const projects = projectsRef.current?.querySelectorAll("a");
    if (!projects?.length) return;

    const triggers = [];
    projects.forEach((project, index) => {
      if (index === 0) {
        gsap.set(project, { clearProps: "opacity,transform" });
        return;
      }

      gsap.set(project, { opacity: 0, scale: 0.75, y: 150 });
      triggers.push(
        ScrollTrigger.create({
          trigger: project,
          start: "top 100%",
          onEnter: () =>
            gsap.to(project, {
              duration: 0.75,
              y: 0,
              scale: 1,
              opacity: 1,
              ease: "power3.out",
            }),
        }),
      );
    });

    ScrollTrigger.refresh();
    return () => {
      triggers.forEach((trigger) => trigger.kill());
      gsap.killTweensOf(projects);
    };
  }, [visibleInstallations]);

  return (
    <>
      <section className={styles.catalogHeader}>
        <div className={`container ${styles.headerGrid}`}>
          <div className={styles.headerSpacer} aria-hidden="true" />
          <div className={styles.headerContent}>
            <h1>Realizacje</h1>
            <div className={styles.filters} aria-label="Filtruj realizacje według roku publikacji">
              <button
                type="button"
                className={activeYear === "all" ? styles.filterActive : styles.filter}
                aria-pressed={activeYear === "all"}
                onClick={() => setActiveYear("all")}
              >
                Wszystkie
              </button>
              {years.map((year) => (
                <button
                  type="button"
                  className={activeYear === year ? styles.filterActive : styles.filter}
                  aria-pressed={activeYear === year}
                  key={year}
                  onClick={() => setActiveYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
            <p className={styles.resultCount} aria-live="polite">
              {visibleInstallations.length} {resultCountLabel}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.projectList} aria-label="Katalog realizacji">
        <div className={`container ${styles.listContainer}`} ref={projectsRef}>
          {visibleInstallations.map((installation) => (
            <InstallationCard installation={installation} key={installation.slug} />
          ))}
          {visibleInstallations.length === 0 ? (
            <p className={styles.emptyState}>
              Brak opublikowanych realizacji z {activeYear} roku. Nowe wpisy pojawią się tutaj po dodaniu ich do katalogu.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
