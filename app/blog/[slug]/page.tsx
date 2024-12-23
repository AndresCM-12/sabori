"use client";
import styles from "./css/page.module.css";
import FeaturedBlog from "./components/featured-blog";
import { useEffect, useRef, useState } from "react";
import { fetchArrayInBlogWithMarkDown } from "@/app/utils/methods";
import Loading from "@/app/components/loading";
import HelpFloatingIcon from "@/app/components/HelpFloatingIcon";

export default function Home() {
  const [blogDetails, setBlogDetails] = useState(null) as any;
  const [blogInfo, setBlogInfo] = useState(null) as any;

  const didFetch = useRef(false);
  useEffect(() => {
    const blogId = window.location.pathname.split("/")[2];
    if (didFetch.current === false) {
      fetchArrayInBlogWithMarkDown(blogId).then((data: any) => {
        setBlogDetails(data.code);
        setBlogInfo(data.info);
      });
      didFetch.current = true;
    }
  }, []);

  return didFetch.current ? (
    <>
      <HelpFloatingIcon />
      <main className={styles.main}>
        <div
          style={{
            position: "relative",
            width: "100%",
          }}
          className={styles.imageWrapper}
        >
          <div>
            <h1>{blogDetails.title}</h1>
          </div>
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              width: "60px",
              height: "60px",
              zIndex: 2,
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                position: "static",
                filter: "brightness(1)",
                objectFit: "contain",
              }}
              src={blogDetails.icon}
              alt="Icono de blog"
            />
          </div>
          <img
            src={blogDetails.image}
            style={{
              filter: "brightness(0.6)",
            }}
            alt="Sabori blog imagen de portada"
          />
        </div>
        <div className={styles.infoWrapper}>
          <h2>{blogDetails.subTitle}</h2>
          <div
            className={styles.innerHtml}
            dangerouslySetInnerHTML={{ __html: blogInfo }}
          ></div>
        </div>

        <div className={styles.divider}>
          <h3>Esto te puede interesar</h3>
        </div>
      </main>
      <FeaturedBlog />
    </>
  ) : (
    <Loading />
  );
}
