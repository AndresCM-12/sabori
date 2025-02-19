import styles from "./css/page.module.css";
import BlogItems from "./components/blog-items/blog-items";
import Recipes from "./components/recipes/recipes";
import WhereFindUs from "../components/where-find-us/where-find-us";
import HelpFloatingIcon from "../components/HelpFloatingIcon";

export default function Home({ info }: any) {
  return (
    <>
      <main className={styles.main}>
        <HelpFloatingIcon />
        <div className={styles.imageWrapper}>
          <div className={styles.textWrapper}>
            <h1>{info.title}</h1>
            <p>
              {info.description}
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
