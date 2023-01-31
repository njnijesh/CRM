import { Link } from "react-router-dom";

import Button from "../../button";
import Section from "../../common/Section";
import useTrailContent from "../../../hooks/landing/useTrailContent";

const Trail = () => {
  const [{ title, description, btn }] = useTrailContent();

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <div className="max-w-screen-sm mx-auto text-center">
        <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg">
          {description}
        </p>
        <Link className="flex justify-center" to={btn.url}>
          <Button value={btn.text} />
        </Link>
      </div>
    </div>
  );
};
export default Trail;
