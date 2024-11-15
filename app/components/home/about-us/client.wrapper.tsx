import React from "react";
import styles from "../../css/home/about-us.module.css";

export default function AboutUsClientWrapper() {
  return (
    <section className={styles.aboutUsWrapper}>
      <div className={styles.textWrapper}>
        <h6>Nosotros</h6>
        <p>
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system
        </p>
        <a href="/nosotros">Ver más</a>
      </div>
      <img
        src="https://placehold.co/600x400"
        alt="Imagen de muestra de nostros"
      />
    </section>
  );
}
