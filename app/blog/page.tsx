import styles from "./css/page.module.css";
import BlogItems from "./components/blog-items";

export default async function Home() {
  return (
    <main className={styles.main}>
      <BlogItems />
    </main>
  );
}
