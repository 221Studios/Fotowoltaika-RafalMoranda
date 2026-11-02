import { INSTALLATIONS } from "@/data/installations";
import RealizationsCatalog from "./RealizationsCatalog";
import styles from "./work.module.css";

export const metadata = {
  title: "Portfolio instalacji fotowoltaicznych | ALFA Rafał Morańda",
  description:
    "Zobacz 27 instalacji fotowoltaicznych ALFA Rafał Morańda. Zdjęcia, lokalizacje i dane urządzeń z oryginalnych wpisów realizacji.",
  alternates: { canonical: "/realizacje/" },
};

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <RealizationsCatalog installations={INSTALLATIONS} />
    </main>
  );
}
