import NavLink from "../nav-links/nav-links";

import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <input type="text" />
      <NavLink url="/dashboard/products">Список товаров</NavLink>
      <NavLink url="/dashboard/new-product">Додати товар</NavLink>
      <NavLink url="/">На головну</NavLink>
    </div>
  );
}
