"use client";
import React from "react";
import styles from "../../css/page.module.css";

export default function OurValuesClientWrapper({ feature }: { feature: any }) {
  return (
    <div className={styles.featureWrapper}>
      {feature.map((item: any, index: number) => (
        <div key={index} className={styles.featureItem}>
          <img src={item.icon} alt="Iconos" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
