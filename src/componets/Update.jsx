import React from "react";

function Update() {
  return (
    <>
      <section className=" update_bg_img d-flex flex-column ">
        <div className="container2  d-flex flex-column justify-content-center flex-grow-1">
          <div className="row">
            <div
              className="col-lg-7 col-12 d-flex justify-content-center order-lg-1 order-2 "
              data-aos="zoom-in"
            >
              <div className="update_box mt-32 mt-lg-0">
                <h2 className=" ff-roboto fw-700 text-52 lh-62 mb-0 text-white">
                  Get updated with us
                </h2>
                <div className="row pt-24">
                  <div className="col-sm-6">
                    <p className=" ff-roboto fw-500 text-16 lh-18 text-white mb-2">
                      Frist Name
                    </p>
                    <div className="input_box">
                      <input
                        type="text"
                        placeholder="Park Seijun"
                        className="text-white ff-roboto fw-400 text-14 lh-20 w-100 border-0"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 pt-sm-0 pt-24 ">
                    <p className=" ff-roboto fw-500 text-16 lh-18 text-white mb-2">
                      Last Name
                    </p>
                    <div className="input_box">
                      <input
                        type="text"
                        placeholder="Sejiun"
                        className="text-white ff-roboto fw-400 text-14 lh-20 w-100 border-0"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6   pt-24">
                    <p className=" ff-roboto fw-500 text-16 lh-18 text-white mb-2">
                      Phone Number
                    </p>
                    <div className="input_box">
                      <input
                        type="number"
                        placeholder="+12 5858526478"
                        className="text-white ff-roboto fw-400 text-14 lh-20 w-100 border-0"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6   pt-24">
                    <p className=" ff-roboto fw-500 text-16 lh-18 text-white mb-2">
                      Email
                    </p>
                    <div className="input_box">
                      <input
                        type="email"
                        placeholder="Park@458@Gmail.com"
                        className="text-white ff-roboto fw-400 text-14 lh-20 w-100 border-0"
                      />
                    </div>
                  </div>
                </div>
                <div className=" d-flex align-items-start gap-12 pt-3">
                  <span className="">
                    <input type="checkbox" className="curser-p"></input>
                  </span>
                  <p className=" ff-poppins fw-600 text-18 lh-27 mb-0 text-white">
                    By sending this form I confirm that I have read and accept
                    the Privacy Policy
                  </p>
                </div>
                <button className=" fw-500 text-16 lh-18 play_btn mt-25">
                  Subscribe
                </button>
              </div>
            </div>
            <div
              className="col-lg-5 col-12 order-lg-2 order-1  d-flex justify-content-center  align-items-center"
              data-aos="zoom-in"
            >
              <div className="stay_max_w">
                <h4 className=" text-white mb-0 ff-roboto fw-400 text-24 lh-288">
                  Stay updated
                </h4>
                <p className=" text-white-50 mt-12 text-16 lh-24 mb-0">
                  At 248 Labs, our constant pursuit is to build engaging games
                  that spared joy. Don’t hesitate to reach out to us with your
                  thoughts and messages - we are all ears!
                </p>
                <h4 className=" text-white mb-0 ff-roboto fw-400 text-24 mt-38 lh-288">
                  Address
                </h4>
                <p className=" text-white-50 mt-12 text-16 lh-24 mb-0">
                  390 Orchard Road, 03-07, Palais Renaissance.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Update;
