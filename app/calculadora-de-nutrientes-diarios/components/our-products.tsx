"use client";
import React, { useLayoutEffect } from "react";
import styles from "./css/our-prodcuts.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import leftArrow from "../../../public/images/left-arrow.svg";
import rightArrow from "../../../public/images/right-arrow.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function OurProducts() {
  const products = [
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://via.placeholder.com/260x360",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://via.placeholder.com/260x360",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://via.placeholder.com/260x360",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://via.placeholder.com/260x360",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://via.placeholder.com/260x360",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://via.placeholder.com/260x360",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://via.placeholder.com/260x360",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://via.placeholder.com/260x360",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://via.placeholder.com/260x360",
    },
  ];
  const [windowWidth, setWindowWidth] = React.useState(0);
  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <section>
      <div className={styles.textWrapper}>
        <h2>Complementa tu alimentación con estos productos altos en proteína</h2>
      </div>
      <div className={styles.swiperWrapper}>
        {windowWidth > 0 ? (
          <Swiper
            id="us-products"
            slidesPerView={windowWidth / 260}
            spaceBetween={28}
            modules={[EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            initialSlide={Math.floor(products.length / 2)}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {products.map((item, index) => (
              <SwiperSlide
                className={styles.slideWrapper}
                style={{
                  width: "260px",
                  height: "360px",
                }}
                key={index}
              >
                <img src={item.image} alt="Imagen de producto" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className={styles.swiperControl}>
          <img
            width={20}
            src={leftArrow.src}
            onClick={() => {
              (
                document.getElementById("us-products") as any
              ).swiper.slidePrev();
            }}
          ></img>
          <p>Categorías</p>
          <img
            width={20}
            src={rightArrow.src}
            onClick={() => {
              (
                document.getElementById("us-products") as any
              ).swiper.slideNext();
            }}
          ></img>
        </div>
      </div>
    </section>
  );
}
