import styles from "./css/page.module.css";
import blogCover from "../../public/images/products-cover.webp";
import BlogItems from "./components/blog-items";
import WhereFindUs from "../components/where-find-us/where-find-us";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imageWrapper}>
          <div>
            <h1>Nuestros productos</h1>
          </div>
          <img src={blogCover.src} alt="Sabori blog imagen de portada" />
        </div>
        <BlogItems />
      </main>
      <WhereFindUs title="Distribuidores" />
    </>
  );
}
