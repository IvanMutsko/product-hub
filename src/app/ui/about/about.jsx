import Section from "../section/section";
import SecondaryTitle from "../secondary-title/secondary-title";

import styles from "./about.module.css";

export default function About() {
  return (
    <Section>
      <SecondaryTitle>Наш ресурс допоможе вам:</SecondaryTitle>
      <ol className={styles.list}>
        <li className={styles.item}>Шукати товари по штрих-коду і назві</li>
        <li className={styles.item}>Отримати опис товару</li>
        <li className={styles.item}>Дізнатись логістичні параметри</li>
        <li className={styles.item}>Отримати посилання на сайт виробника</li>
        <li className={styles.item}>Додавати нові товари</li>
        <li className={styles.item}>Редагувати існуючі товари</li>
      </ol>
    </Section>
  );
}
