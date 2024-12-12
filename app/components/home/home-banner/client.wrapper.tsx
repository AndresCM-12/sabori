"use client";
import React from "react";
import styles from "../../css/home/home-banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import leftArrow from "../../../../public/images/left-arrow.svg";
import rightArrow from "../../../../public/images/right-arrow.svg";
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
  const [thumbsSwiper, setThumbsSwiper] = React.useState();
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
      <div
      className={styles.arrowsFloating}
        style={{
          position: "absolute",
          bottom: "180px",
          right: "0",
          zIndex: 100,
          marginRight: "20px",
          display: "flex",
          gap: "12px",
        }}
      >
        <img
          src={leftArrow.src}
          alt="Left Arrow"
          style={{
            width: "30px",
            height: "50px",
            objectFit: "contain",
            filter: "invert(1)",
            cursor: "pointer",
          }}
          onClick={() => {
            const mainSwiper = document.getElementById("HomeBanner") as any;
            mainSwiper.swiper.slidePrev();
          }}
        ></img>
        <img
          src={rightArrow.src}
          alt="Right Arrow"
          style={{
            width: "30px",
            height: "50px",
            objectFit: "contain",
            filter: "invert(1)",
            cursor: "pointer",
          }}
          onClick={() => {
            const mainSwiper = document.getElementById("HomeBanner") as any;
            mainSwiper.swiper.slideNext();
          }}
        ></img>
      </div>

      <Swiper
        className={styles.thumbs}
        slidesPerView={2}
        spaceBetween={16}
        speed={1000}
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={(swiper: any) => setThumbsSwiper(swiper as any)}
      >
        {carouselData.map((slide, index) => {
          const currentIndexIsOdd = currentIndex % 2 !== 0;
          var indexToDecrease;
          var indexToIncrease;

          if (currentIndexIsOdd) {
            indexToDecrease = currentIndex - 1;
            indexToIncrease = currentIndex;
          } else {
            indexToDecrease = currentIndex + 1;
            indexToIncrease = currentIndex;
          }

          return (
            <SwiperSlide
              className={
                index === indexToDecrease
                  ? styles.reducedSlide
                  : index === indexToIncrease
                  ? styles.activeThumbSlide
                  : styles.thumbSlide
              }
              key={index}
              style={{
                width: "200px",
                transition: "width 0.5s",
              }}
            >
              <img src={slide.image} alt={slide.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
