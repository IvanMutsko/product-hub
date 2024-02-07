import NavLink from "../nav-links/nav-links";

import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <input type="text" />
      <NavLink url="/">Список товаров</NavLink>
      <NavLink url="/">Додати товар</NavLink>
    </div>
  );
}
