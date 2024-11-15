"use client";

import React from "react";
import styles from "../../css/recipes.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function RecipesClientWrapper({ recipes }: { recipes: any[] }) {
  return (
    <section className={styles.recipesWrapper}>
      <Swiper
        id="recipes-page-swiper"
        style={
          {
            flexDirection: "column-reverse",
            display: "flex",
            "--swiper-pagination-color": "#A4A4A4",
            "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "4px",
          } as React.CSSProperties
        } // Add type assertion here
        className={styles.swiperWrapper}
        spaceBetween={40}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          100: {
            spaceBetween: 6,
          },
          500: {
            spaceBetween: 12,
          },
          1110: {
            spaceBetween: 22,
          },
        }}
      >
        <div className={styles.titleWrapper}>
          <h3>Lo más nuevo</h3>
        </div>
        {recipes.map((recipe, index) => (
          <SwiperSlide
            className={styles.recipeCard}
            key={index}
            style={{
              height: "600px",
            }}
          >
            <img src={recipe.image} alt={recipe.title} />
            <span>{recipe.time}</span>
            <div className={styles.recipeInfo}>
              <h4>{recipe.title}</h4>
              <p>{recipe.description}</p>
              <a href={recipe.ctaLink}>{recipe.ctaText}</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
