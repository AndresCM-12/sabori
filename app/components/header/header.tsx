import React from "react";
import logoImage from "../../../public/images/sabori-logo.webp";
import styles from "../css/header.module.css";
import MobileHeader from "./mobile";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.leftContainer}>
          <a href="/">
            <img
              src={logoImage.src}
              width={110}
              height={44}
              alt="Sabori Parma"
            />
          </a>
          <div className={styles.nav}>
            <a href="/productos">Productos</a>
            <a href="/recetas">Recetas</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
        <div className={styles.actionButton}>
          <a href="/calculadora-de-nutrientes-diarios">
            Calculadora de nutrientes diarios
          </a>
        </div>
        <div className={styles.rightContainer}>
          <a href="/contacto">Contáctanos</a>
          <div className={styles.socialNetworks}>
            <a href="">Ig</a>
            <a href="">Fb</a>
            <a href="">Yt</a>
          </div>
        </div>
      </div>
      <MobileHeader />
    </header>
  );
}
