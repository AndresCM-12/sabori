"use client";
import "swiper/css";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./css/where-find-us.module.css";
import { Autoplay } from "swiper/modules";
import { fetchArrayInPost } from "../utils/methods";
import { whereFindUs } from "../utils/constants";

export default function WhereFindUs({ title }: { title: string }) {
  const [stores, setStores] = useState([
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
    "https://via.placeholder.com/112x112",
  ]);
  const didFetch = React.useRef(false);
  useEffect(() => {
    if (didFetch.current === false) {
      fetchArrayInPost(whereFindUs).then((data) => {
        setStores(data);
      });
      didFetch.current = true;
    }
  }, []);

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
            <img src={store} alt="Ícono de tiendas de donde encontrarnos" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
