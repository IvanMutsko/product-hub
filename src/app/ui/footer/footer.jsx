import Link from "next/link";
import Section from "../section/section";

import {
  BsTelegram,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTiktok,
} from "react-icons/bs";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <p>Follow our news and promotions</p>
          <ul className={styles.linksList}>
            <li>
              <Link
                className={styles.iconsLink}
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTelegram />
              </Link>
            </li>
            <li>
              <Link
                className={styles.iconsLink}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </Link>
            </li>
            <li>
              <Link
                className={styles.iconsLink}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </Link>
            </li>
            <li>
              <Link
                className={styles.iconsLink}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link
                className={styles.iconsLink}
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTiktok />
              </Link>
            </li>
          </ul>
        </div>

        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.024333031589!2d24.030892390346104!3d49.84200030940204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6daf2238f7%3A0x657ac2a6cdcf320b!2zUmF0dXNoYSwg0L_Qu9C-0YnQsCDQoNC40L3QvtC6LCAxLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1sru!2sua!4v1707050473821!5m2!1sru!2sua"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
