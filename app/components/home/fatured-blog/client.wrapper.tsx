"use client";

import React from "react";
import styles from "../../css/home/featured-blog.module.css";

export default function FeaturedBlogClientWrapper({
  blogs,
  homeInfo,
}: {
  blogs: any;
  homeInfo: any;
}) {
  return (
    <section className={styles.blogWrapper}>
      <div className={styles.textWrapper}>
        <h5>{homeInfo.title}</h5>
        <p>{homeInfo.description}</p>
        <a href="/blog">Ver todo</a>
      </div>
      <div className={styles.blogFeaturedWrapper}>
        {blogs.map((blog: any, index: number) => (
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
