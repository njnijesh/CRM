import { Link } from "react-router-dom";

import Logo from "../../logo";
import Button from "../../button";
import useHeaderContent from "../../../hooks/landing/useHeaderContent";
import Section from "../../common/Section";

const Header = () => {
  const [content] = useHeaderContent();
  const { links, logo, companyName, button } = content;

  return (
    <Section classNames="py-6 justify-between gap-8">
      <Logo icon={logo} name={companyName} />

      <ul className="flex gap-8 items-center">
        {links.map((link, index) => (
          <li
            className="text-base font-medium text-cst-grey-900 hover:text-cst-purple-600"
            key={index}
          >
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className="flex-1 flex justify-end">
        <Link to={button.link}>
          <Button value={button.text} />
        </Link>
      </div>
    </Section>
  );
};
export default Header;
