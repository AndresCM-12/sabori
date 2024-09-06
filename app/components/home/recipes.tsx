"use client";

import React from "react";
import redRightArrow from "../../../public/images/red-right-arrow.svg";
import styles from "../css/home/recipes.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Pagination } from "swiper/modules";

export default function Recipes() {
  const recipes = [
    {
      title: "Brochette con gravy",
      image: "https://via.placeholder.com/700x600",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
      ctaLink: "/recetas/brochette-con-gravy",
      ctaText: "Ver receta",
      time: "30 min",
    },
    {
      title: "Champiñones rellenos",
      image: "https://via.placeholder.com/700x600",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
      ctaLink: "link1",
      ctaText: "Ver receta",
      time: "25 min",
    },
    {
      title: "Panini",
      image: "https://via.placeholder.com/700x600",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
      ctaLink: "link1",
      ctaText: "Ver receta",
      time: "20 min",
    },
    {
      title: "Receta 1",
      image: "https://via.placeholder.com/700x600",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
      ctaLink: "link1",
      ctaText: "Ver receta",
      time: "35 min",
    },
    {
      title: "Receta 1",
      image: "https://via.placeholder.com/700x600",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
      ctaLink: "link1",
      ctaText: "Ver receta",
      time: "15 min",
    },
  ];

  return (
    <section className={styles.recipesWrapper}>
      <div className={styles.titleWrapper}>
        <h3>Recetas</h3>
        <p>Ver todo</p>
        <img src={redRightArrow.src} alt="Flecha apuntando a la derecha roja" />
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
        {recipes.map((recipe, index) => (
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