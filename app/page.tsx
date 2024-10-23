import styles from "./page.module.css";
import contactTag from "../public/images/contact-tag.svg";
import HomeBanner from "./components/home/home-banner/home-banner";
import OurProducts from "./components/home/our-products";
import Recipes from "./components/home/recipes";
import FeaturedBlog from "./components/home/featured-blog";
import AboutUs from "./components/home/about-us";
import WhereFindUs from "./components/where-find-us";
import Header from "./components/header/header";
import CustomFooter from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
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
        <OurProducts />
        <Recipes />
        <FeaturedBlog />
        <AboutUs />
        <WhereFindUs title={"Dónde encontrarnos"} />
      </main>
      <CustomFooter />
    </>
  );
}
