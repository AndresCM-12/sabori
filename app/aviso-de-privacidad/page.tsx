import styles from "./css/page.module.css";

export default function Home({ info }: any) {
  return (
    <main className={styles.main}>
      <h1>{info?.code.title}</h1>
      <div className={styles.textWrapper}>
        <div
          className={styles.innerHtml}
          dangerouslySetInnerHTML={{ __html: info?.info }}
        ></div>
      </div>
    </main>
  );
}
