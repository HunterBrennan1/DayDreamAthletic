import { NavBar } from "./components/navBar";
import { MainPage } from "./components/MainPage"
import { Cards } from "./components/Cards"
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import React from "react";


function App() {
  return (

    <div className="App">
      <NavBar />
      <MainPage />
      <Cards />
    </div>

  );
}

export default (App);