import "./features.css";
import Row from "../../common/Row";
import RenderIf from "../../common/RenderIf";
import FeatureContent from "./FeatureContent";
import useFeaturesContent from "../../../hooks/landing/useFeaturesContent";

const Features = () => {
  const [content] = useFeaturesContent();

  return (
    <div className="py-24 px-20 flex flex-col gap-20 box-border">
      {content.map(({ image, ...rest }, index) => (
        <Row key={index} classNames="gap-16">
          <RenderIf isTrue={!(index % 2)}>
            <FeatureContent data={rest} />
          </RenderIf>
          <img className="features__tools" src={image.src} alt={image.alt} />
          <RenderIf isTrue={index % 2}>
            <FeatureContent data={rest} />
          </RenderIf>
        </Row>
      ))}
    </div>
  );
};
export default Features;
