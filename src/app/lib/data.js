import staticData from "../data/products.json";

export const fetchProductById = (id) => {
  try {
    const data = staticData.find((product) => product.id === id);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product.");
  }
};

export const fetchAllProducts = () => {
  try {
    const data = staticData;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
};
