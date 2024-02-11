import Link from "next/link";
import Image from "next/image";

import styles from "./product-card.module.css";

export default function ProductCard({ title, image, url }) {
  return (
    <Link href={url} className={styles.link}>
      <Image
        src={image}
        width={800}
        height={800}
        alt={title}
        className={styles.image}
      />
      <h2 className={styles.title}>{title}</h2>
    </Link>
  );
}
