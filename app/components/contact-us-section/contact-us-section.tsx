import { Button } from "../button";
import styles from "./contact-us-section.module.css";
import Image from "next/image";
import ProfileImage from "../../assets/portrait_2.webp";

export default function ContactUs() {
  return (
    <section className={styles.contactUsSection}>

      <div className={styles.contactUsContainer}>

        <div className={styles.contactUsImageWrapper}>

          <Image src={ProfileImage} alt="Contact Us" width={600} height={847} className={styles.contactUsImage}/>

          <div className={styles.contactUsImageOverlay}>
            <div className={styles.contactUsImageCaption}>
                <p className={styles.contactUsImageDesc}>TalentTrek has been instrumental in helping us build our team from scratch..</p>
                <div className={styles.contactUsImageContent}>
                    <h3 className={styles.contactUsImageName}>Brooklyn Lean</h3>
                    <span className={styles.contactUsImageDesignation}>Software Engineer</span>
                </div>
            </div>
          </div>
        </div>

        <div className={styles.contactUsFormWrapper}>
            <p>Connect with Us</p>
            <h2>Get in Touch</h2>
            <p>
                Streamline HR processes and empower your team with our products. Facilitate manage employee data.
            </p>
            <form className={styles.contactUsForm}>
                <div className={styles.contactUsFormGroup}>
                    <label>Full Name</label>
                    <input type="text" name="name" placeholder="Your Name" />
                </div>
                <div className={styles.contactUsFormGroup}>
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="Your Email" />
                </div>
                <div className={styles.contactUsFormGroup}>
                    <label>Company</label>
                    <input type="text" name="company" placeholder="Your Company" />
                </div>
                <div className={styles.contactUsFormGroup}>
                    <label>Message</label>
                    <textarea name="message" placeholder="Your Message" />
                </div>
                <div>
                    <Button variant="primary" size="lg" fullWidth={true}>
                        Send A Message
                    </Button>
                </div>
            </form>
        </div>

      </div>

    </section>
  );
}
