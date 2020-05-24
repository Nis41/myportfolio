import React from "react";
import Img1 from "../Images/person_1.jpg";
import Img2 from "../Images/person_4.jpg";
import Img3 from "../Images/person_2.jpg";
import Img4 from "../Images/karan.jpg";
import Img5 from "../Images/person_5.jpg";

import "./MobileTestiMonials.css";

const MobileTestiMonials = () => {
  return (
    <div className="mobTesti">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="testiContentMain">
              <div className="contentOne">
                <div className="testiImageDiv">
                  <img src={Img4} alt="TestiMonialImage" />
                </div>
                <div className="testiNameDiv">
                  <h5 className="testiName" style={{ fontSize: "1.1em" }}>
                    Karan Rajpurohit
                  </h5>
                  <h6 className="testiPost">Software Developer,</h6>

                  <p className="testiPlace">Simform</p>
                </div>
              </div>
              <div className="contentTwo">
                <p className="testiReview">
                  Always available to help, incredibly proficient, hits
                  deadlines without fail, hard working and trustworthy.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="testiContentMain">
              <div className="contentOne">
                <div className="testiImageDiv">
                  <img src={Img2} alt="TestiMonialImage" />
                </div>
                <div className="testiNameDiv">
                  <h5 className="testiName">Rohit Prajapati</h5>
                  <h6 className="testiPost">Proffecor,</h6>

                  <p className="testiPlace">DCS, HNGU</p>
                </div>
              </div>
              <div className="contentTwo">
                <p className="testiReview">
                  Consectetur adipisicing elit, seddosdoe eiusmod tempor
                  incididunt utore etstes dolore magna aliqua. Ut imminim restai
                  veniam, quis nostrud.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="testiContentMain">
              <div className="contentOne">
                <div className="testiImageDiv">
                  <img src={Img5} alt="TestiMonialImage" />
                </div>
                <div className="testiNameDiv">
                  <h5 className="testiName">Nehal Patel</h5>
                  <h6 className="testiPost">Product Manager,</h6>

                  <p className="testiPlace">Company Name</p>
                </div>
              </div>
              <div className="contentTwo">
                <p className="testiReview">
                  Always available to help, incredibly proficient, hits
                  deadlines without fail, hard working and trustworthy.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="testiContentMain">
              <div className="contentOne">
                <div className="testiImageDiv">
                  <img src={Img3} alt="TestiMonialImage" />
                </div>
                <div className="testiNameDiv">
                  <h5 className="testiName">Jane Doe</h5>
                  <h6 className="testiPost">Software Engineer</h6>

                  <p className="testiPlace">Google</p>
                </div>
              </div>
              <div className="contentTwo">
                <p className="testiReview">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  illo ad itaque fugit, saepe minus a omnis minima maiores
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="testiContentMain">
              <div className="contentOne">
                <div className="testiImageDiv">
                  <img src={Img1} alt="TestiMonialImage" />
                </div>
                <div className="testiNameDiv">
                  <h5 className="testiName">Jay Patel</h5>
                  <h6 className="testiPost">Founder &#38; CEO,</h6>

                  <p className="testiPlace" style={{ fontSize: "11px" }}>
                    Blue Mountain Productions
                  </p>
                </div>
              </div>
              <div className="contentTwo">
                <p className="testiReview">
                  Always available to help, incredibly proficient, hits
                  deadlines without fail, hard working and trustworthy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev moveBtn left"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <i class="fa fa-chevron-left leftSpan" aria-hidden="true"></i>
        </a>
        <a
          class="carousel-control-next moveBtn right"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <i class="fa fa-chevron-right rightSpan" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default MobileTestiMonials;
