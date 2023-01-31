import { Link } from "react-router-dom";

import Stat from "./Stat";
import ArrowRight from "../../../icons/ArrowRight";
import useSocialProofContent from "../../../hooks/landing/useSocialProofContent";

const SocialProof = () => {
  const [{ caption, title, description, links, stats }] =
    useSocialProofContent();

  return (
    <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
      <div className="col-span-2 mb-8">
        <p className="text-lg font-medium text-purple-600">{caption}</p>

        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
          {title}
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          {description}
        </p>
        <ul className="pt-6 mt-6 space-y-4 border-t border-gray-200">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800"
                to={link.url}
              >
                {link.text}
                <ArrowRight classNames="w-5 h-5 ml-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        {stats.map((items, index) => (
          <div
            key={index}
            className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
          >
            {items.map((stat, index) => (
              <Stat key={index} data={stat} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
