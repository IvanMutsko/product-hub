import { fetchAllProducts } from "../../lib/data";

import ProductCard from "../../ui/product-card/product-card";

import styles from "./page.module.css";

export const metadata = {
  title: "All products",
  description: "Products",
};

export default async function Page() {
  const productsList = await fetchAllProducts();

  const counter = productsList.length === 0;

  return (
    <div>
      <h1>Products list</h1>

      <ul className={styles.list}>
        {counter ? (
          <p>No products found</p>
        ) : (
          productsList.map(({ id, name, image }) => (
            <li key={id}>
              <ProductCard
                title={name}
                image={image}
                url={`/dashboard/products/${id}`}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
