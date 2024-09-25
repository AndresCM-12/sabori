"use client";
import React, { useEffect } from "react";
import styles from "../../css/home/home-banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import { fetchArrayInPost } from "@/app/utils/methods";
import { featuredHome } from "@/app/utils/constants";

export default function HomeBanner() {
  const didFetch = React.useRef(false);
  const [carouselData, setCarouselData] = React.useState([
    {
      image: "https://via.placeholder.com/1920x1080",
      title: "Pasta a los tres quesos",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
      ctaText: "¿Como se hace?",
      ctaLink: "/cta-link-1",
    },
    {
      image: "https://via.placeholder.com/1920x1080",
      title: "Pasta a los tres quesos 2",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
      ctaText: "¿Como se hace? 2",
      ctaLink: "/cta-link-2",
    },
    {
      image: "https://via.placeholder.com/1920x1080",
      title: "Pasta a los tres quesos 3",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
      ctaText: "¿Como se hace? 3",
      ctaLink: "/cta-link-3",
    },
    {
      image: "https://via.placeholder.com/1920x1080",
      title: "Pasta a los tres quesos 3",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
      ctaText: "¿Como se hace? 3",
      ctaLink: "/cta-link-3",
    },
  ]);

  useEffect(() => {
    if (didFetch.current === false) {
      fetchArrayInPost(featuredHome).then((data) => {
        setCarouselData(data);
      });
      didFetch.current = true;
    }
  }, []);

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
