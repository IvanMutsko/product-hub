import Link from "next/link";
import Image from "next/image";
import BarcodeImage from "../barcode/barcode";

import styles from "./product-card.module.css";

export default function ProductCard({ title, image, url, barCode }) {
  return (
    <Link href={url} className={styles.link}>
      <BarcodeImage code={barCode} />
      <Image
        src={image}
        width={800}
        height={800}
        alt={title}
        className={styles.image}
        priority={true}
      />
      <h2 className={styles.title}>{title}</h2>
    </Link>
  );
}
