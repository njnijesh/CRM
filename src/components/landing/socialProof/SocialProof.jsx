import { Link } from "react-router-dom";

import Stat from "./Stat";
import Row from "../../common/Row";
import Seperator from "../../common/Seperator";
import ArrowRight from "../../../icons/ArrowRight";
import useSocialProofContent from "../../../hooks/landing/useSocialProofContent";

const SocialProof = () => {
  const [{ caption, title, description, links, stats }] =
    useSocialProofContent();

  return (
    <div className="px-20 py-24 w-full">
      <Row classNames="gap-24">
        <div className="flex flex-col">
          <div>
            <p className="text-lg text-cst-purple-600 font-medium mb-3">
              {caption}
            </p>

            <h2 className="text-4xl text-cst-grey-900 font-black mb-4">
              {title}
            </h2>
            <p className="text-xl text-cst-grey-500 font-light">
              {description}
            </p>
          </div>
          <Seperator gap="6" />
          <ul className="flex flex-col gap-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link className="flex items-center gap-2" to={link.url}>
                  <p className="text-base font-medium text-cst-purple-600">
                    {link.text}
                  </p>
                  <ArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          {stats.map((items, index) => (
            <Row key={index} classNames="gap-8">
              {items.map((stat, index) => (
                <Stat key={index} data={stat} />
              ))}
            </Row>
          ))}
        </div>
      </Row>
    </div>
  );
};

export default SocialProof;
