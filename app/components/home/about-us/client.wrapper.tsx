import React from "react";
import styles from "../../css/home/about-us.module.css";

export default function AboutUsClientWrapper({ data }: any) {
  return (
    <section className={styles.aboutUsWrapper}>
      <div className={styles.textWrapper}>
        <h6>{data.title}</h6>
        <p>{data.description}</p>
        <a href="/nosotros">{data.ctaText}</a>
      </div>
      <img src={data.image} alt="Imagen de muestra de nostros" />
    </section>
  );
}
