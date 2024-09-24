import styles from "./css/page.module.css";
import WhereFindUs from "../../components/where-find-us";
import coverImage from "../../../public/images/rectas-details-cover.webp";
import Recipes from "./components/recipes";
import Recomendations from "./components/recomendations";

export default function Home() {
  const recipeDetails = {
    title: "Brochette con gravy",
    cover: coverImage.src,
    thumbnail:
      "https://sabori.com.mx/wp-content/themes/sabori/img/productos/salchicha-alnatural.jpg",
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
  };

  return (
    <>
      <section className={styles.main}>
        <div className={styles.imageWrapper}>
          <div className={styles.titleWrapper}>
            <h1>{recipeDetails.title}</h1>
          </div>
          <div className={styles.textWrapper}>
            <h2>Ingredientes:</h2>
            {recipeDetails.ingredients.map((ingredient, index) => (
              <p key={index}>› {ingredient}</p>
            ))}
            <h2>Instrucciones:</h2>
            {recipeDetails.instructions.map((instruction, index) => (
              <p key={index}>
                {index + 1}. {instruction}
              </p>
            ))}
          </div>
          <div className={styles.floatingImage}>
            <img src={recipeDetails.thumbnail} alt="Cover " />
          </div>

          <img src={coverImage.src} alt="Cover " />
        </div>
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
      </section>
      <Recomendations testimonials={recipeDetails.testimonials} />
      <Recipes />
      <div
        style={{
          marginTop: "90px",
        }}
      ></div>
      <WhereFindUs title="Donde comprar" />
    </>
  );
}
