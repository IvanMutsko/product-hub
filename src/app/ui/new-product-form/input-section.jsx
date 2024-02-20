import { Field } from "formik";

import styles from "./new-product-form.module.css";

export default function InputSection({ title, information }) {
  return (
    <>
      <h2>{title}</h2>
      {Object.keys(information).map((el) => (
        <label key={el} className={styles.label}>
          {information[el].title}
          <Field
            id={el}
            name={el}
            placeholder={information[el].placeholder}
            type={information[el].type}
            required
          />
        </label>
      ))}
    </>
  );
}
