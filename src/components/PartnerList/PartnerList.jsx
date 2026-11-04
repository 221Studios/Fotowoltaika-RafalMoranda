"use client";

import styles from "./PartnerList.module.css";

import { useCallback, useEffect, useRef, useState } from "react";

const MOBILE_QUERY = "(max-width: 1000px)";

const ROWS = [
  ["Projekt", "Montaż", "Modernizacja", "Uruchomienie"],
  ["Instalacje elektryczne", "Instalacje niskoprądowe", "Alarmy"],
  ["Domofony", "Kontrola dostępu", "Kamery CCTV"],
];

export default function PartnerList({ rows = ROWS, variant = "default", ariaLabel }) {
  const containerRef = useRef(null);
  const highlightRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const placeHighlight = useCallback((index) => {
    const highlight = highlightRef.current;
    const container = containerRef.current;
    const item = itemRefs.current[index];
    if (!highlight || !container || !item) return;

    const row = item.parentElement;
    const grid = row?.parentElement;
    if (!row || !grid) return;

    const itemRect = item.getBoundingClientRect();
    const rowRect = row.getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    const crate = container.getBoundingClientRect();

    const left =
      item === row.firstElementChild ? gridRect.left + 1 : itemRect.left;
    const top =
      row === grid.firstElementChild ? gridRect.top + 1 : itemRect.top;
    const right =
      item === row.lastElementChild ? gridRect.right - 1 : itemRect.right - 1;
    const bottom =
      row === grid.lastElementChild ? gridRect.bottom - 1 : rowRect.bottom - 1;

    highlight.style.transform = `translate(${left - crate.left}px, ${
      top - crate.top
    }px)`;
    highlight.style.width = `${right - left}px`;
    highlight.style.height = `${bottom - top}px`;
  }, []);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    placeHighlight(active);

    const onResize = () => placeHighlight(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, isMobile, placeHighlight]);

  return (
    <div className={`${styles.partnerList} ${variant === "factors" ? styles.factorVariant : ""}`}>
      <div className={`container ${styles.inner}`} ref={containerRef}>
        <div
          className={`${styles.grid} ${variant === "factors" ? styles.factorGrid : ""}`}
          role={ariaLabel ? "group" : undefined}
          aria-label={ariaLabel}
        >
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.map((content, columnIndex) => {
                const index = rows
                  .slice(0, rowIndex)
                  .reduce((count, previousRow) => count + previousRow.length, 0) +
                  columnIndex;
                return (
                  <div
                    key={typeof content === "string" ? content : `${rowIndex}-${columnIndex}`}
                    ref={(node) => {
                      itemRefs.current[index] = node;
                    }}
                    className={`${styles.item} ${
                      !isMobile && active === index ? styles.itemActive : ""
                    }`}
                    onMouseEnter={() => {
                      if (!isMobile) setActive(index);
                    }}
                  >
                    {typeof content === "string" ? <p>{content}</p> : content}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div
          ref={highlightRef}
          className={styles.highlight}
          hidden={isMobile}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
