import styles from "./page.module.css";
import contactTag from "../public/images/contact-tag.svg";
import HomeBanner from "./components/home/home-banner/home-banner";
import OurProducts from "./components/home/our-products/our-products";
import Recipes from "./components/home/recipes/recipes";
import FeaturedBlog from "./components/home/fatured-blog/featured-blog";
import AboutUs from "./components/home/about-us/about-us";
import Header from "./components/header/header";
import CustomFooter from "./components/footer";
import WhereFindUs from "./components/where-find-us/where-find-us";

export default async function Home() {
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
