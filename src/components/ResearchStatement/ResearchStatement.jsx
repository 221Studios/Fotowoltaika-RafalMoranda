import styles from "./ResearchStatement.module.css";

import Copy from "@/components/Copy";
import SectionHeader from "@/components/SectionHeader";

const STATS = [
  { label: "Time on evaluation", value: "70" },
  { label: "Research areas", value: "03" },
  { label: "Models in production", value: "09" },
  { label: "Open evaluations", value: "24" },
];

export default function ResearchStatement() {
  return (
    <section className={styles.researchStatement}>
      <Copy variant="flicker">
        <SectionHeader bullet left="Reliability first" right="The receipts" />
      </Copy>
      <div className={`container ${styles.inner}`}>
        <div className={styles.cols}>
          <Copy>
            <p className={`lg ${styles.statement}`}>
              We think the hard part of intelligence is reliability, not
              capability. So we build systems, then spend most of our time trying
              to break them.
            </p>
          </Copy>

          <div className={styles.aside}>
            <Copy>
              <p className={`lg ${styles.copy}`}>
                Our work runs across three areas. How models reason, how they hold
                up in production, and how we keep them aligned with what people
                actually want.
              </p>
            </Copy>

            <div className={styles.stats}>
              {STATS.map(({ label, value }) => (
                <div key={label} className={styles.stat}>
                  <Copy variant="flicker">
                    <p className="mono sm">{label}</p>
                  </Copy>
                  <Copy type="chars">
                    <h2>{value}</h2>
                  </Copy>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
