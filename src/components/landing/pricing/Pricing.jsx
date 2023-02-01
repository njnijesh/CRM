import Card from "./Card";
import usePricingContent from "../../../hooks/landing/usePricingContent";

const Pricing = () => {
  const [{ title, description, cards }] = usePricingContent();

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {cards.map((cardContent, index) => (
          <Card content={cardContent} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Pricing;
