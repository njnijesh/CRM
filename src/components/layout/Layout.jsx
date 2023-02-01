import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./layout.css";

import Header from "../landing/header";
import Footer from "../landing/footer";
import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import Routes from "../Routes";
import Login from "../../pages/Login";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";
import UserAction from "../../redux/actions/UserAction";
import RenderIf from "../common/RenderIf";
import Landing from "../../pages/Landing";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const userReducer = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const userLoggedIn =
      isAuthenticated && !isLoading && !userReducer?.loggedIn;
    if (userLoggedIn) {
      dispatch(UserAction.setUser(user));
    }
  }, [isAuthenticated, isLoading, user, dispatch, userReducer?.loggedIn]);

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <RenderIf isTrue={!userReducer?.loggedIn}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
        <Route path="/login2">
          <Login />
        </Route>
      </RenderIf>
      <RenderIf isTrue={userReducer?.loggedIn}>
        <Route
          render={(props) => (
            <div
              className={`layout ${themeReducer.mode} ${themeReducer.color}`}
            >
              <Sidebar {...props} />
              <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                  <Routes />
                </div>
              </div>
            </div>
          )}
        />
      </RenderIf>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
