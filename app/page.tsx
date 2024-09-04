import styles from "./page.module.css";
import contactTag from "../public/images/contact-tag.svg";
import HomeBanner from "./components/home/home-banner/home-banner";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.swiperWrapper}>
        <div className={styles.floatingWrapper}>
          <div className={styles.floatingImage}>
            <a href="/contacto">
              <img
                src={contactTag.src}
                width={90}
                height={130}
                alt="Escribenos tus dudas"
              />
            </a>
          </div>
          <HomeBanner />
        </div>
      </div>
    </main>
  );
}
