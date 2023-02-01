import { Link } from "react-router-dom";
const DesktopView = ({ data, onClick, active }) => {
  return (
    <div className="items-center justify-between w-full lg:flex lg:w-auto hidden">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {data.map((link, index) => (
          <li
            onClick={() => onClick(index)}
            className={`text-base font-medium hover:text-cst-purple-600 ${
              active === index ? "text-purple-600" : "text-gray-900"
            }`}
            key={index}
          >
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DesktopView;
