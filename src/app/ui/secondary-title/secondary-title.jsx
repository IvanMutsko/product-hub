import styles from "./secondary-title.module.css";

export default function SecondaryTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}
