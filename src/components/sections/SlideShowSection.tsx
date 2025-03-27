"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import styles from "./SlideShowSection.module.css";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const slides = [
  { title: "Plan a Trip?", src: "/images/slides/slide1.jpg", link: "#" },
  { title: "Search with Image", src: "/images/slides/slide2.jpg", link: "#" },
  { title: "Where Are You Going?", src: "/images/slides/slide3.jpg", link: "#" },
];

const SlideShowSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = React.useRef<any>(null);

  return (
    <section className={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop
            slidesPerView={1}
            spaceBetween={0}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <a href={slide.link}>
                  <div className={styles.slide}>
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className={styles.image}
                      priority={index === 0}
                    />
                    <div className={styles.overlay}>
                      <div className={styles.text}>{slide.title}</div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div
            className={`${styles.customArrow} ${styles.prev}`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={20} />
          </div>
          <div
            className={`${styles.customArrow} ${styles.next}`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight size={20} />
          </div>
        </div>

        {/* Clickable Pagination Dots */}
        <div className={styles.swiperPagination}>
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => swiperRef.current?.slideToLoop(idx)}
              style={{
                display: "inline-block",
                width: 10,
                height: 10,
                borderRadius: "50%",
                margin: "0 6px",
                background: idx === activeIndex ? "#6366f1" : "#d4d4d8",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SlideShowSection;
