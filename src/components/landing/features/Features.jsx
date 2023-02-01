import "./features.css";
import Row from "../../common/Row";
import RenderIf from "../../common/RenderIf";
import FeatureContent from "./FeatureContent";
import useFeaturesContent from "../../../hooks/landing/useFeaturesContent";

const Features = () => {
  const [content] = useFeaturesContent();

  return (
    <div className="bg-gray-50 w-full">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {content.map(({ image, ...rest }, index) => (
          <div
            className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"
            key={index}
          >
            <RenderIf isTrue={!(index % 2)}>
              <FeatureContent margin data={rest} />
            </RenderIf>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={image.src}
              alt={image.alt}
            />
            <RenderIf isTrue={index % 2}>
              <FeatureContent data={rest} />
            </RenderIf>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Features;
