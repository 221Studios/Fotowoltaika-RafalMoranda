import styles from "./FirmIntro.module.css";

import Copy from "@/components/Copy";

export default function FirmIntro() {
  return (
    <section className={styles.firmIntro}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.block}>
          <Copy animateOnScroll={false} delay="1.25">
            <h1 className={styles.heading}>
              We are an independent lab working on machine intelligence. We
              build the models.
            </h1>
          </Copy>
        </div>

        <div className={styles.block}>
          <Copy>
            <h1 className={styles.heading}>
              We are an independent lab working on machine intelligence. We
              build the models, test them against real problems, and keep the
              ones that hold up.
            </h1>
          </Copy>
        </div>
      </div>
    </section>
  );
}
