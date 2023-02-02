import React from "react";

import "./topnav.css";

import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";

import ThemeMenu from "../thememenu/ThemeMenu";

import notifications from "../../assets/JsonData/notification.json";

import user_image from "../../assets/images/tuat.jpg";

import user_menu from "../../assets/JsonData/user_menus.json";

const curr_user = {
  display_name: "Doğukan Taha ",
  image: user_image,
};

const renderNotificationItem = (item, index) => {
  console.log("Notification item");
  return (
    <div className="notification-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  );
};

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    {/* <div className="topnav__right-user__name">{user.display_name}</div> */}
  </div>
);

const renderUserMenu = (item, index, onClick) => {
  return (
    <Link to={onClick ? "#" : "/"} key={index}>
      <div
        onClick={onClick ? () => onClick() : null}
        className="notification-item"
      >
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  );
};

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index, onClick) =>
              renderUserMenu(item, index, onClick)
            }
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
          {/* dropdown here */}
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
