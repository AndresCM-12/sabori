"use client";
import React from "react";
import styles from "../css/home/our-prodcuts.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
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

  return (
    <section>
      <div className={styles.textWrapper}>
        <h2>Nuestros productos</h2>
        <p>
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system
        </p>
        <a href="/productos">Ver detalles</a>
      </div>
      <div className={styles.swiperWrapper}>
        <Swiper
          id="home-products"
          slidesPerView={"auto"}
          spaceBetween={28}
          modules={[Pagination, EffectCoverflow]}
          pagination={{ clickable: true }}
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
            <SwiperSlide className={styles.slideWrapper} key={index}>
              <img src={item.image} alt="Imagen de producto" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiperControl}>
          <img
            width={20}
            src={leftArrow.src}
            onClick={() => {
              (
                document.getElementById("home-products") as any
              ).swiper.slidePrev();
            }}
          ></img>
          <p>Categorías</p>
          <img
            width={20}
            src={rightArrow.src}
            onClick={() => {
              (
                document.getElementById("home-products") as any
              ).swiper.slideNext();
            }}
          ></img>
        </div>
      </div>
    </section>
  );
}
