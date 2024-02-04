import Link from "next/link";

import styles from "./header.module.css";

export default function Header() {
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>
          Product HUB
        </Link>
        <Link href={"/products"} className={styles.productsLink}>
          Переглянути товари
        </Link>
      </div>
    </header>
  );
}
