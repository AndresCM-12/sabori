"use client";
import React from "react";
import styles from "../../css/our-prodcuts.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import leftArrow from "../../../../public/images/left-arrow.svg";
import rightArrow from "../../../../public/images/right-arrow.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function OurProductsClientWrapper({
  products,
  info,
}: {
  products: any;
  info: any;
}) {
  return (
    <section>
      <div className={styles.textWrapper}>
        <h2>{info.productsTitle}</h2>
        <p>{info.productsDescription}</p>
        <a href="/productos">{info.ctaText}</a>
      </div>
      <div className={styles.swiperWrapper}>
        <Swiper
          id="us-products"
          slidesPerView={"auto"}
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
          {products.map((item: any, index: number) => (
            <SwiperSlide
              className={styles.slideWrapper}
              style={{
                width: "260px",
                height: "360px",
              }}
              key={index}
            >
              <a href={item.link}>
                <img src={item.image} alt="Imagen de producto" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

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
