import { useState } from "react";

import testimonialImage from "../../assets/images/landing-testimonial.svg";

export default function useTestimonialsContent() {
  const [store, setStore] = useState({
    comment:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    user: {
      name: "Micheal Gough",
      img: testimonialImage,
      position: "CEO at Google",
    },
  });
  return [store, setStore];
}
