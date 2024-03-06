import React from "react";
import TradingViewWidget from "./TradingViewWidget";

const MemoizedTradingViewWidget = React.memo(TradingViewWidget);

const GraphCard = () => {
  return (
    <div>
      <MemoizedTradingViewWidget />
    </div>
  );
};

export default GraphCard;
