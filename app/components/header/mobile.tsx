"use client";
import React, { useState } from "react";
import menuIcon from "../../../public/images/menu-icon.svg";
import logoImage from "../../../public/images/sabori-logo.webp";
import invertedMenuIcon from "../../../public/images/inverted-menu-icon.svg";
import styles from "../css/header.module.css";
import logoInstagram from "../../../public/images/instagram-logo.svg";
import logoFacebook from "../../../public/images/facebook-logo.svg";
import logoYoutube from "../../../public/images/youtube-logo.svg";

export default function MobileHeader() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setMenuIsOpen(true)}
        className={styles.menuButtonContainer}
      >
        <img
          src={menuIcon.src}
          width={48}
          height={48}
          alt="Ícono para el menú"
        />
      </div>

      <div
        style={{
          display: menuIsOpen ? "flex" : "none",
        }}
        onClick={() => setMenuIsOpen(false)}
        className={styles.mobileMenuBackground}
      ></div>

      <div
        style={{
          right: menuIsOpen ? "0" : "-100%",
        }}
        className={styles.mobileMenuBody}
      >
        <div className={styles.mobileHeader}>
          <img
            src={logoImage.src}
            width={72}
            height={38}
            alt="Logo de Sabori parma"
          />
          <img
            onClick={() => setMenuIsOpen(false)}
            src={invertedMenuIcon.src}
            width={48}
            height={48}
            alt="Ícono para cerrar el menú"
          />
        </div>

        <a className={styles.cta} href="/calculadora-de-nutrientes-diarios">
          Calculadora de nutrientes diarios
        </a>

        <nav>
          <a href="/productos">Productos</a>
          <a href="/recetas">Recetas</a>
          <a href="/nosotros">Nosotros</a>
          <a href="/blog">Blog</a>
        </nav>

        <div className={styles.separator}></div>
        <div className={styles.contactWrapper}>
          <a href="">Contáctanos</a>
          <div>
            <a href="https://www.instagram.com/sabori_mx/" target="_blank">
              <img
                height={16}
                width={16}
                src={logoInstagram.src}
                alt="Instagram logo"
              />
            </a>
            <a href="https://www.facebook.com/SoySabori" target="_blank">
              <img
                height={16}
                width={16}
                src={logoFacebook.src}
                alt="Facebook logo"
              />
            </a>
            <a href="https://www.youtube.com/@sabori2496" target="_blank">
              <img
                height={16}
                width={16}
                src={logoYoutube.src}
                alt="Youtube logo"
              />
            </a>
          </div>
        </div>
        <div className={styles.termsWrapper}>
          <a href="">Aviso de privacidad</a>
          <span>|</span>
          <a href="">Términos y condiciones</a>
        </div>
      </div>
    </>
  );
}
