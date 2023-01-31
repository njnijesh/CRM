import { Link } from "react-router-dom";

import Button from "../../button";
import Section from "../../common/Section";
import useTrailContent from "../../../hooks/landing/useTrailContent";

const Trail = () => {
  const [{ title, description, btn }] = useTrailContent();

  return (
    <Section classNames="py-24 items-center justify-center bg-cst-grey-50">
      <div className="max-w-screen-sm flex flex-col gap-6">
        <h2 className="leading-tight text-4xl font-black text-center text-cst-grey-900">
          {title}
        </h2>
        <p className="text-xl font-normal text-cst-grey-500">{description}</p>
        <Link className="flex justify-center" to={btn.url}>
          <Button value={btn.text} />
        </Link>
      </div>
    </Section>
  );
};
export default Trail;
