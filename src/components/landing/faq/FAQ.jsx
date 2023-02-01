import { useState } from "react";
import Accordion from "./Accordion";

import useFaqContent from "../../../hooks/landing/useFaqContent";

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
    <div className="max-w-screen-xl px-4 pb-8 w-full lg:pb-24 lg:px-6 mx-auto">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl">
        {title}
      </h2>
      {faqs.map((item, index) => (
        <div className="max-w-screen-md mx-auto" key={index}>
          <Accordion
            onItemClick={onItemClick}
            active={active === index}
            data={item}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
