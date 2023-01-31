import { Link } from "react-router-dom";
import Logo from "../../icons/Logo";

const CompanyLogo = ({ size }) => {
  return (
    <Link to="/" className="flex items-center justify-center">
      <Logo classNames="h-6 mr-3 sm:h-9" />
      <span
        className={`self-center font-semibold whitespace-nowrap text-gray-900 ${
          size ? size : "text-xl"
        }`}
      >
        Landwind
      </span>
    </Link>
  );
};
export default CompanyLogo;
