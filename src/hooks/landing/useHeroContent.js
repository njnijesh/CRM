import { useState } from "react";
import heroImage from "../../assets/images/landing-hero.png";

export default function useHeroContent() {
  const [store, setStore] = useState({
    title: (
      <>
        Building digital <br />
        products & brands.
      </>
    ),
    description:
      " Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
    primaryButton: {
      text: "Start 30 day free trial",
      link: "#",
    },
    secondaryButton: {
      text: "Pricing & FAQ",
      link: "#",
    },
    image: heroImage,
  });

  return [store, setStore];
}
