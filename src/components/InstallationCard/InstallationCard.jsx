import Image from "next/image";
import Link from "next/link";

import { withBasePath } from "@/lib/withBasePath";
import styles from "./InstallationCard.module.css";

function projectTitle(installation) {
  const systemPower = installation.equipment.find(
    ({ label }) => label === "Moc instalacji",
  )?.value;
  const modulePower = installation.equipment.find(
    ({ label }) => label === "Moc modułu",
  )?.value;

  if (systemPower) return `Instalacja fotowoltaiczna ${systemPower}`;
  if (modulePower) return `Panele fotowoltaiczne ${modulePower}`;
  return "Instalacja fotowoltaiczna";
}

export default function InstallationCard({ installation, id, showInfo = true }) {
  const image = installation.gallery[0] ?? { width: 1600, height: 1200 };
  const displayDate = installation.completedAt ?? installation.publishedAt;
  const formattedDate = new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${displayDate}T12:00:00`));

  return (
    <Link
      className={`${styles.project}${showInfo ? "" : ` ${styles.projectStandalone}`}`}
      href={`/realizacje/${installation.slug}`}
      id={id}
    >
      <div className={styles.projectImage}>
        <Image
          className={styles.projectPhoto}
          src={withBasePath(installation.image)}
          alt={`Instalacja fotowoltaiczna w ${installation.location}`}
          width={image.width}
          height={image.height}
          unoptimized
        />
        <h2 className={styles.projectTitle}>{projectTitle(installation)}</h2>
        <span className={styles.projectLogo}>
          <Image
            src={withBasePath("/images/moranda-logo.svg")}
            alt="ALFA Rafał Morańda"
            width={322}
            height={78}
            unoptimized
          />
        </span>
        <span className={styles.projectLocation}>{installation.location}</span>
      </div>
      {showInfo ? (
        <div className={styles.projectInfo}>
          <div className={styles.projectDate}>
            <p>{formattedDate}</p>
          </div>
          <div className={styles.projectSpecs}>
            <p>{installation.equipment.map(({ value }) => value).join(" · ")}</p>
          </div>
        </div>
      ) : null}
    </Link>
  );
}
