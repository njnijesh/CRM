import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./layout.css";

import Header from "../landing/header";
import Footer from "../landing/footer";
import Sidebar from "../sidebar/Sidebar";
import Routes from "../Routes";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";
import UserAction from "../../redux/actions/UserAction";
import RenderIf from "../common/RenderIf";
import Landing from "../../pages/Landing";
import LoadingPage from "../../pages/LoadingPage";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const userReducer = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const userPersisted = localStorage.getItem("user");
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!userReducer?.loggedIn && userPersisted) {
      dispatch(UserAction.setUser(JSON.parse(userPersisted)));
    }
  }, [userReducer?.loggedIn, userPersisted, dispatch]);
  useEffect(() => {
    const userLoggedIn =
      isAuthenticated && !isLoading && !userReducer?.loggedIn;
    if (userLoggedIn) {
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(UserAction.setUser(user));
    }
  }, [
    isAuthenticated,
    isLoading,
    user,
    dispatch,
    userReducer?.loggedIn,
    userPersisted,
  ]);

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <LoadingPage />
      <Header />
      <RenderIf isTrue={!userReducer?.loggedIn && !userPersisted}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </RenderIf>
      <RenderIf isTrue={userReducer?.loggedIn}>
        <Route
          render={(props) => (
            <div
              className={`layout ${themeReducer.mode} ${themeReducer.color}`}
            >
              <Sidebar {...props} />
              <div className="layout__content">
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
