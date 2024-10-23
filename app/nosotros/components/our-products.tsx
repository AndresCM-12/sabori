"use client";
import React, { useEffect } from "react";
import styles from "../css/our-prodcuts.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import leftArrow from "../../../public/images/left-arrow.svg";
import rightArrow from "../../../public/images/right-arrow.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { fetchArrayInPost } from "@/app/utils/methods";
import { featuredProducts } from "@/app/utils/constants";

export default function OurProducts() {
  const didFetch = React.useRef(false);
  const [products, setProducts] = React.useState([
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://placehold.co/600x400",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://placehold.co/600x400",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://placehold.co/600x400",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://placehold.co/600x400",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://placehold.co/600x400",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://placehold.co/600x400",
    },
    {
      link: "/productos/pechuga-de-pavo",
      image: "https://placehold.co/600x400",
    },
  ]);

  useEffect(() => {
    if (didFetch.current === false) {
      fetchArrayInPost(featuredProducts).then((data) => {
        setProducts(data);
      });
      didFetch.current = true;
    }
  }, []);

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
        {didFetch.current ? (
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
            {products.map((item, index) => (
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
