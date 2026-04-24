import styles from "./companies-section.module.css";
import Image from "next/image";

import F1 from "../../assets/1.webp";
import F2 from "../../assets/2.webp";
import F3 from "../../assets/3.webp";
import F4 from "../../assets/4.webp";
import F5 from "../../assets/5.webp";
import F6 from "../../assets/6.webp";


export default function CompaniesSection() {
    return (
        <section className={styles.companiesSection}>
            <div className={styles.companiesContainer}>
                <h5 className={styles.companiesTitle}>
                    Trusted by 5+ million people at companies like
                </h5>
                <ul className={styles.companiesList}>
                    <li className={styles.companiesItem}>
                        <Image src={F1} alt="Company 1" width={150} height={32} className={styles.companyLogo} />
                    </li>
                    <li className={styles.companiesItem}>
                        <Image src={F2} alt="Company 2" width={150} height={32} className={styles.companyLogo} />
                    </li>
                    <li className={styles.companiesItem}>
                        <Image src={F3} alt="Company 3" width={150} height={32} className={styles.companyLogo} />
                    </li>
                    <li className={styles.companiesItem}>
                        <Image src={F4} alt="Company 4" width={150} height={32} className={styles.companyLogo} />
                    </li>
                    <li className={styles.companiesItem}>
                        <Image src={F5} alt="Company 5" width={150} height={32} className={styles.companyLogo} />
                    </li>
                    <li className={styles.companiesItem}>
                        <Image src={F6} alt="Company 6" width={150} height={32} className={styles.companyLogo} />
                    </li>

                </ul>

            </div>
        </section>
    );
}
