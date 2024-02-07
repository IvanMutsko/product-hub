import Sidebar from "../ui/sidebar/sidebar";

import styles from "./dashboard.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
