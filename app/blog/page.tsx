import styles from "./css/page.module.css";
import BlogItems from "./components/blog-items";
import HelpFloatingIcon from "../components/HelpFloatingIcon";

export default async function Home() {
  return (
    <main className={styles.main}>
      <HelpFloatingIcon />
      <BlogItems />
    </main>
  );
}
