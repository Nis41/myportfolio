import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Common/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import SkillsPage from "./Components/SkillsPage/SkillsPage";
import ContactPage from "./Components/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Route path="/about" component={AboutPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/" exact component={HomePage} />
      </div>
    </div>
  );
}

export default App;
