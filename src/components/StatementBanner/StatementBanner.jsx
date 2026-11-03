import styles from "./StatementBanner.module.css";

import DitherImage from "@/components/DitherImage/DitherImage";
import Copy from "@/components/Copy";
import { BRAND_COLORS } from "@/lib/brandColors";

function copyLines(copy) {
  if (copy == null || copy === "") return [];
  if (Array.isArray(copy)) return copy;
  return String(copy).split("\n");
}

function BannerCopy({ copy, className, color }) {
  const lines = copyLines(copy);
  if (!lines.length) return null;
  return (
    <Copy>
      <h6
        className={`${className}${lines.length > 1 ? ` ${styles.multiline}` : ""}`}
        style={color ? { color } : undefined}
      >
        {lines.map((line, i) => (
          <span
            key={i}
            className={lines.length > 1 ? styles.copyLine : undefined}
          >
            {line}
          </span>
        ))}
      </h6>
    </Copy>
  );
}

export default function StatementBanner({
  showContent = true,
  src = "/images/firm/banner.webp",
  lightColor = BRAND_COLORS.white,
  copyColor,
  copyTopLeft = "Bezpłatna wycena instalacji",
  copyBottomRight = ["Zadzwoń:", "+48\u00a0600\u00a0306\u00a0425"],
  singleLine = false,
}) {
  return (
    <section className={styles.statementBanner}>
      <div className={styles.bg}>
        <DitherImage
          src={src}
          alt=""
          darkColor={BRAND_COLORS.red}
          lightColor={lightColor}
        />
      </div>
      {showContent ? (
        <div
          className={`container ${styles.content}${singleLine ? ` ${styles.singleLine}` : ""}`}
        >
          <BannerCopy copy={copyTopLeft} className={styles.title} color={copyColor} />
          <BannerCopy
            copy={copyBottomRight}
            className={styles.copy}
            color={copyColor}
          />
        </div>
      ) : null}
    </section>
  );
}
