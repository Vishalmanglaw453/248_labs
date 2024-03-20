'use client'
import React from "react";

import { useState } from "react";
import Image from "next/image";
function Hero() {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
  }

  return (
    <>
      <header className=" vh-100 hero_bg_img d-flex flex-column" id="home">
        <div className="container2 w-100">
          <nav className=" d-flex align-items-center justify-content-between pt-24 pb-23    ">
            <div>
              <Image
                src="/svg/logo.svg"
                width={106}
                height={42}
                alt="Picture of the author"
                className="curser-p"
              />
            </div>
            <ul className={`${
                nav ? "start-0" : "start_100"
              } mb-0 ps-0 d-flex align-items-center gap-24 mobile_view `}>
              <li>
                <a
                  href="#about"
                  className=" ff-roboto opacity_7 fw-400 text-16 lh-24 color-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#ourteam"
                  className=" ff-roboto opacity_7 fw-400 text-16 lh-24 color-white"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className=" ff-roboto opacity_7 fw-400 text-16 lh-24 color-white"
                >
                  Roadmap
                </a>
              </li>
              <button className="nav_btn ms-3  ff-roboto fw-700 text-18 lh-27 ">
                Contact Us
              </button>
            </ul>
            <div  onClick={show} className="menu d-block d-xl-none position-relative  z-3">
              <span></span>
              <span className="my-2"></span>
              <span></span>
            </div>
          </nav>
        </div>
        <div className="container2  d-flex flex-column flex-grow-1 justify-content-center" data-aos="zoom-in">
          <div className=" d-flex justify-content-center">
            <h2 className=" ff-roboto fw-700 text-72 lh-86 text-white mb-0 text-center hero_heading">
              Changing the way games are made
            </h2>
          </div>
          <p className=" ff-roboto text-24 lh-288 text-white  text-center mt-2">
            Redefining the future of play
          </p>
        </div>
      </header>
    </>
  );
}

export default Hero;
