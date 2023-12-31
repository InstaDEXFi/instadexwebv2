import React from "react";

const TopPartners = () => {
  
  return (
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">As seen on</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                  <li key="dexview">
                    <a href="https://www.dexview.com/">
                    <img src="/img/partner/dexvie.png" alt="dexview" />
                    </a>
                  </li>
                  <li key="coinscope">
                    <a href="https://www.coinscope.co/coin/idex">
                    <img src="/img/partner/coinscope.png"alt="" />
                    </a>
                  </li>
                  <li key="cyberscope">
                    <a href="https://www.cyberscope.io/audits/idex">
                    <img src="/img/partner/cyberscope.png" alt="cyberscope" />
                    </a>
                  </li>
                  <li key="etherscan">
                    <a href="https://etherscan.io/token/0xd5a9d3396da7472551561f0e872e677ca2227a6b">
                    <img src="/img/partner/etherscan.png"alt="etherscan" />
                    </a>
                  </li>
                  <li key="gemsradar">
                    <a href="https://gemsradar.com/coins/instadex">
                    <img src="/img/partner/gems.png"alt="gemsradar" />
                    </a>
                    </li>
                  <li key="poolzboost">
                    <a href="https://www.poolz.finance/boost/62">
                    <img src="/img/partner/poolz.png"alt="poolzboost" />
                    </a>
                    </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Built on</span>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                  <li key="">
                    <img src="/img/partner/arbitrum.svg" alt="" />
                  </li>
                  <li key="coinscope">
                    <img src="/img/partner/optimism.svg"alt="" />
                  </li>
                  <li key="">
                    <img src="/img/partner/ethereum.png" alt="" />
                  </li>
                  <li key="">
                    <img src="/img/partner/polygon.svg" alt="" />
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-8">
      <div className="section-title text-center mb-10">
        <span className="sub-title">powered by</span>
      </div>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-lg-12">
      <div className="partner-wrap">
        <ul>
          <li key="">
            <img src="/img/partner/chainlink.svg" alt="" />
          </li>
          <li key="coinscope">
            <img src="/img/partner/uniswap.svg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Offical partners</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                  <li key="">
                    <a href="https://www.pinksale.finance/launchpad/0x9863F54b8a85101B4E8eBDc5101c70C41206008f?chain=ETH">
                    <img src="/img/partner/pinksale.png" alt="" />
                    </a>
                  </li>
                  <li key="coinscope">
                    <a href="https://aimalls.app/">
                    <img src="/img/partner/aimails.png"alt="" />
                    </a>
                  </li>
                  <li key="">
                    <a href="https://gotbit.io/">
                    <img src="/img/partner/gotbit.svg" alt="" />
                    </a>
                  </li>
                  <li key="">
                    <a href="https://www.fleamint.com/">
                    <img src="/img/partner/fleamint.png" alt="" />
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default TopPartners;
