import Button from "../../button";
import Check from "../../../icons/Check";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ content }) => {
  return (
    <div className="pricing__card p-8 border border-cst-grey-200 divide-solid flex flex-col gap-8 rounded-lg">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-cst-grey-900 text-center">
          {content.title}
        </h3>
        <p className="text-lg font-normal text-cst-grey-500 text-center">
          {content.desc}
        </p>
      </div>
      <div className="flex gap-2.5 mx-auto">
        <p className="text-5xl font-black text-cst-grey-900">{content.price}</p>
        <p className="text-lg font-medium text-cst-grey-500 self-end">/month</p>
      </div>
      <ul className="flex flex-col gap-4">
        {content.features.map((feature, index) => (
          <li className="flex gap-2.5 items-center" key={index}>
            <Check />
            <p className="text-base font-normal text-cst-grey-900">{feature}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col flex-1 justify-end w-full">
        <Link to="#">
          <Button classNames="w-full" value="Get Started" />
        </Link>
      </div>
    </div>
  );
};
export default Card;
