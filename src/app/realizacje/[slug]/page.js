import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getInstallation, INSTALLATIONS } from "@/data/installations";
import { withBasePath } from "@/lib/withBasePath";
import styles from "./installation.module.css";

export function generateStaticParams() {
  return INSTALLATIONS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const installation = getInstallation(slug);
  if (!installation) return { title: "Nie znaleziono realizacji | ALFA" };

  return {
    title: `${installation.title} — fotowoltaika | ALFA Rafał Morańda`,
    description: `${installation.originalTitle}. Zdjęcia i dane z realizacji ALFA Rafał Morańda w miejscowości ${installation.location}.`,
  };
}

export default async function InstallationPage({ params }) {
  const { slug } = await params;
  const installation = getInstallation(slug);
  if (!installation) notFound();

  const currentIndex = INSTALLATIONS.findIndex((project) => project.slug === slug);
  const nextProject = INSTALLATIONS[(currentIndex + 1) % INSTALLATIONS.length];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src={withBasePath(installation.image)}
          alt={`Realizacja fotowoltaiczna w ${installation.location}`}
          width={installation.gallery[0]?.width ?? 1024}
          height={installation.gallery[0]?.height ?? 461}
          priority
          unoptimized
        />
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroHeader}>
            <h1>{installation.title}</h1>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroCol}>
              <p>{installation.location}</p>
            </div>
            <div className={`${styles.heroCol} ${styles.heroDetails}`}>
              <h3>{installation.originalTitle}</h3>
              <div className={styles.heroMeta}>
                <div className={styles.heroRow}>
                  <div className={styles.heroSubCol}>
                    <p>Data publikacji</p>
                    <p>{installation.publishedAt}</p>
                  </div>
                  <div className={styles.heroSubCol}>
                    <p>Lokalizacja</p>
                    <p>{installation.location}</p>
                  </div>
                </div>
                <div className={styles.heroRow}>
                  <div className={styles.heroSubCol}>
                    <p>Liczba zdjęć</p>
                    <p>{installation.gallery.length}</p>
                  </div>
                  <div className={styles.heroSubCol}>
                    <p>Urządzenia</p>
                    {installation.equipment.map(({ value }) => (
                      <p key={value}>{value}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.details} ${styles.detailsEquipment}`}>
        <div className={`container ${styles.detailsLayout}`}>
          <div className={styles.detailsCol}>
            <p>Dane instalacji</p>
          </div>
          <div className={styles.detailsCol}>
            <div className={styles.equipment}>
              <h3>Parametry podane w oryginalnym wpisie</h3>
              {installation.equipment.map(({ label, value }) => (
                <div className={styles.equipmentRow} key={`${label}-${value}`}>
                  <p>{label}</p>
                  <p>{value}</p>
                </div>
              ))}
              <p className={styles.sourceNote}>
                Data odnosi się do publikacji wpisu. Oryginalny materiał nie opisuje przebiegu montażu ani uzyskanych efektów.
              </p>
              {installation.gallery[0] ? (
                <figure className={styles.featureImage}>
                  <Image
                    src={withBasePath(installation.gallery[0].src)}
                    alt={`Zdjęcie realizacji fotowoltaicznej w ${installation.location}`}
                    width={installation.gallery[0].width}
                    height={installation.gallery[0].height}
                    unoptimized
                  />
                </figure>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.details} ${styles.detailsGallery}`}>
        <div className={`container ${styles.detailsLayout}`}>
          <div className={styles.detailsCol}>
            <p>Galeria realizacji</p>
          </div>
          <div className={`${styles.detailsCol} ${styles.gallery}`}>
            {installation.gallery.slice(1).map((photo, index) => (
              <figure className={styles.galleryImage} key={photo.src}>
                <Image
                  src={withBasePath(photo.src)}
                  alt={`Zdjęcie ${index + 1} z realizacji fotowoltaicznej w ${installation.location}`}
                  width={photo.width}
                  height={photo.height}
                  unoptimized
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.nextProject}>
        <div className={styles.nextProjectImage}>
          <Image
            src={withBasePath(nextProject.image)}
            alt=""
            width={1024}
            height={461}
            unoptimized
          />
        </div>
        <div className={`container ${styles.nextProjectCopy}`}>
          <p className={styles.nextEyebrow}>Następna realizacja</p>
          <Link href={`/realizacje/${nextProject.slug}`}>
            <span>{nextProject.title}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
