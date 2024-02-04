import Section from "../section/section";
import SecondaryTitle from "../secondary-title/secondary-title";
import RetailersSlider from "../retailers-slider/retailers-slider";

import styles from "./retailers.module.css";

export default function Retailers() {
  return (
    <Section>
      <SecondaryTitle>Наші партнери</SecondaryTitle>
      <RetailersSlider />
    </Section>
  );
}
