"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import styles from "./accordion-section.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AccordionItem {
  id: number;
  number: string;         // e.g. "01."
  title: string;
  description: string;
  image: StaticImageData | string;
  imageAlt: string;
}

export interface AccordionSectionProps {
  heading: string;
  subheading?: string;
  items: AccordionItem[];
  /** Background color of the image panel — defaults to #F9C89B (peach) */
  imagePanelBg?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AccordionSection({
  heading,
  subheading,
  items,
  imagePanelBg = "#F9C89B",
}: AccordionSectionProps) {
  const [activeId, setActiveId] = useState<number>(items[0]?.id ?? 1);

  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  const toggle = (id: number) => {
    // If clicking the already-open item, keep it open (accordion stays open)
    setActiveId(id);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── Left: Image Panel ── */}
        <div
          className={styles.imagePanel}
          style={{ backgroundColor: imagePanelBg }}
        >
          <div className={styles.imageWrapper}>
            {activeItem?.image && (
              <Image
                key={activeItem.id}               // key forces re-mount → triggers fade-in
                src={activeItem.image}
                alt={activeItem.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
                priority
              />
            )}
          </div>
        </div>

        {/* ── Right: Accordion Panel ── */}
        <div className={styles.contentPanel}>
          <h2 className={styles.heading}>{heading}</h2>
          {subheading && (
            <p className={styles.subheading}>{subheading}</p>
          )}

          <ul className={styles.accordionList} role="list">
            {items.map((item) => {
              const isOpen = activeId === item.id;
              return (
                <li key={item.id} className={styles.accordionItem}>
                  <button
                    className={`${styles.accordionTrigger} ${isOpen ? styles.active : ""}`}
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-body-${item.id}`}
                    id={`accordion-trigger-${item.id}`}
                  >
                    <span className={styles.itemNumber}>{item.number}</span>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.chevron} aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`accordion-body-${item.id}`}
                    role="region"
                    aria-labelledby={`accordion-trigger-${item.id}`}
                    className={`${styles.accordionBody} ${isOpen ? styles.bodyOpen : ""}`}
                  >
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
}