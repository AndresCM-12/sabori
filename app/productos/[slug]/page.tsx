"use client";
import styles from "./css/page.module.css";
import Recipes from "@/app/recetas/[slug]/components/recipes";
import fitnessIcon from "../../../public/images/fitness-icon.svg";
import contactImage from "../../../public/images/contact-cover.webp";
import { useEffect, useRef, useState } from "react";
import { fetchArrayInRecipe } from "@/app/utils/methods";
import ClientWhereFindUs from "@/app/components/where-find-us/client.where-find-us";
import OurProducts from "@/app/components/home/our-products/our-products";
import Loading from "@/app/components/loading";
import ClientOurProducts from "@/app/components/home/our-products/client.our-products";

export default function Home() {
  const [productDetails, setProductDetails] = useState({
    title: "Pechuga de pavo extrafina",
    portion: "100g",
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
    recipes: [
      {
        title: "Brochette con gravy",
        image: "https://placehold.co/600x400",
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
        ctaLink: "/recetas/brochette-con-gravy",
        ctaText: "Ver receta",
        time: "30 min",
      },
      {
        title: "Champiñones rellenos",
        image: "https://placehold.co/600x400",
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
        ctaLink: "/recetas/champinones-rellenos",
        ctaText: "Ver receta",
        time: "25 min",
      },
      {
        title: "Panini",
        image: "https://placehold.co/600x400",
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
        ctaLink: "/recetas/brochette-con-gravy",
        ctaText: "Ver receta",
        time: "20 min",
      },
      {
        title: "Receta 1",
        image: "https://placehold.co/600x400",
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
        ctaLink: "/recetas/brochette-con-gravy",
        ctaText: "Ver receta",
        time: "35 min",
      },
      {
        title: "Receta 1",
        image: "https://placehold.co/600x400",
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
        ctaLink: "/recetas/brochette-con-gravy",
        ctaText: "Ver receta",
        time: "15 min",
      },
    ],
  });

  const didFetch = useRef(false);
  useEffect(() => {
    const recipeId = window.location.pathname.split("/")[2];
    if (didFetch.current === false) {
      fetchArrayInRecipe(recipeId).then((data) => {
        setProductDetails(data);
      });
      didFetch.current = true;
    }
  }, []);

  return didFetch.current ? (
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
              {productDetails?.details &&
                productDetails.details.map((detail, index) => (
                  <div
                    key={index + detail.title}
                    className={styles.detailWrapper}
                  >
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
          <h2>
            Declaración nutrimental | Tamaño de la porción de{" "}
            {productDetails["portion"]}
          </h2>
          <div className={styles.nutrientsWrapper}>
            {/* <div className={styles.row}>
              <p>Contenido energético</p>
              <p>Contenido energético</p>
              <p>Contenido energético</p>
              <p> </p>
            </div>
            <div className={styles.separator}></div> */}

            {productDetails?.nutritionFacts &&
              productDetails?.nutritionFacts.map((fact, index) => (
                <div className={styles.rowWrapper} key={index}>
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
      <ClientOurProducts />
      <div style={{ height: "240px" }}></div>
      <ClientWhereFindUs title="Distribuidores" />
      <Recipes recipes={productDetails.recipes} />
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
  ) : (
    <Loading />
  );
}
