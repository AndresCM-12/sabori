import styles from "./css/page.module.css";
import blogCover from "../../../public/images/products-cover.webp";
import WhereFindUs from "@/app/components/where-find-us";

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
      </main>
      <WhereFindUs title="Distribuidores" />
    </>
  );
}
