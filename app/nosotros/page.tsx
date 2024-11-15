import styles from "./css/page.module.css";
import usCover from "../../public/images/quienes-somos-cover.webp";
import OurProducts from "./components/our-products/our-products";
import OurValues from "./components/our-values/our-values";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imageWrapper}>
        <div>
          <h1>¿Quiénes somos?</h1>
          <p>
            Somos la línea de Carnes frías que piensa y cuida de ti y de tu
            familia.
          </p>
        </div>
        <img src={usCover.src} alt="Sabori quienes somos imagen de portada" />
      </div>

      <p className={styles.dividerText}>
        Somos Sabori, La línea de Carnes frías que piensa y cuida de ti y de tu
        Familia. <br /> Por que en Sabori sabemos que eres exigente y procuras
        alimentarte con lo mejor, contamos con la variedad necesaria para que te
        alimentes sanamente y sigas disfrutando el mejor sabor. Por que con
        Sabori #SabesQueTeEstasCuidando
      </p>

      <OurValues />
      <OurProducts />
    </main>
  );
}
