import React from "react";
import Img1 from "../Images/person_1.jpg";
import Img2 from "../Images/person_4.jpg";
import Img3 from "../Images/person_2.jpg";
import Img4 from "../Images/karan.jpg";
import Img5 from "../Images/person_5.jpg";
import "./DesktopTestiMonials.css";

const DesktopTestiMonials = () => {
  return (
    <div className="deskTesti">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="testiDesktopDiv">
              <div className="testiContentMainDesk">
                <div className="contentOneDesk">
                  <div className="testiImageDivDesk">
                    <img src={Img4} alt="TestiMonialImageDesk" />
                  </div>
                  <div className="testiNameDivDesk">
                    <h5 className="testiNameDesk">Karan Rajpurohit</h5>
                    <h6 className="testiPostDesk">Software Developer,</h6>

                    <p className="testiPlaceDesk">Simform</p>
                  </div>
                </div>
                <div className="contentTwoDesk">
                  <p className="testiReviewDesk">
                    Always available to help, incredibly proficient, hits
                    deadlines without fail, hard working and trustworthy.
                  </p>
                </div>
              </div>
              <div className="testiContentMainDesk">
                <div className="contentOneDesk">
                  <div className="testiImageDivDesk">
                    <img src={Img2} alt="TestiMonialImageDesk" />
                  </div>
                  <div className="testiNameDivDesk">
                    <h5 className="testiNameDesk">Rohit Prajapati</h5>
                    <h6 className="testiPostDesk">Proffesor</h6>

                    <p className="testiPlaceDesk">DCS, HNGU</p>
                  </div>
                </div>
                <div className="contentTwoDesk">
                  <p className="testiReviewDesk">
                    Consectetur adipisicing elit, seddosdoe eiusmod tempor
                    incididunt utore etstes dolore magna aliqua. Ut imminim
                    restai veniam, quis nostrud.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="testiDesktopDiv">
              <div className="testiContentMainDesk">
                <div className="contentOneDesk">
                  <div className="testiImageDivDesk">
                    <img src={Img1} alt="TestiMonialImageDesk" />
                  </div>
                  <div className="testiNameDivDesk">
                    <h5 className="testiNameDesk">Jay Patel</h5>
                    <h6 className="testiPostDesk">Founder &#38; CEO,</h6>

                    <p
                      className="testiPlaceDesk"
                      style={{ fontSize: "0.8em", marginTop: "17px" }}
                    >
                      Blue Mountain Productions
                    </p>
                  </div>
                </div>
                <div className="contentTwoDesk">
                  <p className="testiReviewDesk">
                    Always available to help, incredibly proficient, hits
                    deadlines without fail, hard working and trustworthy.
                  </p>
                </div>
              </div>
              <div className="testiContentMainDesk">
                <div className="contentOneDesk">
                  <div className="testiImageDivDesk">
                    <img src={Img5} alt="TestiMonialImageDesk" />
                  </div>
                  <div className="testiNameDivDesk">
                    <h5 className="testiNameDesk">Nehal Patel</h5>
                    <h6 className="testiPostDesk">Product Manager</h6>

                    <p className="testiPlaceDesk">Company Name</p>
                  </div>
                </div>
                <div className="contentTwoDesk">
                  <p className="testiReviewDesk">
                    Consectetur adipisicing elit, seddosdoe eiusmod tempor
                    incididunt utore etstes dolore magna aliqua. Ut imminim
                    restai veniam, quis nostrud.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="testiDesktopDiv">
              <div className="testiContentMainDesk">
                <div className="contentOneDesk">
                  <div className="testiImageDivDesk">
                    <img src={Img3} alt="TestiMonialImageDesk" />
                  </div>
                  <div className="testiNameDivDesk">
                    <h5 className="testiNameDesk">Jane Doe</h5>
                    <h6 className="testiPostDesk">Software Engineer</h6>

                    <p className="testiPlaceDesk">Google</p>
                  </div>
                </div>
                <div className="contentTwoDesk">
                  <p className="testiReviewDesk">
                    Always available to help, incredibly proficient, hits
                    deadlines without fail, hard working and trustworthy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev moveBtnDesk leftDesk"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left leftSpanDesk" aria-hidden="true"></i>
        </a>
        <a
          className="carousel-control-next moveBtnDesk rightDesk"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <i
            className="fa fa-chevron-right rightSpanDesk"
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </div>
  );
};

export default DesktopTestiMonials;
