import styles from "./workforce-section.module.css";

export default function WorkforceSection() {
    return (
        <section className={styles.workforceSection}>
            <div className={styles.workforceContainer}>
                <h2 className={styles.workforceTitle}>
                    Elevate your workforce efficiency
                </h2>
                <div className={styles.workforceGrid}>
                    <div className={styles.workforceItem}>
                        <h6 className={styles.workforceHeading}>Customer Centricity</h6>
                        <p className={styles.workforceDetails}>
                            Putting our customers at the heart of everything we do, we strive to deliver exceptional experiences, personalized solutions.
                        </p>
                    </div>
                    <div className={styles.workforceItem}>
                        <h6 className={styles.workforceHeading}>Data Security</h6>
                        <p className={styles.workforceDetails}>
                            We take data security seriously and ensure that your data is protected at all times. Our platform is designed to keep your data safe.
                        </p>
                    </div>
                    <div className={styles.workforceItem}>
                        <h6 className={styles.workforceHeading}>Flexibility</h6>
                        <p className={styles.workforceDetails}>
                            Our platform is designed to be flexible and customizable to meet your unique needs. We offer a range of features and integrations.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
