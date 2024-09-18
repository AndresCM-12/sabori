"use client";
import React from "react";
import styles from "../css/page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../../../public/images/leftArrowChev.svg";
import rightArrow from "../../../../public/images/rightArrowChev.svg";

import "swiper/css";

export default function Recomendations({
  testimonials,
}: {
  testimonials: any;
}) {
  return (
    <div className={styles.testimonialsWraper}>
      <img
        src={leftArrow.src}
        width={22}
        height={44}
        onClick={() =>
          (
            document.getElementById("testimonials-swiper") as any
          ).swiper.slidePrev()
        }
      />
      <Swiper
        id="testimonials-swiper"
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
      >
        {testimonials.map((testimonial: any, index: number) => (
          <SwiperSlide key={index} className={styles.testimonial}>
            <h4>{testimonial.title}</h4>
            <p>{testimonial.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <img
        src={rightArrow.src}
        width={22}
        height={44}
        onClick={() =>
          (
            document.getElementById("testimonials-swiper") as any
          ).swiper.slideNext()
        }
      />
    </div>
  );
}
