"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import fitnessIcon from "../../../public/images/fitness-icon.svg";
import empaqueIcon from "../../../public/images/empaque.webp";
import styles from "../css/page.module.css";
import mobileIconMenu from "../../../public/images/mobile-icon-menu.svg";
import { fetchArrayInPost } from "@/app/utils/methods";
import { allProducts } from "@/app/utils/constants";

export default function BlogItems() {
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

  const [featuredBlog, setFeaturedBlog] = useState([
    {
      title: "Todos los productos",
      items: [
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [empaqueIcon.src, empaqueIcon.src, empaqueIcon.src],
          extraIcon: fitnessIcon.src,
        },
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [empaqueIcon.src, empaqueIcon.src, empaqueIcon.src],
          extraIcon: fitnessIcon.src,
        },
      ],
    },
    {
      title: "Pechugas",
      items: [
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [empaqueIcon.src, empaqueIcon.src, empaqueIcon.src],
          extraIcon: fitnessIcon.src,
        },
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [empaqueIcon.src, empaqueIcon.src, empaqueIcon.src],
          extraIcon: fitnessIcon.src,
        },
      ],
    },
    {
      title: "Jamones",
      items: [
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [fitnessIcon.src, fitnessIcon.src, fitnessIcon.src],
          extraIcon: fitnessIcon.src,
        },
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [fitnessIcon.src, fitnessIcon.src, fitnessIcon.src],
          extraIcon: fitnessIcon.src,
        },
      ],
    },
    {
      title: "Salchichas",
      items: [
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [fitnessIcon.src, fitnessIcon.src, fitnessIcon.src],
          extraIcon: fitnessIcon.src,
        },
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [fitnessIcon.src, fitnessIcon.src, fitnessIcon.src],
          extraIcon: fitnessIcon.src,
        },
      ],
    },
    {
      title: "Chorizos",
      items: [
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [fitnessIcon.src, fitnessIcon.src, fitnessIcon.src],
          extraIcon: fitnessIcon.src,
        },
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [fitnessIcon.src, fitnessIcon.src, fitnessIcon.src],
          extraIcon: fitnessIcon.src,
        },
      ],
    },
    {
      title: "Quesos",
      items: [
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [fitnessIcon.src, fitnessIcon.src, fitnessIcon.src],
          extraIcon: fitnessIcon.src,
        },
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [fitnessIcon.src, fitnessIcon.src, fitnessIcon.src],
          extraIcon: fitnessIcon.src,
        },
      ],
    },
    {
      title: "Tocinos",
      items: [
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [fitnessIcon.src, fitnessIcon.src, fitnessIcon.src],
          extraIcon: fitnessIcon.src,
        },
        {
          image: "https://placehold.co/600x400",
          title: "Pechuga de pavo extrafina",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
          ctaLink: "/productos/pechuga-de-pavo",
          ctaText: "Conocer más",
          icons: [fitnessIcon.src, fitnessIcon.src, fitnessIcon.src],
          extraIcon: fitnessIcon.src,
        },
      ],
    },
  ]);
  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current === false) {
      fetchArrayInPost(allProducts).then((data) => {
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
          height: showMobileMenu ? "218px" : "0px",
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
        {(selectedCategory === "Todos los productos"
          ? featuredBlog.flatMap((blog) => blog.items) // Combina los items de todas las categorías
          : featuredBlog.find((blog) => blog.title === selectedCategory)
              ?.items || []
        ).map((blog, index) =>
          index % 2 === 0 ? (
            <div key={index} className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className={styles.text}>
                <h5>{blog.title}</h5>
                <p>{blog.description}</p>
                <div className={styles.iconsWrapper}>
                  {blog.icons.map((icon, iconIndex) => (
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
                  {blog.icons.map((icon, iconIndex) => (
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
