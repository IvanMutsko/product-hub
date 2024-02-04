import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Product HUB <br />
        <span>твій онлайн-каталог товарів</span>
      </h1>
    </section>
  );
}
