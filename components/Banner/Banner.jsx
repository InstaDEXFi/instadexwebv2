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
            </div>
            <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="0"
                />
              </div>
              <h4 className="title">
                0% target raised <span>1 USDT - 0.00044 ETH = 45 $IDEX Tokens</span> <span>5M $IDEX Tokens for ICO</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">ICO Will Start In..</h2>

              <CountDownOne />
            </div>
          </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
          </div>
        </div>
    </section>
  );
};

export default Banner;
