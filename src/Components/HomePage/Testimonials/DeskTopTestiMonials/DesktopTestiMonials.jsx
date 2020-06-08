import React from "react";
import Img1 from "../Images/mama.jpeg";
import Img2 from "../Images/jigneshSir.jpeg";
import Img3 from "../Images/nehalfiya.jpeg";
import Img4 from "../Images/karan.jpg";
// import Img5 from "../Images/person_5.jpg";
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
                    <img src={Img1} alt="TestiMonialImageDesk" />
                  </div>
                  <div className="testiNameDivDesk">
                    <h5 className="testiNameDesk">Vipul Patel</h5>
                    <h6 className="testiPostDesk" style={{ fontSize: "0.9em" }}>
                      Technical Support Specialist,
                    </h6>

                    <p className="testiPlaceDesk">HP</p>
                  </div>
                </div>
                <div className="contentTwoDesk">
                  <p className="testiReviewDesk">
                    I am very satisfied with the results of his efforts and
                    would highly recommend him to anyone who needs a "web
                    developer". His responsiveness to urgent matters makes him
                    one of the best in his job. Timely, reasonable,
                    professional, great communication. I am confident in
                    recommending his services. He never disappoints. thanks!
                  </p>
                </div>
              </div>
              <div className="testiContentMainDesk">
                <div className="contentOneDesk">
                  <div className="testiImageDivDesk">
                    <img src={Img2} alt="TestiMonialImageDesk" />
                  </div>
                  <div className="testiNameDivDesk">
                    <h5 className="testiNameDesk">Dr.Jignesh Patel</h5>
                    <h6 className="testiPostDesk">Assistant professor,</h6>

                    <p className="testiPlaceDesk">DCS, HNGU</p>
                  </div>
                </div>
                <div className="contentTwoDesk">
                  <p className="testiReviewDesk">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem illo ad itaque fugit, saepe minus a omnis minima
                    maiores
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
                    <h5 className="testiNameDesk">Nehal Patel</h5>
                    <h6 className="testiPostDesk">Marketing Manager,</h6>

                    <p
                      className="testiPlaceDesk"
                      // style={{ fontSize: "0.8em", marginTop: "17px" }}
                    >
                      Hindustan Unilever
                    </p>
                  </div>
                </div>
                <div className="contentTwoDesk">
                  <p className="testiReviewDesk">
                    I Succeed in online customer Survey with help of Nisarge
                    Patel,He is very curious to solve problems and also finished
                    my work on given deadline,i have trust on his work as his
                    support and work initiative never disappoint you.
                  </p>
                </div>
              </div>
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
            </div>
          </div>
          {/* <div className="carousel-item">
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
            </div>
          </div> */}
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
