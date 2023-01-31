import { Link } from "react-router-dom";
import useFooterContent from "../../../hooks/landing/useFooterContent";
import Logo from "../../logo";
const Footer = () => {
  const [{ links, socials, copyright }] = useFooterContent();
  return (
    <div className="py-16 px-20 flex flex-col gap-16">
      <div className="flex justify-between">
        {links?.map((item) => (
          <ul className="flex flex-col gap-4" key={item.title}>
            <li className="uppercase text-sm font-black text-cst-grey-900">
              {item.title}
            </li>
            {item?.links?.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.url}
                  className="text-base font-normal text-cst-grey-500 hover:text-cst-grey-900"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="mx-auto max-w-sm flex flex-col gap-5 justify-center items-center">
        <Logo />
        <p className="text-base font-normal text-cst-grey-500">{copyright}</p>
        <div className="flex gap-5">
          {socials?.map((social, index) => (
            <Link key={index} to={social.url}>
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
