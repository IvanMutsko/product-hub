"use client";

import { useBarcode } from "next-barcode";

import styles from "./barcode.module.css";

export default function BarcodeImage({ code }) {
  const { inputRef } = useBarcode({
    value: code,
    options: {
      displayValue: true,
      background: "#ffffff",
      lineColor: "#000000",
      height: 30,
      textMargin: 1,
      fontSize: 14,
      margin: 10,
    },
  });

  return <canvas ref={inputRef} className={styles.canvas} />;
}
