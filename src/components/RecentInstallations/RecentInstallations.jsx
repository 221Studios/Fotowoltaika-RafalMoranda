import styles from "./RecentInstallations.module.css";

import Link from "next/link";
import Image from "next/image";

import Copy from "@/components/Copy";
import SectionHeader from "@/components/SectionHeader";
import { withBasePath } from "@/lib/withBasePath";

const PROJECTS = [
  {
    slug: "stary-nakwasin",
    title: "Stary Nakwasin",
    details: "JaSolar 550 Wp · Huawei 10 kW · magazyn LUNA 10 kWh",
    image: "/images/realizacje/stary-nakwasin.webp",
  },
  {
    slug: "przespolew-koscielny",
    title: "Przespolew Kościelny",
    details: "JaSolar 500 Wp · Huawei 8 kW · magazyn LUNA 5 kWh",
    image: "/images/realizacje/przespolew-koscielny.webp",
  },
  {
    slug: "prazuchy-nowe",
    title: "Prażuchy Nowe",
    details: "JaSolar 410 Wp · Huawei 5 kW",
    image: "/images/realizacje/prazuchy-nowe.webp",
  },
];

export default function RecentInstallations() {
  return (
    <section className={styles.recentInstallations}>
      <Copy variant="flicker">
        <SectionHeader
          bullet
          left="Realizacje"
          right="Wybrane instalacje z regionu"
        />
      </Copy>

      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {PROJECTS.map(({ slug, title, details, image }) => (
            <article
              className={styles.card}
              id={`realizacja-${slug}`}
              key={title}
            >
              <div className={styles.image}>
                <Image
                  src={withBasePath(image)}
                  alt={`Instalacja fotowoltaiczna w miejscowości ${title}`}
                  width={1024}
                  height={461}
                  unoptimized
                />
              </div>
              <div className={styles.copy}>
                <h3>{title}</h3>
                <p>{details}</p>
              </div>
            </article>
          ))}
        </div>

        <Copy>
          <Link className={styles.more} href="/realizacje">
            Zobacz wszystkie realizacje <span aria-hidden="true">↗</span>
          </Link>
        </Copy>
      </div>
    </section>
  );
}
