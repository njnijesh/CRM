import { Link } from "react-router-dom";
import useCompaniesContent from "../../../hooks/landing/useCompaniesContent";

const Companies = () => {
  const [content] = useCompaniesContent();

  return (
    <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
      <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
        {content.map((company, index) => (
          <Link
            className="flex items-center lg:justify-center"
            to={company.url}
            key={index}
          >
            {company.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Companies;
