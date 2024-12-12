import styles from "./page.module.css";
import HomeBanner from "./components/home/home-banner/home-banner";
import OurProducts from "./components/home/our-products/our-products";
import Recipes from "./components/home/recipes/recipes";
import FeaturedBlog from "./components/home/fatured-blog/featured-blog";
import AboutUs from "./components/home/about-us/about-us";
import Header from "./components/header/header";
import CustomFooter from "./components/footer";
import WhereFindUs from "./components/where-find-us/where-find-us";
import HelpFloatingIcon from "./components/HelpFloatingIcon";
import sImage from "../public/images/s.svg";

export default async function Home() {
  return (
    <>
      <Header />
      <main className={styles.mainWrapper}>
        <div className={styles.swiperWrapper}>
          <div className={styles.floatingWrapper}>
            <HomeBanner />
          </div>
        </div>
        <HelpFloatingIcon />
        <OurProducts />
        <Recipes />
        <img
        className={styles.sImage}
          style={{
            position: "absolute",
            zIndex: -1,
            top: "600px",
            left: "0px",
          }}
          src={sImage.src}
          alt="S"
        />
        <FeaturedBlog />
        <AboutUs />
        <WhereFindUs title={"Dónde encontrarnos"} />
      </main>
      <CustomFooter />
    </>
  );
}
