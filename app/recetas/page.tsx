import styles from "./css/page.module.css";
import BlogItems from "./components/blog-items/blog-items";
import Recipes from "./components/recipes/recipes";
import WhereFindUs from "../components/where-find-us/where-find-us";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imageWrapper}>
          <div className={styles.textWrapper}>
            <h1>Recetas</h1>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
          </div>
          <div className={styles.recetasWrapper}></div>
        </div>
        <Recipes />
        <BlogItems />
        <div
          style={{
            marginBottom: "120px",
          }}
        ></div>
      </main>
      <WhereFindUs title="Distribuidores" />
    </>
  );
}
