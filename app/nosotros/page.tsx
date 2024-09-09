import styles from "./css/page.module.css";
import usCover from "../../public/images/quienes-somos-cover.webp";

import calidadIcon from "../../public/images/calidad-icon.svg";
import innovacionIcon from "../../public/images/innovacion-icon.svg";
import experienciaIcon from "../../public/images/experiencia-icon.svg";
import OurProducts from "../components/home/our-products";

export default function Home() {
  const feature = [
    {
      icon: calidadIcon.src,
      title: "Calidad",
      description:
        "Sabori ofrece una amplia gama de productos frescos, con los mejores ingredientes y procesos garantizando la calidad y sabor en cada uno de ellos",
    },
    {
      icon: innovacionIcon.src,
      title: "Innovación",
      description:
        "Porque sabemos que buscas lo mejor, diseñamos empaques con tecnología de vaguardia para mantener tus productos siempre frescos; así como crear productos que siempre se adapten a tus necesidades o que se adapten a tu estilo de vida",
    },
    {
      icon: experienciaIcon.src,
      title: "Experiencia",
      description:
        "Con Sabori logra la combinación perfecta entre tus actividades del día a día y una alimentación saludable para ti y tú familia",
    },
  ];

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

      <div className={styles.featureWrapper}>
        {feature.map((item, index) => (
          <div key={index} className={styles.featureItem}>
            <img src={item.icon} alt="Iconos" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <OurProducts />
    </main>
  );
}
