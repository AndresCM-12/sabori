"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../css/featured-blog.module.css";
import fitnessIcon from "../../../../public/images/fitness-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { fetchArrayInPost } from "@/app/utils/methods";
import { allBlogs } from "@/app/utils/constants";

export default function FeaturedBlog() {
  const [blogs, setBlogs] = useState([
    {
      image: "https://placehold.co/600x400",
      title: "Tips para ganar músculo",
      description:
        "But I must explain to you how all this mistaken idea of denouncing ",
      ctaLink: "/blog/tips-para-ganar-musculo",
      ctaText: "Ver más",
      category: "Fitness",
      date: "12/12/2021",
      icon: fitnessIcon.src,
    },
    {
      image: "https://placehold.co/600x400",
      title: "Tips para ganar músculo",
      description:
        "But I must explain to you how all this mistaken idea of denouncing ",
      ctaLink: "/blog/tips-para-ganar-musculo",
      ctaText: "Ver más",
      category: "Fitness",
      date: "12/12/2021",
      icon: fitnessIcon.src,
    },
    {
      image: "https://placehold.co/600x400",
      title: "Tips para ganar músculo",
      description:
        "But I must explain to you how all this mistaken idea of denouncing ",
      ctaLink: "/blog/tips-para-ganar-musculo",
      ctaText: "Ver más",
      category: "Fitness",
      date: "12/12/2021",
      icon: fitnessIcon.src,
    },
    {
      image: "https://placehold.co/600x400",
      title: "Tips para ganar músculo",
      description:
        "But I must explain to you how all this mistaken idea of denouncing ",
      ctaLink: "/blog/tips-para-ganar-musculo",
      ctaText: "Ver más",
      category: "Fitness",
      date: "12/12/2021",
      icon: fitnessIcon.src,
    },
    {
      image: "https://placehold.co/600x400",
      title: "Tips para ganar músculo",
      description:
        "But I must explain to you how all this mistaken idea of denouncing ",
      ctaLink: "/blog/tips-para-ganar-musculo",
      ctaText: "Ver más",
      category: "Fitness",
      date: "12/12/2021",
      icon: fitnessIcon.src,
    },
  ]);

  const didFetch = useRef(false);
  useEffect(() => {
    if (didFetch.current === false) {
      fetchArrayInPost(allBlogs).then((data) => {
        const flatenAndFilteredData = data
          .flatMap((category: any) => category.items)
          .filter((recipe: any) => recipe.viewInHome);

        setBlogs(flatenAndFilteredData);
      });
      didFetch.current = true;
    }
  }, []);

  return (
    <section className={styles.blogWrapper}>
      <Swiper spaceBetween={12} slidesPerView={"auto"}>
        {blogs.map((blog, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.blogCard}>
              <div className={styles.headerWrapper}>
                <div>
                  <img src={blog.icon} width={56} height={30} alt={blog.icon} />
                  <p>{blog.category}</p>
                </div>
                <p>{blog.date}</p>
              </div>
              <img src={blog.image} alt={blog.title} />
              <div className={styles.text}>
                <h5>{blog.title}</h5>
                <p>{blog.description}</p>
                <a href={blog.ctaLink}>{blog.ctaText}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
