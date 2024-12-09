import React from "react";
import styles from "./css/footer.module.css";
import saboriLogo from "../../public/images/sabori-logo.webp";

export default function CustomFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSeparator}></div>

      <div className={styles.leftContainer}>
        <img src={saboriLogo.src} width={131} height={72} alt="" />
        <nav>
          <a href="/">Inicio</a>
          <a href="/productos">Producto</a>
          <a href="/recetas">Recetas</a>
          <a href="/nosotros">Nosotros</a>
          <a href="/blog">Blog</a>
        </nav>
      </div>

      <div className={styles.infoContainer}>
        <p>Atención al cliente:</p>
        <a href="mailto:hola@sabori.com.mx">hola@sabori.com.mx</a>
        <nav>
          <a href="https://www.instagram.com/sabori_mx/" target="_blank">
            Ig
          </a>
          <a href="https://www.facebook.com/SoySabori" target="_blank">
            Fb
          </a>
          <a href="https://www.youtube.com/@sabori2496" target="_blank">
            Yt
          </a>
        </nav>
        <div>
          <a href="aviso-de-privacidad">Aviso de privacidad</a>
          <span> | </span>
          <a href="terminos-y-condiciones">Términos y condiciones</a>
        </div>
      </div>

      <div className={styles.newsLetterContainer}>
        <h6>Conoce más detalles de como cuidarte mejor</h6>
        <p>
        Porque cuidar de ti nunca fue tan fácil. Suscríbete para recibir más detalles y tips exclusivos
        </p>
        <form action="POST">
          <input type="email" placeholder="Correo electronico" />
          <button type="submit">Suscribirse</button>
        </form>
      </div>
    </footer>
  );
}
