import styles from "./css/page.module.css";
import contactoCover from "../../public/images/contacto-cover.webp";
import WhereFindUs from "../components/where-find-us";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imageWrapper}>
        <img src={contactoCover.src} alt="Contacto cover" />
        <h1>¡Contáctanos!</h1>
        <div className={styles.formWrapper}>
          <form action="sent" method="post">
            <div className={styles.horizontalWrapper}>
              <input
                type="text"
                name="Nombre Completo"
                placeholder="Nombre Completo"
                required
              />
              <input
                type="email"
                name="Correo Electrónico"
                placeholder="Correo Electrónico"
                required
              />
              <input
                type="tel"
                name="Teléfono"
                placeholder="Teléfono"
                required
              />
              <input
                type="text"
                name="Recursos Humanos"
                placeholder="Recursos Humanos"
                required
              />
              <input type="text" name="Estado" placeholder="Estado" required />
            </div>
            <textarea
              name="Mensaje"
              placeholder="Mensaje"
              required
              rows={5}
            ></textarea>
            <div className={styles.buttonWrapper}>
              <div className={styles.termsWrapper}>
                <input
                  id="Términos y condiciones"
                  type="checkbox"
                  name="Términos y condiciones"
                  placeholder="Acepto términos y condiciones"
                  required
                />
                <label htmlFor="Términos y condiciones">
                  Acepto términos y condiciones
                </label>
              </div>
              <button type="submit">Enviar</button>
            </div>
            <div className={styles.socialWrapper}>
              <a href="ig">Ig</a>
              <a href="ig">Fb</a>
              <a href="ig">Yb</a>
            </div>
          </form>
        </div>
      </div>
      <WhereFindUs title="Distribuidores" />
    </main>
  );
}
