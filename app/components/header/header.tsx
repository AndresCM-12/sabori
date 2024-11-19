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
            <a href="https://www.instagram.com/sabori_mx/" target="_blank">
              Ig
            </a>
            <a href="https://www.facebook.com/SoySabori" target="_blank">
              Fb
            </a>
            <a href="https://www.youtube.com/@sabori2496" target="_blank">
              Yt
            </a>
          </div>
        </div>
      </div>
      <MobileHeader />
    </header>
  );
}
