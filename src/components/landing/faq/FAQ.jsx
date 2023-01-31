import { useState } from "react";
import Accordion from "./Accordion";
import "./faq.css";

import useFaqContent from "../../../hooks/landing/useFaqContent";
import Section from "../../common/Section";

const FAQ = () => {
  // Fetch Contents
  const [{ title, faqs }] = useFaqContent();

  //Store Active Accordion
  const [active, setActive] = useState(null);

  //Handle Accordion Click
  const onItemClick = (index) => {
    if (active === index) {
      setActive(null);
    }
    if (active !== index) {
      setActive(index);
    }
  };
  return (
    <Section classNames="flex-col justify-center items-center pb-24 gap-8">
      <h2 className="text-4xl font-black leading-tight">{title}</h2>
      {faqs.map((item, index) => (
        <div className="faq__accordion" key={index}>
          <Accordion
            onClick={onItemClick}
            active={active === index}
            data={item}
            index={index}
          />
        </div>
      ))}
    </Section>
  );
};

export default FAQ;
