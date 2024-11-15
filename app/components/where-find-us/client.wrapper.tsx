"use client";
import "swiper/css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../css/where-find-us.module.css";
import { Autoplay } from "swiper/modules";

export default function WhereFindUsClientWrapper({
  title,
  stores,
}: {
  title: string;
  stores: any[];
}) {
  return (
    <section className={styles.whereFindUsWrapper}>
      <h6>{title}</h6>
      <Swiper
        id="whereFindUsSwiper"
        slidesPerView={"auto"}
        spaceBetween={40}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        speed={3200}
        navigation={false}
        centeredSlides={true}
        noSwipingClass="swiper-slide"
      >
        {stores.map((store, index) => (
          <SwiperSlide key={index} style={{ width: "112px" }}>
            <a href={store.link} target="_blank">
              <img
                src={store.image}
                alt="Ícono de tiendas de donde encontrarnos"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
