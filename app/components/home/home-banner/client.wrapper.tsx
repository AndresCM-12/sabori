"use client";
import React from "react";
import styles from "../../css/home/home-banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";

interface HomeBannerClientWrapperProps {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}
export default function HomeBannerClientWrapper({
  carouselData,
}: {
  carouselData: HomeBannerClientWrapperProps[];
}) {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div className={styles.homeBanner}>
      <Swiper
        id="HomeBanner"
        style={{ width: "100%", height: "100%" }}
        spaceBetween={16}
        slidesPerView={1}
        speed={1000}
        autoplay={{ delay: 5000 }}
        onSlideChange={(swiper) => {
          setThumbsSwiper(thumbsSwiper);
          setCurrentIndex(swiper.activeIndex);
        }}
        onSwiper={(swiper) => {
          setCurrentIndex(swiper.activeIndex);
        }}
        modules={[Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {carouselData.map((slide, index) => (
          <SwiperSlide className={styles.swiperSlide} key={index}>
            <div className={styles.slide}>
              <img src={slide.image} alt={slide.title} />
              <div className={styles.floatingText}>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <a href={slide.ctaLink}>{slide.ctaText}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className={styles.thumbs}
        slidesPerView={2}
        spaceBetween={16}
        speed={1000}
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={(swiper: any) => setThumbsSwiper(swiper as any)}
      >
        {carouselData.map((slide, index) => (
          <SwiperSlide
            className={
              currentIndex === index
                ? styles.activeThumbSlide
                : styles.thumbSlide
            }
            key={index}
            style={{
              width:
                currentIndex === index
                  ? "300px !important"
                  : "200px !important",
              transition: "width 0.3s",
            }}
          >
            <img src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
