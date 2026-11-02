import styles from "./RecentInstallations.module.css";

import Link from "next/link";

import Copy from "@/components/Copy";
import InstallationCard from "@/components/InstallationCard/InstallationCard";
import SectionHeader from "@/components/SectionHeader";
import { INSTALLATIONS } from "@/data/installations";

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
          {INSTALLATIONS.slice(0, 3).map((installation) => (
            <InstallationCard
              installation={installation}
              id={`realizacja-${installation.slug}`}
              key={installation.slug}
              showInfo={false}
            />
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
