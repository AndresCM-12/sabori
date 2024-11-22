"use client";
import styles from "./css/page.module.css";
import Recipes from "./components/recipes";
import Recomendations from "./components/recomendations";
import { useEffect, useRef, useState } from "react";
import { fetchArrayInPost, fetchArrayInRecipe } from "@/app/utils/methods";
import Loading from "@/app/components/loading";
import WhereFindUsClientWrapper from "@/app/components/where-find-us/client.wrapper";
import { whereFindUs } from "@/app/utils/constants";

export default function Home() {
  const [recipeDetails, setRecipeDetails] = useState({
    title: "Brochette con gravy",
    image: "",
    additionalText: "TEST",
    thumbnail:
      "https://sabori.com.mx/wp-content/themes/sabori/img/productos/salchicha-alnatural.jpg",
    recipes: [],
    time: "30 min",
    ingredients: [
      "6 salchichas de pavo Sabori",
      "1 cebolla morada",
      "1 pimiento naranja y 1 rojo",
      "2 calabazas medianas",
      "Sal y pimienta",
      "Brochetas de madera",
      "Gravy",
    ],
    instructions: [
      "Corta la cebolla, calabaza, pimiento y salchichas en trozos pequeños.",
      "Coloca las verduras y las salchichas de forma alternada en las brochetas",
      "Ásalas en un sartén o parrilla caliente durante 10 minutos hasta que se encuentren doradas, añade sal y pimienta al gusto junto con un poco de gravy. ¡a disfrutar!",
    ],
    video: "https://www.youtube.com/embed/rz2nzwtn_5c?si=rN2T2BsuKS6EG3HM",
    testimonials: [
      {
        title: "Ana Bentancur",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Ana Bentancur",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Ana Bentancur",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Ana Bentancur",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  });
  const [stores, setStores] = useState([]);

  const didFetch = useRef(false);
  useEffect(() => {
    const blogId = window.location.pathname.split("/")[2];
    if (didFetch.current === false) {
      fetchArrayInRecipe(blogId)
        .then((data) => {
          setRecipeDetails(data);
        })
        .then(() => {
          fetchArrayInPost(whereFindUs).then((data) => {
            setStores(data);
          });
        })
        .then(() => {
          didFetch.current = true;
        });
    }
  }, []);

  return didFetch.current ? (
    <>
      <section className={styles.main}>
        <div className={styles.imageWrapper}>
          <div className={styles.titleWrapper}>
            <h1>{recipeDetails.title}</h1>
          </div>
          <div className={styles.textWrapper}>
            {recipeDetails.additionalText && (
              <h2>{recipeDetails.additionalText}</h2>
            )}
            <h2>Ingredientes:</h2>
            {recipeDetails.ingredients?.map((ingredient, index) => (
              <p key={index}>› {ingredient}</p>
            ))}
            <h2>Instrucciones:</h2>
            {recipeDetails.instructions?.map((instruction, index) => (
              <p key={index}>
                {index + 1}. {instruction}
              </p>
            ))}
          </div>
          <div className={styles.floatingImage}>
            <img src={recipeDetails.thumbnail} alt="Cover " />
          </div>

          <img src={recipeDetails.image} alt="Cover " />
        </div>

        <div>
          <div className={styles.mobileTextWrapper}>
            {recipeDetails.additionalText && (
              <h2>{recipeDetails.additionalText}</h2>
            )}
            <h2>Ingredientes:</h2>
            {recipeDetails.ingredients?.map((ingredient, index) => (
              <p key={index}>› {ingredient}</p>
            ))}
            <h2>Instrucciones:</h2>
            {recipeDetails.instructions?.map((instruction, index) => (
              <p key={index}>
                {index + 1}. {instruction}
              </p>
            ))}
          </div>
        </div>

        {recipeDetails.video && (
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src={recipeDetails.video}
              title="Reproductor de video de YouTube para receta"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </section>
      {recipeDetails.testimonials?.length > 0 && (
        <Recomendations testimonials={recipeDetails.testimonials} />
      )}
      <Recipes recipes={recipeDetails.recipes} />
      <div
        style={{
          marginTop: "90px",
        }}
      ></div>
      {stores.length > 0 && (
        <WhereFindUsClientWrapper title="Donde comprar" stores={stores} />
      )}
    </>
  ) : (
    <Loading />
  );
}
