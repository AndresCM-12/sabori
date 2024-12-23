import styles from "./css/page.module.css";
import OurProducts from "./components/our-products/our-products";
import OurValues from "./components/our-values/our-values";
import { fetchArrayInPost } from "../utils/methods";
import { nosotrosInfo } from "../utils/constants";
import HelpFloatingIcon from "../components/HelpFloatingIcon";

export default async function Home() {
  const info = await fetchArrayInPost(nosotrosInfo);

  return (
    <main className={styles.main}>
      <HelpFloatingIcon />
      <div className={styles.imageWrapper}>
        <div>
          <h1>{info.title}</h1>
          <p>{info.subTitle}</p>
        </div>
        <img src={info.bgImage} alt="Sabori quienes somos imagen de portada" />
      </div>

      <p className={styles.dividerText}>{info.description}</p>

      <OurValues />
      <OurProducts />
    </main>
  );
}
