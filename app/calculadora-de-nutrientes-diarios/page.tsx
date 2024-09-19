import styles from "./css/page.module.css";
import contactoCover from "../../public/images/contacto-cover.webp";
import Calculator from "./components/calculator";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imageWrapper}>
        <img src={contactoCover.src} alt="Contacto cover" />
        <div>
          <h1>Calculadora de nutrientes diarios</h1>
          <p>
            laborious physical exercise, except to obtain some advantage from
            it? But who has any right to find fault with a man who chooses to
            enjoy a pleasure that has no annoying consequences, or one who
            avoids a pain that produces no resultant pleasure?"
          </p>
        </div>
      </div>

      <Calculator />
    </main>
  );
}
