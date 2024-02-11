import Sidebar from "../ui/sidebar/sidebar";

import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <Sidebar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
