import { Button } from "../button";
import styles from "./hero-section.module.css";

export default function HeroSection({ heroContainerFull, heroTitle, heroDescription, heroInputBox, heroCardDetail }: { heroContainerFull: boolean; heroTitle: string; heroDescription: string; heroInputBox: boolean; heroCardDetail: boolean }) {
    return (
        <section className={styles.heroSection}>
            <div className={ heroContainerFull ? styles.heroContainerFull : styles.heroContainer}>
                <h1 className={styles.heroTitle}>
                    {heroTitle}
                </h1>
                <p className={styles.heroDescription}>
                    {heroDescription}
                </p>

                {heroInputBox && (
                    <div className={styles.heroInputWrapper}>
                        <div className={styles.heroInputBox}>
                            <input type="text" name="get started" placeholder="Enter Your Email" className={styles.heroInput}/>
                            <span className={styles.heroInputError}>This field is required.</span>
                        </div>
                        <Button variant="primary" size="lg" className={styles.heroInputButton}>
                            Get Started
                        </Button>
                    </div>
                )}

                {heroCardDetail && (
                    <ul className={styles.heroCards}>
                        <li className={styles.heroCardsItem}>
                            No Credit Card Required
                        </li>
                        <li className={styles.heroCardsItem}>
                            Cancel Anytime
                        </li>
                    </ul>
                )}
            </div>
        </section>
    );
}
