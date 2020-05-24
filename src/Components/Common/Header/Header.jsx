import React, { Component } from "react";
import Logo from "./Logo/Logo";
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigation";
import NavButton from "./Navigation/MobileNavigation/NavButton";
import MobileNavLinks from "./Navigation/MobileNavigation/MobileNavLinks";
import "./Header.css";

class Header extends Component {
  state = {
    isSliderOpen: false,
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const top = window.scrollY <= 400;
      if (top) {
        this.setState({ scrolled: false });
      } else {
        this.setState({ scrolled: true });
      }
    });
  }

  sliderOpener = () => {
    this.setState({ isSliderOpen: true });
  };
  sliderCloser = () => {
    this.setState({ isSliderOpen: false });
  };

  render() {
    return (
      <div className={this.state.scrolled ? `scrolledHeader` : `header`}>
        <Logo />
        <DesktopNavigation />
        <NavButton sliderOpener={this.sliderOpener} />
        <MobileNavLinks
          isSliderOpen={this.state.isSliderOpen}
          sliderCloser={this.sliderCloser}
        />
      </div>
    );
  }
}

export default Header;
