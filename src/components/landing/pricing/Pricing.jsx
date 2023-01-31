import Card from "./Card";
import Section from "../../common/Section";
import usePricingContent from "../../../hooks/landing/usePricingContent";

const Pricing = () => {
  const [{ title, description, cards }] = usePricingContent();

  return (
    <Section classNames="py-24 flex-col gap-12">
      <div>
        <h2 className="text-4xl font-black text-cst-grey-900 text-center mb-4">
          {title}
        </h2>
        <p className="text-xl font-normal text-cst-grey-500 text-center max-w-screen-md mx-auto">
          {description}
        </p>
      </div>
      <div className="flex gap-5 justify-between">
        {cards.map((cardContent, index) => (
          <Card content={cardContent} key={index} />
        ))}
      </div>
    </Section>
  );
};
export default Pricing;
