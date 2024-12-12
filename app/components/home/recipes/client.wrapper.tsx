"use client";

import React from "react";
import redRightArrow from "../../../../public/images/red-right-arrow.svg";
import styles from "../../css/home/recipes.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Pagination } from "swiper/modules";

export default function RecipesClientWrapper({ recipes }: { recipes: any }) {
  return (
    <section className={styles.recipesWrapper}>
      <div className={styles.titleWrapper}>
        <h3>Recetas</h3>
        <a href="/recetas">
          <p>Ver todo</p>
        </a>
        <div style={{
          display: "flex",
          gap: "10px",
        }}>
          <img
            src={redRightArrow.src}
            alt="Flecha apuntando a la derecha roja"
            style={{
              rotate: "180deg",
              cursor: "pointer",
            }}
            onClick={() => {
              (
                document.getElementById("recipes-swiper") as any
              )?.swiper.slidePrev();
            }}
          />
          <img
            src={redRightArrow.src}
            alt="Flecha apuntando a la derecha roja"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              (
                document.getElementById("recipes-swiper") as any
              )?.swiper.slideNext();
            }}
          />
        </div>
      </div>
      <Swiper
        id="recipes-swiper"
        style={
          {
            "--swiper-pagination-color": "#A4A4A4",
            "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "14px",
            "--swiper-pagination-bullet-horizontal-gap": "10px",
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
        {recipes.map((recipe: any, index: number) => (
          <SwiperSlide className={styles.recipeCard} key={index}>
            <img src={recipe.image} alt={recipe.title} />
            <span>{recipe.time}</span>
            <div className={styles.recipeInfo}>
              <h4>{recipe.title}</h4>
              <p>{recipe.description}</p>
              <div className={styles.recipeFooter}>
                <a href={recipe.ctaLink}>{recipe.ctaText}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
