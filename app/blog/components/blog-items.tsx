"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import fitnessIcon from "../../../public/images/fitness-icon.svg";
import styles from "../css/page.module.css";
import mobileIconMenu from "../../../public/images/mobile-icon-menu.svg";
import { fetchArrayInPost } from "@/app/utils/methods";
import { allBlogs } from "@/app/utils/constants";

export default function BlogItems() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [featuredBlog, setFeaturedBlog] = useState([
    {
      title: "Mente",
      items: [
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
      ],
    },
    {
      title: "Ejercicio",
      items: [
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
      ],
    },
    {
      title: "Alimentación",
      items: [
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
      ],
    },
    {
      title: "Estilo de vida",
      items: [
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
      ],
    },
  ]);
  const didFetch = useRef(false);

  useLayoutEffect(() => {
    const decodedHash = decodeURI(window.location.hash.replace("#", ""));
    if (decodedHash === "") {
      setSelectedCategory(featuredBlog[0].title);
      window.location.hash = featuredBlog[0].title;
    } else {
      setSelectedCategory(decodedHash);
    }

    window.addEventListener("scroll", () => {
      setShowMobileMenu(false);
    });
  }, []);

  useEffect(() => {
    if (didFetch.current === false) {
      fetchArrayInPost(allBlogs).then((data) => {
        setFeaturedBlog(data);
      });
      didFetch.current = true;
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.menuMobile}
        style={{
          backgroundColor: showMobileMenu ? "#ff9494" : "transparent",
          borderRadius: showMobileMenu ? "8px" : "0px",
        }}
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <p>{selectedCategory}</p>
        <img src={mobileIconMenu.src} alt="Burguer menu" />
      </div>

      <div
        style={{
          height: showMobileMenu ? "118px" : "0px",
          padding: showMobileMenu ? "16px" : "0",
        }}
        className={styles.floatingMobileMenu}
      >
        {featuredBlog
          .filter((category) => category.title !== selectedCategory)
          .map((category, index) => (
            <p
              key={index}
              style={{
                display: showMobileMenu ? "flex" : "none",
              }}
              onClick={() => {
                setSelectedCategory(decodeURI(category.title));
                window.location.hash = category.title;
                setShowMobileMenu(false);
              }}
            >
              {category.title}
            </p>
          ))}
      </div>

      <div className={styles.menu}>
        {featuredBlog.map((category, index) => (
          <p
            key={index}
            style={{
              color: selectedCategory === category.title ? "#d91e3e" : "black",
            }}
            onClick={() => {
              setSelectedCategory(decodeURI(category.title));
              window.location.hash = category.title;
            }}
          >
            {category.title}
          </p>
        ))}
      </div>

      <div className={styles.blogFeaturedWrapper}>
        {featuredBlog
          .find((blog) => blog.title === selectedCategory)
          ?.items.map((blog, index) => (
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
    </div>
  );
}
