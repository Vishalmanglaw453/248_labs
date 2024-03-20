"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
function Social() {
  var settings = {
    dots: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    speed: 1000,
    dots: false,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1192,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 956,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className=" social-icons-padding">
        <div className="container2">
          <Slider {...settings}>
            <div className=" d-flex justify-content-center align-items-end h-76">
              <Image
                src="/svg/slider-img1.svg"
                width={229.33}
                height={32}
                alt="Picture"
                className="img_fliter op_30"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-end h-76">
              <Image
                src="/svg/slider-img2.svg"
                width={120.25}
                height={74}
                alt="Picture"
                className="img_fliter op_30"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-end h-76">
              <Image
                src="/svg/slider-img3.svg"
                width={235.94}
                height={76}
                alt="Picture"
                className="img_fliter op_30"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-end h-76">
              <Image
                src="/svg/slider-img4.svg"
                width={232}
                height={48}
                alt="Picture"
                className="img_fliter op_30"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-end h-76">
              <Image
                src="/svg/slider-img2.svg"
                width={120.25}
                height={74}
                alt="Picture"
                className="img_fliter op_30"
              />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Social;
