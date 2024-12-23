import styles from "./css/page.module.css";
import Calculator from "./components/calculator";
import { fetchArrayInPost } from "../utils/methods";
import { calculadoraInfo } from "../utils/constants";
import HelpFloatingIcon from "../components/HelpFloatingIcon";

export default async function Home() {
  const calculadoraInfoData = await fetchArrayInPost(calculadoraInfo);

  return (
    <main className={styles.main} style={{ marginTop: "0px" }}>
      <HelpFloatingIcon />
      <div className={styles.imageWrapper}>
        <img src={calculadoraInfoData.bgImage} alt="Contacto cover" />
        <div>
          <h1>{calculadoraInfoData.title}</h1>
          <p>{calculadoraInfoData.description}</p>
        </div>
      </div>

      <Calculator />
    </main>
  );
}
