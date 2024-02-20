import NewProductForm from "../../ui/new-product-form/new-product-form";

import styles from "./page.module.css";

export const metadata = {
  title: "New product",
  description: "Create new product",
};

export default async function Page() {
  return (
    <div>
      <h1>Додай новий продукт</h1>
      <NewProductForm />
    </div>
  );
}
