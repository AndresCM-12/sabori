import styles from "./css/page.module.css";
import blogCover from "../../../public/images/products-cover.webp";
import WhereFindUs from "@/app/components/where-find-us";
import OurProducts from "@/app/nosotros/components/our-products";
import Recipes from "@/app/recetas/[slug]/components/recipes";
import fitnessIcon from "../../../public/images/fitness-icon.svg";

export default function Home() {
  const productDetails = {
    title: "Pechuga de pavo extrafina",
    details: [
      {
        icon: fitnessIcon.src,
        title: "Porciones por empaque",
        details: "2",
      },
      {
        icon: fitnessIcon.src,
        title: "Calorías por porción",
        details: "120",
      },
      {
        icon: fitnessIcon.src,
        title: "Proteínas por porción",
        details: "15gr",
      },
    ],
    detailsDescription:
      "Pechuga de pavo extrafina, ideal para preparar tus platillos favoritos. Con un sabor único y delicioso, es perfecta para tus recetas de cocina. ¡Pruébala!",
    nutritionFacts: [
      {
        name: "Proteínas",
        value: "150",
        unit: "kcal",
        added: "",
      },
      {
        name: "Proteínas",
        value: "150",
        unit: "kcal",
        added: "",
      },
      {
        name: "Proteínas",
        value: "150",
        unit: "kcal",
        added: "",
      },
      {
        name: "Proteínas",
        value: "150",
        unit: "kcal",
        added: "",
      },
    ],
    productImage:
      "https://sabori.com.mx/wp-content/uploads/2020/08/Pechuga-de-Pavo-Al-Natural-Triple-Click.png",
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainSection}>
          <div className={styles.imageWrapper}>
            <img
              src={productDetails.productImage}
              alt={"Imagen de " + productDetails.title}
            />
          </div>

          <div className={styles.detailsWrapper}>
            <h1>{productDetails.title}</h1>
            <div className={styles.details}>
              {productDetails.details.map((detail, index) => (
                <div key={index} className={styles.detailWrapper}>
                  <img
                    height={46}
                    width={40}
                    src={detail.icon}
                    alt={detail.title}
                  />
                  <h4>{detail.title}</h4>
                  <p>{detail.details}</p>
                </div>
              ))}
            </div>
            <p>{productDetails.detailsDescription}</p>
          </div>
        </div>

        <div className={styles.nutrients} >
          <h2>Declaración nutrimental | Tamaño de la porción de 100g</h2>
          <div className={styles.nutrientsWrapper}></div>
        </div>
      </main>
      <OurProducts />
      <div style={{ height: "240px" }}></div>
      <WhereFindUs title="Distribuidores" />
      <Recipes />
    </>
  );
}
