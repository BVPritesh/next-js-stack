import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
import SiteLogo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div className={styles.footerLeft}>
            <Link href="/" className={styles.footerLogoLink}>
                <Image src={SiteLogo} alt="Site Logo" width={160} height={35} />
            </Link>
            <h2 className={`h6 ${styles.footerContent}`}>
                Start building your insights hub with lightweight analysis.
            </h2>

            <ul className={styles.footerSocialMenu}>
                <li className={styles.footerSocialItem}>
                    <Link href="/facebook" className={styles.footerSocialLink}>
                        <span className="sr-only">facebook</span>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="inline-block" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"> 
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </Link>
                </li>
                <li className={styles.footerSocialItem}>
                    <Link href="/tiwtter" className={styles.footerSocialLink}>
                        <span className="sr-only">twitter</span>
                        <svg stroke="currentColor" fill="#cfff91" strokeWidth="0" viewBox="0 0 512 512" className="inline-block" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                    </Link>
                </li>
                <li className={styles.footerSocialItem}>
                    <Link href="/github" className={styles.footerSocialLink}>
                        <span className="sr-only">github</span>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="inline-block" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </Link>
                </li>
                <li className={styles.footerSocialItem}>
                    <Link href="/linkedin" className={styles.footerSocialLink}>
                        <span className="sr-only">linkedin</span>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="inline-block" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </Link>
                </li>
            </ul>

        </div>

        <div className={styles.footerRight}> 
            <div className={styles.footerRightItem}>
                <h3 className={styles.footerMenuHeading}>
                    Products
                </h3>
                <ul className={styles.footerMenuList}>
                    <li className={styles.footerMenuItem}>
                        <Link href="/#" className={styles.footerMenuLink}>
                            Features
                        </Link>
                    </li>
                    <li className={styles.footerMenuItem}>
                        <Link href="/#" className={styles.footerMenuLink}>
                            Integrations
                        </Link>
                    </li>
                    <li className={styles.footerMenuItem}>
                        <Link href="/#" className={styles.footerMenuLink}>
                            Pricing
                        </Link>
                    </li>
                    <li className={styles.footerMenuItem}>                        
                        <Link href="/#" className={styles.footerMenuLink}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.footerRightItem}>
                <h3 className={styles.footerMenuHeading}>
                    Company
                </h3>
                <ul className={styles.footerMenuList}>
                    <li className={styles.footerMenuItem}>                        
                        <Link href="/#" className={styles.footerMenuLink}>
                            About
                        </Link>
                    </li>
                    <li className={styles.footerMenuItem}>                        
                        <Link href="/#" className={styles.footerMenuLink}>
                            Blog
                        </Link>
                    </li>
                    <li className={styles.footerMenuItem}>                        
                        <Link href="/#" className={styles.footerMenuLink}>
                            Blog Details
                        </Link>
                    </li>
                    <li className={styles.footerMenuItem}>                        
                        <Link href="/#" className={styles.footerMenuLink}>
                            Book a Demo
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.footerRightItem}>
                <h3 className={styles.footerMenuHeading}>
                    Company
                </h3>
                <ul className={styles.footerMenuList}>
                    <li className={styles.footerMenuItem}>                        
                        <Link href="/#" className={styles.footerMenuLink}>
                            Privacy
                        </Link>
                    </li>
                    <li className={styles.footerMenuItem}>                        
                        <Link href="/#" className={styles.footerMenuLink}>
                            Conditions
                        </Link>
                    </li>
                    <li className={styles.footerMenuItem}>                        
                        <Link href="/#" className={styles.footerMenuLink}>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>

        </div>

      </div>

    </footer>
  );
}
