"use client";
import "swiper/css";

import React from "react";
import styles from "../css/where-find-us.module.css";
import bannerStyles from "./where-find-us.module.css";

export default function WhereFindUsClientWrapper({
  title,
  stores,
  homeInfo,
}: {
  title: string;
  stores: any[];
  homeInfo: any;
}) {
  return (
    <section className={styles.whereFindUsWrapper}>
      <h6
        style={{
          marginBottom: "20px",
        }}
      >
        {title}
      </h6>
      <p
        style={{
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
          marginBottom: "20px",
        }}
      >
        {homeInfo.description}
      </p>
      {stores?.length > 0 && (
        <div className={bannerStyles.inner}>
          <div className={bannerStyles.wrapper}>
            <section style={{ "--speed": `${90500}ms` } as React.CSSProperties}>
              {stores.map(({ image, link }, idx) => (
                <div className={bannerStyles.image} key={`store-${idx}`}>
                  <img
                    onClick={() => window.open(link, "_blank")}
                    src={image}
                    alt={`store-${idx}`}
                  />
                </div>
              ))}
            </section>
            <section style={{ "--speed": `${90500}ms` } as React.CSSProperties}>
              {stores.map(({ image, link }, idx) => (
                <div className={bannerStyles.image} key={`store-${idx}`}>
                  <img
                    onClick={() => window.open(link, "_blank")}
                    src={image}
                    alt={`store-${idx}`}
                  />
                </div>
              ))}
            </section>
          </div>
        </div>
      )}
    </section>
  );
}
