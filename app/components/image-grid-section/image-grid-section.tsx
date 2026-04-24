import styles from "./image-grid-section.module.css";
import Image from "next/image";

import BannerOne from "../../assets/banner-1.webp";
import BannerTwo from "../../assets/banner-2.webp";
import BannerThree from "../../assets/banner-3.webp";

export default function ImageGridSection() {
    return (
        <section className={styles.imageGridSection}>
            <div className={styles.imageGridContainer}>
                <div className={styles.imageGrid}>
                    <Image src={BannerOne} alt="Image 1" width={500} height={390} className={styles.imageGridItem} />
                    <Image src={BannerTwo} alt="Image 1" width={290} height={390} className={styles.imageGridItem} />
                    <Image src={BannerThree} alt="Image 1" width={394} height={390} className={styles.imageGridItem} />
                </div>
            </div>
        </section>
    );
}
