import RenderIf from "../../common/RenderIf";
import CheckCircle from "../../../icons/CheckCircle";
import Seperator from "../../common/Seperator";

const FeatureContent = ({ data }) => {
  const { title, description, features, footerText } = data;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl text-cst-grey-900 font-black">{title}</h2>
        <p className="text-xl text-cst-grey-500 font-normal">{description}</p>
      </div>
      <Seperator gap="8" />
      <div className="flex flex-col gap-6">
        <ul className="flex flex-col gap-4">
          {features?.map((feature, index) => (
            <li key={index} className="flex items-center flex-row gap-2">
              <CheckCircle />
              <p className="text-base text-cst-grey-900 font-medium">
                {feature}
              </p>
            </li>
          ))}
        </ul>
        <RenderIf isTrue={footerText}>
          <p className="text-xl text-cst-grey-500 font-normal">{footerText}</p>
        </RenderIf>
      </div>
    </div>
  );
};
export default FeatureContent;
