import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.css";

import { useSelector } from "react-redux";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";
import CompanyLogo from "../logo/Logo";
import RenderIf from "../common/RenderIf";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const userReducer = useSelector((state) => state.UserReducer);
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );

  return (
    <div className="sidebar">
      <div className="w-full pb-[30px] pl-[45px] flex justify-start">
        <CompanyLogo />
      </div>
      <RenderIf isTrue={userReducer?.loggedIn}>
        <div className="sidebar__search">
          <input type="text" placeholder="Search here..." />
          <i className="bx bx-search"></i>
        </div>
        {sidebar_items.map((item, index) => (
          <Link className="mt-60" to={item.route} key={index}>
            <SidebarItem
              title={item.display_name}
              icon={item.icon}
              active={index === activeItem}
            />
          </Link>
        ))}
      </RenderIf>
    </div>
  );
};

export default Sidebar;
