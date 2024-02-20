"use client";

import { Formik, Form } from "formik";
import InputSection from "./input-section";
import {
  mainInformation,
  thingInformation,
  boxInformation,
  palletInformation,
  nutritionInformation,
} from "./information-objects";

import styles from "./new-product-form.module.css";

export default function NewProductForm() {
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    //   save in localstorage and clear on submit
  };

  const initialValuesObj = {};

  const createInitValList = (ob) =>
    Object.keys(ob).map((el) => {
      initialValuesObj[el] = ob[el].initialValue;
    });

  createInitValList(mainInformation);
  createInitValList(thingInformation);
  createInitValList(boxInformation);
  createInitValList(palletInformation);
  createInitValList(nutritionInformation);

  return (
    <Formik
      initialValues={initialValuesObj}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form onChange={handleChange}>
        <InputSection
          title="Основна інформація"
          information={mainInformation}
        />
        <InputSection
          title="Параметри одиниці товару"
          information={thingInformation}
        />
        <InputSection
          title="Параметри ящика/блока"
          information={boxInformation}
        />
        <InputSection
          title="Параметри палети"
          information={palletInformation}
        />
        <InputSection
          title="Поживні характеристики"
          information={nutritionInformation}
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
