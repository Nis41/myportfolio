import React from "react";
import Hr from "../../Common/Hr/Hr";
import DesktopTestiMonials from "./DeskTopTestiMonials/DesktopTestiMonials";
import MobileTestiMonials from "./MobileTestiMonials/MobileTestiMonials";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <div className="testimonialsDiv">
      <h3 className="title">Testimonials</h3>
      <Hr />
      <DesktopTestiMonials />
      <MobileTestiMonials />
    </div>
  );
};

export default Testimonials;
