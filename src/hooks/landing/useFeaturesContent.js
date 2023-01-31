import { useState } from "react";

import landingTools from "../../assets/images/landing-tools.png";
import landingPotential from "../../assets/images/landing-potential.png";

export default function useFeaturesContent() {
  const [store, setStore] = useState([
    {
      title: "Work with tools you already use",
      description:
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.",
      features: [
        "Continuous integration and deployment",
        "Development workflow",
        "Knowledge management",
      ],
      footerText:
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
      image: { src: landingTools, alt: "tools" },
    },
    {
      title: "We invest in the world's potential",
      description:
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.",
      features: [
        "Dynamic reports and dashboards",
        "Templates for everyone",
        "Development workflow",
        "Limitless business automation",
        "Knowledge management",
      ],
      image: { src: landingPotential, alt: "Our Potential" },
    },
  ]);
  return [store, setStore];
}
