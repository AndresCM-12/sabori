"use client"

import React, { useEffect, useState } from "react";
import styles from "../css/home/featured-blog.module.css";
import fitnessIcon from "../../../public/images/fitness-icon.svg";
import { fetchArrayInPost } from "@/app/utils/methods";
import { featuredBlog } from "@/app/utils/constants";

export default function FeaturedBlog() {
  const [blogs, setFeaturedBlog] = useState([
    {
      image: "https://via.placeholder.com/560x560",
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
      image: "https://via.placeholder.com/560x560",
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
      image: "https://via.placeholder.com/560x560",
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
  const didFetch = React.useRef(false);
  useEffect(() => {
    if (didFetch.current === false) {
      fetchArrayInPost(featuredBlog).then((data) => {
        setFeaturedBlog(data);
      });
      didFetch.current = true;
    }
  }, []);

  return (
    <section className={styles.blogWrapper}>
      <div className={styles.textWrapper}>
        <h5>Blog</h5>
        <p>
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system
        </p>
        <a href="/blog">Ver todo</a>
      </div>
      <div className={styles.blogFeaturedWrapper}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogCard}>
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
        ))}
      </div>
    </section>
  );
}
