import React from "react";
import Image from "next/image";
function Lavelup() {
  return (
    <>
      <div className=" overflow-hidden">
        <section className="lavelup-bg-img d-flex flex-column ">
          <div className="container2 w-100 d-flex   flex-grow-1 justify-content-end align-items-center">
            <div>
              <div className="lavelup_box" data-aos="zoom-in">
                <h3 className=" ff-roboto fw-700 text-52 lh-67 text-white mb-0">
                  Level up your gaming experience
                </h3>
                <button className="play_btn ff-roboto fw-700 text-18 lh-27 mt-32">
                  Play Unvilled
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container2 pt-150 position-relative">
            <Image
              src="/assets/images/domain.png"
              width={1140}
              height={422.27}
              alt="domain"
              className="img_border_r w-100 h-100"
              data-aos="zoom-in"
            />
            <div
              className="about_ellipes domin_ellipes_pos d-none d-lg-block"
              data-aos="zoom-in"
            ></div>
          </div>
          <div className="container2 pb-150 pt-24">
            <div className="row ">
              <div className="col-md-4" data-aos="zoom-in">
                <div className=" d-flex gap-md-0 gap-24 flex-sm-nowrap flex-wrap flex-md-column">
                  <div className="">
                    <button className="domin_btn2  ff-roboto fw-700 text-18 lh-27 text-white">
                      name@domain.com
                    </button>
                  </div>
                  <div className=" pt__24">
                    <button className="domin_btn   ff-roboto fw-700 text-18 lh-27 text-white">
                      Make Your Move
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mt-md-0 mt-4" data-aos="zoom-in">
                <p className=" mb-0 text-white   fw-400 ff-roboto lh-24 ">
                  <span className="opacity_7">Unveiled is a unique</span>{" "}
                  <span className=" fw-600 opacity-100">
                    Collectible Card Game
                  </span>{" "}
                  <span className="opacity_7">
                    {" "}
                    in which you gain fervour for your ventures, spending it on
                    mercenaries, spies, automata, and influence.
                  </span>{" "}
                </p>
                <p className=" mb-0 mt-3 text-white   fw-400 ff-roboto lh-24 ">
                  <span className="opacity_7">You play</span>{" "}
                  <span className=" opacity-100 fw-600">
                    a rogue merchant trader{" "}
                  </span>{" "}
                  <span className=" opacity_7">
                    {" "}
                    allied to house, alongside your
                  </span>
                  <span className=" opacity-100 fw-600">
                    {" "}
                    Cryptid-Humanoid Companions
                  </span>{" "}
                  <span className=" opacity_7">
                    {" "}
                    in a game of ambition and alliance, deception and miracles,
                    manipulation and . Bells chime in the harbour, and markets
                    are opening. Guards have swept the streets of the more
                    obvious dangers.
                  </span>
                </p>
                <p className=" mb-0 text-white   fw-600 mt-3 ff-roboto lh-24">
                  What’s your next move?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" ">
          <div className="container2">
            <h3
              className=" mb-40 fw-700 ff-roboto text-52  lh-62 text-white text-center"
              data-aos="zoom-in"
            >
              A rich, inhabited, and licensable world.
            </h3>
            <div className=" position-relative" data-aos="zoom-in">
              <Image
                src="/assets/images/play-img.png"
                width={1140}
                height={422.27}
                alt="domain"
                className="img_border_r w-100 object-fit-cover"
              />
              <div className="play_btn_pos position-absolute">
                <Image
                  src="/assets/images/p-icon.png"
                  width={75}
                  height={75}
                  alt="domain"
                />
              </div>
              <div className="licensable_ellipes licensable_pos d-lg-block d-none"></div>
            </div>
            <div
              className=" d-flex justify-content-center pt-24"
              data-aos="zoom-in"
            >
              <p className="play_pera text-center text-white opacity_7 ff-roboto fw-400 text-16 lh-24">
                {" "}
                Illustrated with original artwork and a cinematic score,
                destined not only for mobile and desktop gaming but also for
                film and television, events, merchandising, and partnerships.
              </p>
            </div>{" "}
          </div>
        </section>
        <section className=" " id="ourteam">
          <div className="container2 pt-202 position-relative">
            <h2 className="  team_text team_text_pos text-center">Our Team</h2>
            <div className="team_ellipes1 team_right_ellipes d-none d-lg-block"></div>
            <div className="team_ellipes1 team_right_ellipes2 d-none d-lg-block"></div>
            <div className=" d-flex justify-content-center" data-aos="zoom-in">
              <button className="DOERS_btn  ff-roboto fw-400 text-16 lh-192 ">
                <span className="btn_text_grident"> Our Team</span>
              </button>
            </div>
            <h2
              className="mt-18  ff-roboto fw-700 text-52 lh-62 text-white  mb-0 text-center"
              data-aos="zoom-in"
            >
              Behind our expertise
            </h2>

            <div className="row pt-61">
              <div
                className="col-lg-6 d-flex justify-content-center mt-28"
                data-aos="zoom-in"
              >
                <div className="our_team_card position-relative">
                  <div className=" d-flex  flex-sm-nowrap flex-wrap align-items-center gap-12">
                    <Image
                      src="/assets/images/team-1.png"
                      width={236}
                      height={198}
                      alt="domain"
                    />
                    <div>
                      <h4 className=" mb-0 fw-600 text-20 lh-24 text-white mt-2 d-flex align-items-center gap-2">
                        James Vuong{" "}
                        <span className=" fw-400 text-16 lh-192 btn_text_grident">
                          (Co-CEO)
                        </span>
                      </h4>
                      <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7">
                        James is a dynamic CEO leading two thriving companies.
                        He co-founded ROOMERANG, elevating it from $0 to $8
                        million in annual net revenue in just 5 years.
                        Additionally, as a co-founder of KEYNINJA, James
                        achieved an
                      </p>
                    </div>
                  </div>
                  <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7 mb-0 pt-2 pb_41">
                    impressive 50% year-over-year net revenue growth within the
                    same timeframe. With a background in property valuation,
                    sales, and technology, James brings a unique blend of skills
                    to drive innovation and success in both ventures.
                  </p>
                  <div className="team-ellipes ellipes_pos_2"></div>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex justify-content-center mt-28"
                data-aos="zoom-in"
              >
                <div className="our_team_card position-relative">
                  <div className=" d-flex  flex-sm-nowrap flex-wrap align-items-center gap-12">
                    <Image
                      src="/assets/images/team-2.png"
                      width={236}
                      height={198}
                      alt="domain"
                    />
                    <div>
                      <h4 className=" mb-0 fw-600 text-20 lh-24 text-white mt-2 d-flex align-items-center gap-2">
                        Tricia Yong
                        <span className=" fw-400 text-16 lh-192 btn_text_grident">
                          (Co-CEO)
                        </span>
                      </h4>
                      <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7">
                        Tricia is a Marketing Director with 15 years of
                        expertise, co-founded ROOMERANG and KEYNINJA with James
                        Vuong, bringing a wealth of knowledge from the tech
                        industry, property valuation, and consumer
                      </p>
                    </div>
                  </div>
                  <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7 mb-0 pt-2 pb_14">
                    products. With a background in consumer behavior, UI/UX
                    design, and marketing strategies, she adeptly navigates the
                    convergence of technology and marketing. Tricia is renowned
                    for crafting compelling narratives that deeply resonate with
                    both business clients and consumers, propelling the company
                    to success in the ever-evolving tech landscape.
                  </p>
                  <div className="team-ellipes ellipes_pos_2"></div>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex justify-content-center mt-28"
                data-aos="zoom-in"
              >
                <div className="our_team_card position-relative">
                  <div className=" d-flex  flex-sm-nowrap flex-wrap align-items-center gap-12">
                    <Image
                      src="/assets/images/team-3.png"
                      width={236}
                      height={198}
                      alt="domain"
                    />
                    <div>
                      <h4 className=" mb-0 fw-600 text-20 lh-24 text-white mt-2 d-flex align-items-center gap-2">
                        Kevin Li
                        <span className=" fw-400 text-16 lh-192 btn_text_grident">
                          (CFO)
                        </span>
                      </h4>
                      <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7">
                        Kev is a seasoned CFO with 15 years of expertise in the
                        Big Pharma sector, demonstrated his leadership by
                        establishing a successful branch office in Myanmar,
                        overseeing its growth to 70 employees in just 24 months.
                        His
                      </p>
                    </div>
                  </div>
                  <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7 mb-0 pt-2 pb_41">
                    strategic pricing initiatives for life-saving medications
                    not only gained eligibility onto the government
                    reimbursement list in Singapore, Sri Lanka, and the Maldives
                    but also significantly alleviated the financial burden on
                    patients grappling with the costs of disease.
                  </p>
                  <div className="team-ellipes ellipes_pos_2"></div>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex justify-content-center mt-28"
                data-aos="zoom-in"
              >
                <div className="our_team_card position-relative">
                  <div className=" d-flex  flex-sm-nowrap flex-wrap align-items-center gap-12">
                    <Image
                      src="/assets/images/team-4.png"
                      width={236}
                      height={198}
                      alt="domain"
                    />
                    <div>
                      <h4 className=" mb-0 fw-600 text-20 lh-24 text-white mt-2 d-flex align-items-center gap-2">
                        Ryan Ang
                        <span className=" fw-400 text-16 lh-192 btn_text_grident">
                          (Lorem Ipsum)
                        </span>
                      </h4>
                      <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7">
                        Experienced in investing in traditional equity markets
                        and blockchain companies. Early adopter of digital
                        assets and co-founded a decentralised finance
                        application that provides walletservices, swaps and DeFi
                      </p>
                    </div>
                  </div>
                  <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7 mb-0 pt-2 pb-64">
                    products. Previously in the private equity arm of one of
                    Singapore’s leading asset management funds, Dymon Asia
                    Capital. Previously the fund manager at Blockchain Ventures.
                  </p>
                  <div className="team-ellipes ellipes_pos_2"></div>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex justify-content-center mt-28"
                data-aos="zoom-in"
              >
                <div className="our_team_card position-relative">
                  <div className=" d-flex  flex-sm-nowrap flex-wrap align-items-center gap-12">
                    <Image
                      src="/assets/images/team-5.png"
                      width={236}
                      height={198}
                      alt="domain"
                    />
                    <div>
                      <h4 className=" mb-0 fw-600 text-20 lh-24 text-white mt-2 d-flex align-items-center gap-2">
                        Dylan
                        <span className=" fw-400 text-16 lh-192 btn_text_grident">
                          (Executive Producer)
                        </span>
                      </h4>
                      <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7">
                        Lorem ipsum dolor sit amet consectetur. Quis in
                        ullamcorper molestie velit proin est. Vestibulum eget eu
                        in egestas. Consequat mi consequat eu eu id integer est.
                        Eget at egestas morbi vitae platea imperdiet sed egestas
                        dignissim.
                      </p>
                    </div>
                  </div>
                  <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7 mb-0 pt-2 pb-113">
                    Lorem ipsum dolor sit amet consectetur. Amet erat
                    condimentum.
                  </p>
                  <div className="team-ellipes ellipes_pos_2"></div>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex justify-content-center mt-28"
                data-aos="zoom-in"
              >
                <div className="our_team_card position-relative">
                  <div className=" d-flex  flex-sm-nowrap flex-wrap align-items-center gap-12">
                    <Image
                      src="/assets/images/team-6.png"
                      width={236}
                      height={198}
                      alt="domain"
                    />
                    <div>
                      <h4 className=" mb-0 fw-600 text-20 lh-24 text-white mt-2 d-flex align-items-center gap-2">
                        Ralf
                        <span className=" fw-400 text-16 lh-192 btn_text_grident">
                          (Lorem Ipsum)
                        </span>
                      </h4>
                      <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7">
                        Lorem ipsum dolor sit amet consectetur. Cursus vulputate
                        facilisis mattis diam consectetur molestie ultrices.
                        Laoreet sagittis facilisis consequat dignissim viverra
                        etiam gravida. Eu cursus scelerisque purus pharetra
                        enim.
                      </p>
                    </div>
                  </div>
                  <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7 mb-0 pt-2 pb_41">
                    Lorem ipsum dolor sit amet consectetur. Donec amet mattis
                    sit fermentum. Cursus at sed commodo ac mattis feugiat vel
                    faucibus iaculis. Id congue egestas sit leo placerat. Ipsum
                    a feugiat massa fringilla justo consectetur. Eu euismod
                    viverra ut porttitor sed leo. Eget viverra etiam sit nunc.
                  </p>
                  <div className="team-ellipes ellipes_pos_2"></div>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex justify-content-center mt-28"
                data-aos="zoom-in"
              >
                <div className="our_team_card position-relative">
                  <div className=" d-flex  flex-sm-nowrap flex-wrap align-items-center gap-1">
                    <Image
                      src="/assets/images/team-7.png"
                      width={236}
                      height={198}
                      alt="domain"
                    />
                    <div>
                      <h4 className=" mb-0 fw-600 text-20 lh-24 text-white mt-2  d-flex align-items-center ">
                        Jordan Stratford
                        <span className=" fw-400 text-16 lh-192 btn_text_grident">
                          (Creative Director)
                        </span>
                      </h4>
                      <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7">
                        Jordan is an international best-selling author of the
                        Wollstonecraft Detective Agency series with Penguin
                        Random House, which was adapted to a mobile game for
                        iOS, Android, and Nintendo Switch, and is in development
                      </p>
                    </div>
                  </div>
                  <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7 mb-0 pt-2 pb-113">
                    for television with the world’s largest streaming producer.
                  </p>
                  <div className="team-ellipes ellipes_pos_2"></div>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex justify-content-center mt-28"
                data-aos="zoom-in"
              >
                <div className="our_team_card position-relative">
                  <div className=" d-flex  flex-sm-nowrap flex-wrap align-items-center gap-12">
                    <Image
                      src="/assets/images/team-8.png"
                      width={236}
                      height={198}
                      alt="domain"
                    />
                    <div>
                      <h4 className=" mb-0 fw-600 text-20 lh-24 text-white mt-2 d-flex align-items-center gap-2">
                        Jae Sik Choi
                        <span className=" fw-400 text-16 lh-192 btn_text_grident">
                          (Lorem Ipsum)
                        </span>
                      </h4>
                      <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7">
                        Early adopter of digital assets since 2011, founded
                        Garuda Crypto, The Cryptocurrency Fund Project and
                        Kalian Cryptocurrency Fund, along with being deeply
                        experienced in DeFi and dApps since 2019. Previously an
                        ex-NAB
                      </p>
                    </div>
                  </div>
                  <p className=" fw-400 ff-roboto text-16 lh-24  text-white opacity_7 mb-0 pt-2 pb-64">
                    Specialised Transaction Management Associate, experienced in
                    fixed income structured products, KYC/AML, FATCA and CRS
                    reporting. Holds a Master of Applied Finance from Monash
                    University.
                  </p>
                  <div className="team-ellipes ellipes_pos_2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
    </>
  );
}

export default Lavelup;
