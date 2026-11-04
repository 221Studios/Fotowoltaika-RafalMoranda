"use client";

import Copy from "@/components/Copy";
import { CCTV_SCOPE_ITEMS } from "./cctvContent";
import styles from "./cctvSeo.module.css";

export default function CctvScopeList() {
  return (
    <div className={styles.scopeList} role="list" aria-label="Zakres usług CCTV">
      {CCTV_SCOPE_ITEMS.map(({ title, copy }, index) => (
        <Copy
          key={title}
          delay={index * 0.06}
          stagger={0}
          trigger={`.${styles.scopeList}`}
        >
          <div className={styles.scopeRow} role="listitem">
            <p className={`lg ${styles.scopeTitle}`} data-copy-text>
              {title}
            </p>
            <p className={styles.scopeDescription} data-copy-text>
              {copy}
            </p>
          </div>
        </Copy>
      ))}
    </div>
  );
}
