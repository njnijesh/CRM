import { Link } from "react-router-dom";

import "./Hero.css";
import Button from "../../button";
import Row from "../../common/Row";
import Section from "../../common/Section";
import useHeroContent from "../../../hooks/landing/useHeroContent";

const Hero = () => {
  const [{ title, description, primaryButton, secondaryButton, image }] =
    useHeroContent();

  return (
    <Section classNames="py-16">
      <Row classNames="gap-3">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-black text-cst-grey-900">{title}</h1>
            <p className="text-xl font-normal text-cst-grey-500">
              {description}
            </p>
          </div>
          <div className="flex gap-4">
            <Link to={primaryButton.link}>
              <Button value={primaryButton.text} />
            </Link>
            <Link to={secondaryButton.link}>
              <Button value={secondaryButton.text} btnType="outline" />
            </Link>
          </div>
        </div>
        <img className="hero__image" src={image} alt="Hero Logo" />
      </Row>
    </Section>
  );
};
export default Hero;
