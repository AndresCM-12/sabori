"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../css/home/our-prodcuts.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import leftArrow from "../../../../public/images/left-arrow.svg";
import rightArrow from "../../../../public/images/right-arrow.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { fetchArrayInPost } from "@/app/utils/methods";
import { featuredProducts, homeInfo } from "@/app/utils/constants";

export default function ClientOurProducts({}) {
  const [products, setStores] = useState([] as any);
  const [homeInfoData, setHomeInfo] = useState({} as any);
  const didFetch = useRef(false);
  useEffect(() => {
    if (didFetch.current === false) {
      fetchArrayInPost(featuredProducts)
        .then((data) => {
          setStores(data);
        })
        .then(() => {
          fetchArrayInPost(homeInfo).then((data) => {
            setHomeInfo(data.ourProducts);
          });
        });
      didFetch.current = true;
    }
  }, []);

  return (
    <section>
      <div className={styles.textWrapper}>
        <h2>{homeInfoData.title}</h2>
        <p>{homeInfoData.description}</p>
        <a
          style={{
            backgroundColor: "#d91e3e",
          }}
          href="/productos"
        >
          Ver detalles
        </a>
      </div>
      <div className={styles.swiperWrapper}>
        {didFetch.current && (
          <Swiper
            id="home-products"
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
              <SwiperSlide className={styles.slideWrapper} key={index}>
                <a href={item.link}>
                  <img src={item.image} alt="Imagen de producto" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
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
