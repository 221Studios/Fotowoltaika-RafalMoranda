import styles from "./PartnersSection.module.css";

import Copy from "@/components/Copy";
import SectionHeader from "@/components/SectionHeader";
import PartnerList from "@/components/PartnerList";
import SectionFooter from "@/components/SectionFooter";

export default function PartnersSection() {
  return (
    <section className={styles.partnersSection}>
      <Copy variant="flicker">
        <SectionHeader
          bullet
          left="Instalacje elektryczne"
          right="Dom i biznes"
        />
      </Copy>
      <div className={`container ${styles.cols}`}>
        <div className={styles.spacer} />
        <div className={styles.copy}>
          <Copy>
            <h2>
              Projektujemy, wykonujemy i uruchamiamy instalacje elektryczne.
              Modernizujemy istniejące systemy i łączymy prace elektryczne z
              montażem alarmów, domofonów oraz kamer.
            </h2>
          </Copy>
        </div>
      </div>
      <PartnerList />
      <SectionFooter
        bullet
        left="Kompleksowa obsługa"
        right="Projekt · montaż · serwis"
      />
    </section>
  );
}
