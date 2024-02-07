import Link from "next/link";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>
          Product HUB
        </Link>
        <Link href={"/dashboard"} className={styles.productsLink}>
          Перейти до товарів
        </Link>
      </div>
    </header>
  );
}
