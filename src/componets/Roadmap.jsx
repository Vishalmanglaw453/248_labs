import React from "react";
import Image from "next/image";
function Roadmap() {
  return (
    <div>
      <section className="timeline_bg_img overflow-hidden " id="roadmap">
        <div className="container2 pt-217 position-relative">
        <div className="about_ellipes roadmap_ellipes d-none d-lg-block"></div>
          <h2 className="  team_text roadmap_text_pos text-center">Roadmap</h2>
          <div className=" d-flex justify-content-center" data-aos="zoom-in">
            <button className="DOERS_btn  ff-roboto fw-400 text-16 lh-192 ">
              <span className="btn_text_grident"> Road map</span>
            </button>
          </div>
          <h2
            className="mt-18  ff-roboto fw-700 text-52 lh-62 text-white  mb-0 text-center"
            data-aos="zoom-in"
          >
            Milestones and markers
          </h2>
        </div>
        <div className="container2 pt-150">
          <div className="timeline position-relative z-2 " data-aos="zoom-in">
            <div className="timelineconatiner contant_box_padding right ">
              <Image
                src="/assets/images/time-logo.png"
                width={104}
                height={104}
                alt="domain"
                className="curser-p position-absolute roadmap-img"
              />
              <div
                className="content d-flex justify-content-center align-items-center flex-column"
                data-aos="zoom-in"
              >
                <h2 className=" fw-400  text-24  lh-2813 ff-roboto date_heading mb-0">
                  Oct 2014
                </h2>
                <p className=" fw-400 text-24 lh-2813 text-white opacity_7 mb-0 text-center text-sm-start">
                  Hired our first employee
                </p>
                <div className=" timeline_ellipes"></div>
              </div>
            </div>
            <div className="timelineconatiner contant_box_padding2 left">
              <div
                className="content d-flex justify-content-center align-items-center flex-column"
                data-aos="zoom-in"
              >
                <h2 className=" fw-400  text-24  lh-2813 ff-roboto date_heading mb-0">
                  Nov 2014
                </h2>
                <p className=" fw-400 text-24 lh-2813 text-white opacity_7 mb-0 text-center text-sm-start">
                  Launched Bitcoin wallet
                </p>
                <div className=" timeline_ellipes"></div>

              </div>
            </div>
            <div className="timelineconatiner contant_box_padding right">
              <div
                className="content d-flex justify-content-center align-items-center flex-column"
                data-aos="zoom-in"
              >
                <h2 className=" fw-400  text-24  lh-2813 ff-roboto date_heading mb-0">
                  Oct 2015
                </h2>
                <p className=" fw-400 text-24 lh-2813 text-white opacity_7 mb-0 text-center">
                  1st prize by Bit angels at Coin Agenda,{" "}
                  <span className=" d-block"> Las Vegas </span>
                </p>
                <div className=" timeline_ellipes"></div>
              </div>
            </div>
            <div className="timelineconatiner contant_box_padding2 left">
              <div
                className="content d-flex justify-content-center align-items-center flex-column"
                data-aos="zoom-in"
              >
                <h2 className=" fw-400  text-24  lh-2813 ff-roboto date_heading mb-0">
                  Jan 2020
                </h2>
                <p className=" fw-400 text-24 lh-2813 text-white opacity_7 mb-0 d-flex align-items-center gap-3">
                  launch On
                  <span className=" d-flex align-items-center gap-12">
                    <span>
                      <Image
                        src="/assets/images/i-flag.png"
                        width={27}
                        height={27}
                        alt="flag"
                        className="curser-p"
                      />
                    </span>
                    <span>
                      <Image
                        src="/assets/images/a-flag.png"
                        width={27}
                        height={27}
                        alt="flag"
                        className="curser-p"
                      />
                    </span>
                    <span>
                      <Image
                        src="/assets/images/a-fleg.png"
                        width={27}
                        height={27}
                        alt="flag"
                        className="curser-p"
                      />
                    </span>
                  </span>
                </p>
                <div className=" timeline_ellipes"></div>
              </div>
            </div>
            <div className="timelineconatiner contant_box_padding right">
              <div
                className="content d-flex justify-content-center align-items-center flex-column"
                data-aos="zoom-in"
              >
                <h2 className=" fw-400  text-24  lh-2813 ff-roboto date_heading mb-0">
                  Jan 2022
                </h2>
                <p className=" fw-400 text-24 lh-2813 text-white opacity_7 mb-0 d-flex flex-column align-items-center mb-14 text-center text-sm-start">
                  Trusted by 10 Millions+ Users
                </p>
                <span className=" pt-3">
                  <Image
                    src="/assets/images/stars.png"
                    width={151}
                    height={30}
                    alt="star"
                
                  />
                </span>
                <div className=" timeline_ellipes"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Roadmap;
