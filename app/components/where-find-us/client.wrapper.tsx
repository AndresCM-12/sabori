"use client";
import "swiper/css";

import React from "react";
import styles from "../css/where-find-us.module.css";
import bannerStyles from "./where-find-us.module.css";

export default function WhereFindUsClientWrapper({
  title,
  stores,
}: {
  title: string;
  stores: any[];
}) {
  return (
    <section className={styles.whereFindUsWrapper}>
      <h6>{title}</h6>
      <div className={bannerStyles.inner}>
        <div className={bannerStyles.wrapper}>
          <section style={{ "--speed": `${90500}ms` } as React.CSSProperties}>
            {stores.map(({ image, index }) => (
              <div className={bannerStyles.image} key={index + Math.random()}>
                <img src={image} alt={index} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${90500}ms` } as React.CSSProperties}>
            {stores.map(({ image, index }) => (
              <div className={bannerStyles.image} key={index + Math.random()}>
                <img src={image} alt={index} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
