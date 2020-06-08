import React from "react";
import Img1 from "../Images/mama.jpeg";
import Img2 from "../Images/jigneshSir.jpeg";
import Img3 from "../Images/nehalfiya.jpeg";
import Img4 from "../Images/karan.jpg";
// import Img5 from "../Images/person_5.jpg";

import "./MobileTestiMonials.css";

const MobileTestiMonials = () => {
  return (
    <div className="mobTesti">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="testiContentMain">
              <div className="contentOne">
                <div className="testiImageDiv">
                  <img src={Img1} alt="TestiMonialImage" />
                </div>
                <div className="testiNameDiv">
                  <h5 className="testiName">Vipul Patel</h5>
                  <h6 className="testiPost">Technical Support Specialist,</h6>

                  <p className="testiPlace">HP</p>
                </div>
              </div>
              <div className="contentTwo">
                <p className="testiReview">
                  I am very satisfied with the results of his efforts and would
                  highly recommend him to anyone who needs a "web developer".
                  His responsiveness to urgent matters makes him one of the best
                  in his job. Timely, reasonable, professional, great
                  communication. I am confident in recommending his services. He
                  never disappoints. thanks!
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="testiContentMain">
              <div className="contentOne">
                <div className="testiImageDiv">
                  <img src={Img2} alt="TestiMonialImage" />
                </div>
                <div className="testiNameDiv">
                  <h5 className="testiName" style={{ fontSize: "1.1em" }}>
                    Dr. Jignesh Patel
                  </h5>
                  <h6 className="testiPost">Assistant professor</h6>

                  <p className="testiPlace">DCS, HNGU</p>
                </div>
              </div>
              <div className="contentTwo">
                <p className="testiReview">
                  I am very proud of his efforts and and he's aim is to turn his
                  efforts into successful results. Nisarg takes his work very
                  seriously and stays abreast of the newest developments in
                  programming, which just makes him an excellent developer. I
                  would highly recommend him for any projects.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="testiContentMain">
              <div className="contentOne">
                <div className="testiImageDiv">
                  <img src={Img3} alt="TestiMonialImage" />
                </div>
                <div className="testiNameDiv">
                  <h5 className="testiName">Nehal Patel</h5>
                  <h6 className="testiPost">Marketing Manager,</h6>

                  <p className="testiPlace">Hindustan Unilever</p>
                </div>
              </div>
              <div className="contentTwo">
                <p className="testiReview">
                  I Succeed in online customer Survey with help of Nisarg
                  Patel,He is very curious to solve problems and also finished
                  my work on given deadline,i have trust on his work as his
                  support and work initiative never disappoint you.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
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
          {/* <div className="carousel-item">
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
          </div> */}
        </div>

        <a
          className="carousel-control-prev moveBtn left"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left leftSpan" aria-hidden="true"></i>
        </a>
        <a
          className="carousel-control-next moveBtn right"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-chevron-right rightSpan" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default MobileTestiMonials;
