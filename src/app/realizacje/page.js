import { INSTALLATIONS } from "@/data/installations";
import RealizationsCatalog from "./RealizationsCatalog";
import styles from "./work.module.css";

export const metadata = {
  title: "Realizacje fotowoltaiki w Kaliszu i okolicach | ALFA",
  description:
    "Zobacz 27 instalacji fotowoltaicznych ALFA Rafał Morańda. Zdjęcia, lokalizacje i dane urządzeń z oryginalnych wpisów realizacji.",
};

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <RealizationsCatalog installations={INSTALLATIONS} />
    </main>
  );
}
