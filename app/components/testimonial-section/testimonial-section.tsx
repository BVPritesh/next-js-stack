"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules'; // ✅ Removed Scrollbar
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./testimonial-section.module.css";
import SliderImage1 from "../../assets/novadex.webp";
import SliderImage2 from "../../assets/lumessa.webp";
import ProfileImage1 from "../../assets/profile-1.webp";
import ProfileImage2 from "../../assets/profile-2.webp";

export default function TestimonialSection() {

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const slides = [
        { image: SliderImage1, alt: "Testimonial 1", profile: ProfileImage1, name: "John Doe", role: "HR Manager, Tech Company" },
        { image: SliderImage2, alt: "Testimonial 2", profile: ProfileImage2, name: "Jane Smith", role: "HR Manager, Tech Company" },
        { image: SliderImage1, alt: "Testimonial 3", profile: ProfileImage1, name: "John Doe", role: "HR Manager, Tech Company" },
        { image: SliderImage2, alt: "Testimonial 4", profile: ProfileImage2, name: "Jane Smith", role: "HR Manager, Tech Company" },
    ];

    return (
        <section className={styles.testimonialSection}>
            <div className={styles.testimonialContainer}>
                <div className={styles.testimonialSlider}>
                    <Swiper
                        modules={[Navigation, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        // ✅ KEY FIX: Don't pass prevEl/nextEl here — wire them in onBeforeInit only
                        navigation={true}
                        onBeforeInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                            // @ts-ignore
                            swiper.navigation.init();
                            // @ts-ignore
                            swiper.navigation.update();
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.testimonialSlideItem}>
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        width={172}
                                        height={42}
                                        className={styles.testimonialSlideImage}
                                    />
                                    <p className={styles.testimonialSlideContent}>
                                        TalentTrek has transformed our hiring process. The intuitive
                                        interface and powerful features have made it easier than ever
                                        to find and manage top talent.
                                    </p>
                                    <div className={styles.testimonialSlideData}>
                                        <div className={styles.testimonialSlideProfile}>
                                            <Image
                                                src={slide.profile}
                                                alt={slide.name}
                                                width={56}
                                                height={56}
                                                className={styles.testimonialSlideProfileImage}
                                            />
                                        </div>
                                        <div className={styles.testimonialSlideDataContent}>
                                            <h3 className={styles.testimonialSlideHeading}>{slide.name}</h3>
                                            <span className={styles.testimonialSlideText}>{slide.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        ref={prevRef}
                        className={styles.swiperButtonPrev}
                        aria-label="Previous slide"
                        type="button"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="12" fill="var(--color-primary)" />
                            <path d="M14.5 7L10 12L14.5 17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button
                        ref={nextRef}
                        className={styles.swiperButtonNext}
                        aria-label="Next slide"
                        type="button"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="12" fill="var(--color-primary)" />
                            <path d="M9.5 7L14 12L9.5 17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}