"use client";
import { useLayoutEffect, useState } from "react";
import styles from "../css/page.module.css";
import mobileIconMenu from "../../../public/images/mobile-icon-menu.svg";

export default function BlogItemsClientWrapper({
  featuredBlog,
}: {
  featuredBlog: any;
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
          height: showMobileMenu ? "218px" : "0px",
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
        {(selectedCategory === "Todos los productos"
          ? featuredBlog.flatMap((blog: any) => blog.items) // Combina los items de todas las categorías
          : featuredBlog.find((blog: any) => blog.title === selectedCategory)
              ?.items || []
        ).map((blog: any, index: number) =>
          index % 2 === 0 ? (
            <div key={index} className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className={styles.text}>
                <h5>{blog.title}</h5>
                <p>{blog.description}</p>
                <div className={styles.iconsWrapper}>
                  {blog.icons.map((icon: any, iconIndex: number) => (
                    <img
                      key={iconIndex}
                      src={icon}
                      width={26}
                      height={37}
                      alt="Icon"
                    />
                  ))}
                </div>
                <a href={blog.ctaLink}>{blog.ctaText}</a>
              </div>
            </div>
          ) : (
            <div key={index} className={styles.blogCardInverted}>
              <div className={styles.text}>
                <h5>{blog.title}</h5>
                <p>{blog.description}</p>
                <div className={styles.iconsWrapper}>
                  {blog.icons.map((icon: any, iconIndex: number) => (
                    <img key={iconIndex} src={icon} alt="Icon" />
                  ))}
                </div>
                <a href={blog.ctaLink}>{blog.ctaText}</a>
              </div>
              <div className={styles.imageWrapper}>
                <img src={blog.image} alt={blog.title} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
