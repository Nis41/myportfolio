import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import SkillsPage from "./Components/SkillsPage/SkillsPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import pageNotFound from "./Components/404Page/404Page";
import AdminPage from "./Components/AdminPage/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <div className="content">
        <Switch>
          <Route path="/nisargpateladmin" component={AdminPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/notfound" component={pageNotFound} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/notfound" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
