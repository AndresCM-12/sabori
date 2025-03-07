"use client";
import { useLayoutEffect, useState } from "react";
import styles from "../css/page.module.css";
import mobileIconMenu from "../../../public/images/mobile-icon-menu.svg";

export default function BlogItemsClientWrapper({
  featuredBlog,
  blogInfo,
}: {
  featuredBlog: any;
  blogInfo: any;
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  return (
    <>
      <div className={styles.imageWrapper}>
        <div>
          <h1>{blogInfo.title}</h1>
        </div>
        <img src={blogInfo.bgImage} alt="Sabori blog imagen de portada" />
      </div>
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
            height: showMobileMenu
              ? `${(featuredBlog.length - 1) * 38}px`
              : "0px",
            padding: showMobileMenu ? "16px" : "0",
          }}
          className={styles.floatingMobileMenu}
        >
          {featuredBlog
            .filter((category: any) => category.title !== selectedCategory)
            .map((category: any, index: number) => (
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
          {featuredBlog.map((category: any, index: number) => (
            <p
              key={index}
              style={{
                color:
                  selectedCategory === category.title ? "#d91e3e" : "black",
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
          {(selectedCategory === "Todas las entradas"
            ? featuredBlog.flatMap((blog: any) => blog.items) // Combina los items de todas las categorías
            : featuredBlog.find((blog: any) => blog.title === selectedCategory)
                ?.items || []
          ).map((blog: any, index: number) => (
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
    </>
  );
}
