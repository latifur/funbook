import React from "react";
import logo from "./logo.svg";
import "bootstrap/scss/bootstrap.scss";
import "./App.scss";
import AppNavbar from "./component/navbar";
import Main from "./component/main";
import Login from "./pages/login";
import { useSelector } from "react-redux";

function App() {
  const userInfo = useSelector(state => state.user);
  return !userInfo.loginStatus ? (
    <Login />
  ) : (
    <div className="App">
      <AppNavbar />
      <Main />
    </div>
  );
}

export default App;
