import React from "react";
import MainPage from "./pages/MainPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
