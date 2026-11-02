import { INSTALLATIONS } from "@/data/installations";
import RealizationsCatalog from "./RealizationsCatalog";
import styles from "./work.module.css";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Realizacje fotowoltaiki w Kaliszu i okolicach",
  description:
    "Zobacz 27 instalacji fotowoltaicznych ALFA Rafał Morańda. Zdjęcia, lokalizacje oraz dane paneli, falowników i magazynów energii.",
  path: "/realizacje/",
  image: INSTALLATIONS[0]?.image,
  imageAlt: "Realizacja instalacji fotowoltaicznej ALFA Rafał Morańda",
});

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <RealizationsCatalog installations={INSTALLATIONS} />
    </main>
  );
}
