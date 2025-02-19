import React from "react";
import styles from "./css/footer.module.css";
import saboriLogo from "../../public/images/sabori-logo.webp";
import ClientFooterForm from "./client-handler-footer";
import logoFacebook from "../../public/images/facebook-logo.svg";
import logoInstagram from "../../public/images/instagram-logo.svg";
import logoYoutube from "../../public/images/youtube-logo.svg";

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
        </nav>
        <div>
          <a href="aviso-de-privacidad">Aviso de privacidad</a>
          {/* <span> | </span>
          <a href="terminos-y-condiciones">Términos y condiciones</a> */}
        </div>
      </div>

      <div className={styles.newsLetterContainer}>
        <h6>Conoce más detalles de como cuidarte mejor</h6>
        <p>
          Porque cuidar de ti nunca fue tan fácil. Suscríbete para recibir más
          detalles y tips exclusivos
        </p>
        <ClientFooterForm />
      </div>
    </footer>
  );
}
