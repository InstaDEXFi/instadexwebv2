import React from "react";
import CountDownOne from "../CountDown/CountDownOne";

const Banner = () => {
  return (
    <section className="banner-area banner-bg">
            <div className="banner-shape-wrap">
        <img
          src={"/img/banner/banner_shape01.png"}
          alt=""
          className="img-one"
        />
        <img
          src={"/img/banner/banner_shape02.png"}
          alt=""
          className="img-two"
        />
        <img
          src={"/img/banner/banner_shape03.png"}
          alt=""
          className="img-three"
        />
      </div>
            <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
            <h1 className="title">
              <span>InstaDEX Protocol</span>
              </h1>
              <h2 className="">
              Makes DEX trading simple, accessible, and affordable on <span>Ethereum</span> L1 and L2’s.
              </h2>
              <h2 className="">
              CA COMING SOON
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
