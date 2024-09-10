import styles from "./css/page.module.css";
import blogCover from "../../public/images/blog-cover.webp";
import BlogItems from "./components/blog-items";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imageWrapper}>
        <div>
          <h1>Blog</h1>
        </div>
        <img src={blogCover.src} alt="Sabori blog imagen de portada" />
      </div>
      <BlogItems />
    </main>
  );
}
