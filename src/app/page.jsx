import Header from "../app/ui/header/header";
import Hero from "../app/ui/hero/hero";
import About from "../app/ui/about/about";
import Retailers from "../app/ui/retailers/retailers";
import Footer from "../app/ui/footer/footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Retailers />
      </main>
      <Footer />
    </>
  );
}
