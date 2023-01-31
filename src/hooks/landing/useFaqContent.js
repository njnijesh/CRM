import { useState } from "react";
import { Link } from "react-router-dom";

const useFaqContent = () => {
  const [store, setStore] = useState({
    title: "Frequently asked questions",
    faqs: [
      {
        title: "Can I use FlowBite in open-source projects?",
        content: (
          <>
            <p className="mb-2 text-gray-500">
              Generally, it is accepted to use FlowBite in open-source projects,
              as long as it is not a UI library, a theme, a template, a
              page-builder that would be considered as an alternative to
              FlowBite itself.
            </p>
            <p className="text-gray-500 mb-2">
              With that being said, feel free to use this design kit for your
              open-source projects.
            </p>
            <p className="text-gray-500">
              Find out more information by{" "}
              <Link
                className="text-base font-medium text-cst-purple-600"
                to="#"
              >
                reading the license.
              </Link>
            </p>
          </>
        ),
      },
      {
        title: "Where can I access my download files?",
        content: (
          <p className="text-base font-normal text-cst-grey-500">
            No Content Until Now
          </p>
        ),
      },
      {
        title: "Can I use FlowBite for commercial purposes?",
        content: (
          <p className="text-base font-normal text-cst-grey-500">
            No Content Until Now
          </p>
        ),
      },
      {
        title: "What about browser support?",
        content: (
          <p className="text-base font-normal text-cst-grey-500">
            No Content Until Now
          </p>
        ),
      },
    ],
  });
  return [store, setStore];
};
export default useFaqContent;
