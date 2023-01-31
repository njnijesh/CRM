import { useState } from "react";

const usePricingCardContent = () => {
  const [store, setStore] = useState({
    title: "Pay as you grow",
    description:
      "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
    cards: [
      {
        title: "Starter",
        desc: "Great for personal use and for your side projects.",
        price: "$49",
        features: [
          "Individual configuration",
          "No setup, monthly, or hidden fees",
          "Team size: 1 developer",
          "Premium support: 6 months",
          "Free updates: 6 months",
        ],
      },
      {
        title: "Company",
        desc: "Best for large scale uses and extended redistribution rights.",
        price: "$99",
        features: [
          "Individual configuration",
          "No setup, monthly, or hidden fees",
          "Team size: 10 developer",
          "Premium support: 24 months",
          "Free updates: 24 months",
        ],
      },
      {
        title: "Enterprise",
        desc: "Best for large scale uses and extended redistribution rights.",
        price: "$499",
        features: [
          "Individual configuration",
          "No setup, monthly, or hidden fees",
          "Team size: 100+ developer",
          "Premium support: 36 months",
          "Free updates: 36 months",
        ],
      },
    ],
  });
  const setContent = (data) => {
    setStore(data);
  };
  return [store, setContent];
};
export default usePricingCardContent;
