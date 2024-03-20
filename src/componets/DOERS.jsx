import React from "react";

function DOERS() {
  return (
    <>
      <section className=" bg-black overflow-hidden" id="about">
        <div className="container2 pt-121 position-relative">
          <div className="about_ellipes d-none d-lg-block about_ellipes_pos"  data-aos="zoom-in"></div>
          <h2 className="  about_heading about_text_pos text-center" >
            About Us
          </h2>

          <div className="row">
            <div
              className="col-md-6 col-12 d-flex  justify-content-lg-start justify-content-center"
              data-aos="zoom-in"
            >
              <div className=" d-flex  d-md-block align-items-center align-items-lg-start flex-column">
                <div>
                  <button className="DOERS_btn  ff-roboto fw-400 text-16 lh-192 ">
                    <span className="btn_text_grident">
                      {" "}
                      DOERS OVER TALKERS
                    </span>
                  </button>
                </div>
                <h2 className="mt-18 ff-roboto fw-700 text-52 lh-62 text-white  mb-0 text-center text-md-start">
                  Game <span className=" d-lg-block">First.Always.</span>
                </h2>
              </div>
            </div>
            <div
              className="col-md-6 col-12 d-flex flex-column justify-content-end align-items-center align-items-lg-start mt-md-0  mt-4"
              data-aos="zoom-in"
            >
              <div>
                <p className=" ff-roboto text-md-start text-center fw-500 text-18 lh-21 text-white mb-0">
                  This is difficult
                </p>
                <p className=" text-md-start text-center ff-roboto fw-400 opacity_7 text-16 lh-21 text-white difficult_pera mb-0">
                  Web3 Games have a notoriously high barrier-to-entry for casual
                  gamers who make up the vast majority of players. “Link your
                  wallet” before gameplay is not just off-putting, it’s boring.
                  We’re solving that with{" "}
                  <span className=" fw-600">world-class storytelling</span>,
                  world-building, game design, art and sound. And fun.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container2 pb-131">
          <div
            className=" d-flex flex-lg-nowrap flex-wrap gap-24 pt-79  align-items-center justify-content-center"
            data-aos="zoom-in"
          >
            <div className="world_building_box position-relative">
              <h3 className=" text-white ff-roboto text-32 lh-38 fw-700">
                World Building
              </h3>
              <p className=" text-white mb-0 pb-96 opacity_7 ff-roboto fw-400 text-16 lh-24">
                Every pixel, every character, every puzzle is a testament to the
                harmonious marriage of imagination and engineering precision
              </p>
              <div className="ellipes position-absolute  ellipes_pos_1"></div>
            </div>
            <div className="world_building_box  position-relative">
              <h3 className=" text-white ff-roboto text-32 lh-38 fw-700">
                Game Design
              </h3>
              <p className=" text-white mb-0 pb-49 opacity_7 ff-roboto fw-400 text-16 lh-24">
                Every frame becomes a brushstroke, every motion a choreographed
                dance, contributing to a symphony of visuals that captivate
                players' senses and ignite their imagination.
              </p>
              <div className="ellipes position-absolute  ellipes_pos_1"></div>
            </div>
            <div className="world_building_box position-relative">
              <h3 className=" text-white ff-roboto text-32 lh-38 fw-700">
                Art and Sound
              </h3>
              <p className=" text-white mb-0 pb-49 opacity_7 ff-roboto fw-400 text-16 lh-24">
                In the realm of game design, art and animation are the
                storytellers, whispering tales of wonder and excitement, etching
                memories that linger long after the controller is set down.
              </p>
              <div className="ellipes position-absolute  ellipes_pos_1"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DOERS;
