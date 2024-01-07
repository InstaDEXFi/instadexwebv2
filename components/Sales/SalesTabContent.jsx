import React from "react";
import Link from "next/link";
import cn from "classnames";

const SalesTabContent = (props) => {
  return (
    <div
      className={cn("tab-pane fade", props.className)}
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.ariaLabel}
    >
      <div className="chart-content-inner">
        <h2 className="title">{props.title}</h2>
        <p>{props.description}</p>
        <Link href="https://www.pinksale.finance/launchpad/0x9863F54b8a85101B4E8eBDc5101c70C41206008f?chain=ETH" className="btn">
          Buy Now On PinkSale
        </Link>
      </div>
    </div>
  );
};

export default SalesTabContent;
