"use client";

import styles from "./PageHeader.module.css";

import { isValidElement, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiEye } from "react-icons/fi";

import Copy from "@/components/Copy";
import { withBasePath } from "@/lib/withBasePath";

gsap.registerPlugin(useGSAP);

const ICON_PROPS = { size: 80, texture: "dither", animate: true };
const HEADING_DELAY = 1;
const COPY_DURATION = 0.75;
const META_DELAY = 0.5 + COPY_DURATION;

const iconCache = new Map();

function ditherIcon(name) {
  let Icon = iconCache.get(name);
  if (!Icon) {
    Icon = dynamic(
      () =>
        import("@unlocalhosted/dither-icons").then(
          (mod) => mod[name] ?? mod.WorkspaceIcon,
        ),
      {
        ssr: false,
        loading: () =>
          name === "EyeIcon" ? (
            <FiEye className={styles.fallbackIcon} aria-hidden="true" />
          ) : (
            <span className={styles.iconSlot} aria-hidden="true" />
          ),
      },
    );
    iconCache.set(name, Icon);
  }
  return Icon;
}

function HeaderIcon({ icon }) {
  if (isValidElement(icon)) return icon;
  if (typeof icon === "string" || icon == null) {
    const Icon = ditherIcon(icon || "WorkspaceIcon");
    return <Icon {...ICON_PROPS} />;
  }
  const Icon = icon;
  return <Icon {...ICON_PROPS} />;
}

export default function PageHeader({
  title,
  subtitle,
  description,
  descriptionClassName = "",
  icon = "WorkspaceIcon",
  theme = "default",
  backgroundImage,
  backgroundAlt = "",
}) {
  const sectionRef = useRef(null);
  const iconRef = useRef(null);
  const lenis = useLenis();

  const scrollNext = () => {
    const next = sectionRef.current?.nextElementSibling;
    if (!next) return;
    if (lenis) lenis.scrollTo(next);
    else next.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(
    () => {
      const iconEl = iconRef.current;
      if (!iconEl) return;

      if (backgroundImage) {
        gsap.set(iconEl, { scale: 1, transformOrigin: "center" });
        return;
      }

      gsap.set(iconEl, { scale: 0, transformOrigin: "center", force3D: false });
      gsap.to(iconEl, {
        scale: 1,
        duration: 0.5,
        delay: META_DELAY,
        ease: "power3.out",
        force3D: false,
      });
    },
    { scope: sectionRef, dependencies: [backgroundImage] },
  );

  const headingContent = (
    <h1 className={styles.heading}>
      <span>{title}</span>
      {subtitle ? <span className={styles.subtitle}>{subtitle}</span> : null}
    </h1>
  );

  const descriptionContent = description ? (
    <p className={`${styles.copy} ${descriptionClassName}`}>{description}</p>
  ) : null;

  return (
    <section
      ref={sectionRef}
      className={`${styles.pageHeader}${theme === "cctv" ? ` ${styles.cctv}` : ""}`}
    >
      {backgroundImage ? (
        <div className={styles.background}>
          <Image
            className={styles.backgroundImage}
            src={withBasePath(backgroundImage)}
            alt={backgroundAlt}
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            unoptimized
          />
        </div>
      ) : null}
      <div className={`container ${styles.container}`}>
        <div className={styles.inner}>
          {backgroundImage ? (
            headingContent
          ) : (
            <Copy animateOnScroll={false} delay={HEADING_DELAY}>
              {headingContent}
            </Copy>
          )}

          <div className={styles.meta}>
            <button
              type="button"
              className={`di-trigger ${styles.scrollBtn}`}
              onClick={scrollNext}
              aria-label="Przewiń do treści"
            >
              <span ref={iconRef} className={styles.iconWrap}>
                <HeaderIcon icon={icon} />
              </span>
            </button>
            {descriptionContent ? (
              backgroundImage ? (
                descriptionContent
              ) : (
                <Copy animateOnScroll={false} delay={META_DELAY}>
                  {descriptionContent}
                </Copy>
              )
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
