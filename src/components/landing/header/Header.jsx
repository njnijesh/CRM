import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Logo from "../../logo";
import Button from "../../button";
import RenderIf from "../../common/RenderIf";
import useHeaderContent from "../../../hooks/landing/useHeaderContent";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [content] = useHeaderContent();
  const { links, logo, companyName, button } = content;

  const onMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const onLoginClick = () => {
    loginWithRedirect();
  };
  const onItemClick = (index) => {
    setActive(index);
  };
  return (
    <header className="fixed w-full z-100">
      <nav className="bg-white border-gray-200 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Logo icon={logo} name={companyName} />
          <DesktopView active={active} data={links} onClick={onItemClick} />
          <div className="flex-1 lg:flex-none lg:order-1 flex justify-end">
            <Button value={button.text} onClick={onLoginClick} />
          </div>
          <MobileView menuOpen={showMenu} onClick={onMenuClick} />
          <RenderIf isTrue={showMenu}>
            <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {links.map((link, index) => (
                  <li
                    onClick={() => onItemClick(index)}
                    className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 ${
                      active === index
                        ? "bg-purple-600 text-white"
                        : "text-gray-900 active:text-purple-600 hover:text-purple-600"
                    }`}
                    key={index}
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </RenderIf>
        </div>
      </nav>
    </header>
  );
};
export default Header;
