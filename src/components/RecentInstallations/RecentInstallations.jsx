import styles from "./RecentInstallations.module.css";

import Link from "next/link";
import Image from "next/image";

import Copy from "@/components/Copy";
import SectionHeader from "@/components/SectionHeader";
import { assetPath } from "@/lib/assetPath";

const PROJECTS = [
  {
    title: "Stary Nakwasin",
    details: "JaSolar 550 Wp · Huawei 10 kW · magazyn LUNA 10 kWh",
    image: "/images/realizacje/stary-nakwasin.webp",
  },
  {
    title: "Przespolew Kościelny",
    details: "JaSolar 500 Wp · Huawei 8 kW · magazyn LUNA 5 kWh",
    image: "/images/realizacje/przespolew-koscielny.webp",
  },
  {
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
          right="Nasze ostatnie realizacje"
        />
      </Copy>

      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {PROJECTS.map(({ title, details, image }) => (
            <article className={styles.card} key={title}>
              <div className={styles.image}>
                <Image
                  src={assetPath(image)}
                  alt={title}
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
          <Link className={styles.more} href="/work">
            Zobacz wszystkie realizacje <span aria-hidden="true">↗</span>
          </Link>
        </Copy>
      </div>
    </section>
  );
}
