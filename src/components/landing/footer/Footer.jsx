import { Link } from "react-router-dom";
import useFooterContent from "../../../hooks/landing/useFooterContent";
import Logo from "../../logo";
const Footer = () => {
  const [{ links, socials, copyright }] = useFooterContent();
  return (
    <footer>
      <div className="max-w-screen-xl px-4 pt-4 pb-2 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {links?.map((item) => (
            <div key={item.title}>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                {item.title}
              </h3>
              <ul className="text-gray-500">
                {item?.links?.map((link) => (
                  <li className="mb-4" key={link.title}>
                    <Link to={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="text-center">
          <Logo size="text-2xl" />
          <span className="block text-sm mt-5 text-center text-gray-500">
            {copyright}
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            {socials?.map((social, index) => (
              <Link
                className="text-gray-500 hover:text-gray-900"
                key={index}
                to={social.url}
              >
                {social.icon}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
