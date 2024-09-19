import styles from "./css/page.module.css";
import WhereFindUs from "@/app/components/where-find-us";
import OurProducts from "@/app/nosotros/components/our-products";
import Recipes from "@/app/recetas/[slug]/components/recipes";
import fitnessIcon from "../../../public/images/fitness-icon.svg";
import contactImage from "../../../public/images/contact-cover.webp";

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
        added: " ",
      },
      {
        name: "Proteínas",
        value: "150",
        unit: "kcal",
        added: "Añadido",
      },
      {
        name: "Proteínas",
        value: "150",
        unit: "kcal",
        added: " ",
      },
      {
        name: "Proteínas",
        value: "150",
        unit: "kcal",
        added: " ",
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

        <div className={styles.nutrients}>
          <h2>Declaración nutrimental | Tamaño de la porción de 100g</h2>
          <div className={styles.nutrientsWrapper}>
            <div className={styles.row}>
              <p>Contenido energético</p>
              <p>Contenido energético</p>
              <p>Contenido energético</p>
              <p> </p>
            </div>
            <div className={styles.separator}></div>

            {productDetails.nutritionFacts.map((fact, index) => (
              <div className={styles.rowWrapper}>
                <div key={index} className={styles.row}>
                  <p>{fact.name}</p>
                  <p>{fact.value}</p>
                  <p>{fact.unit}</p>
                  <p>{fact.added}</p>
                </div>
                <div className={styles.separator}></div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <OurProducts />
      <div style={{ height: "240px" }}></div>
      <WhereFindUs title="Distribuidores" />
      <Recipes />
      <div className={styles.contactWrapper}>
        <div className={styles.textWrapperRelative}>
          <div className={styles.textWrapper}>
            <h6>Contáctanos</h6>
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
                  <input
                    type="text"
                    name="Estado"
                    placeholder="Estado"
                    required
                  />
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
              </form>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={contactImage.src} alt="Icono de fitness" />
        </div>
      </div>
    </>
  );
}
