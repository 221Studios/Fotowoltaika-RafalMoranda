"use client";

import { useState } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { withBasePath } from "@/lib/withBasePath";
import styles from "./work.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function RealizationsCatalog({ installations }) {
  const [activeYear, setActiveYear] = useState("all");
  const projectsRef = useRef(null);
  const years = [...new Set(installations.map(({ publishedAt }) => publishedAt.slice(0, 4)))].sort(
    (a, b) => b.localeCompare(a),
  );
  const visibleInstallations = installations.filter(
    ({ publishedAt }) => activeYear === "all" || publishedAt.startsWith(activeYear),
  );

  useEffect(() => {
    const projects = projectsRef.current?.querySelectorAll("a");
    if (!projects?.length) return;

    const triggers = [];
    projects.forEach((project, index) => {
      gsap.set(project, { opacity: 0, scale: 0.75, y: 150 });

      if (index === 0) {
        gsap.to(project, {
          duration: 0.75,
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          delay: 1.4,
        });
        return;
      }

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
              {visibleInstallations.length} {visibleInstallations.length === 1 ? "realizacja" : "realizacje"}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.projectList} aria-label="Katalog realizacji">
        <div className={`container ${styles.listContainer}`} ref={projectsRef}>
          {visibleInstallations.map((installation) => (
            <Link
              className={styles.project}
              href={`/realizacje/${installation.slug}`}
              key={installation.slug}
            >
              <div className={styles.projectImage}>
                <Image
                  src={withBasePath(installation.image)}
                  alt={`Instalacja fotowoltaiczna w ${installation.location}`}
                  width={1024}
                  height={461}
                  unoptimized
                />
              </div>
              <div className={styles.projectInfo}>
                <div className={styles.projectDate}>
                  <p>{new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${installation.publishedAt}T12:00:00`))}</p>
                </div>
                <div className={styles.projectMainInfo}>
                  <div className={styles.projectName}>
                    <h2>{installation.title}</h2>
                    <p>{installation.location}</p>
                  </div>
                  <div className={styles.projectClient}>
                    <span className={styles.clientMark} aria-hidden="true">α</span>
                    <p>Rafał Morańda</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
