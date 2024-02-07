import Link from "next/link";

import styles from "./nav-link.module.css";

export default function NavLink({ children, url }) {
  return (
    <Link href={url} className={styles.link}>
      {children}
    </Link>
  );
}
