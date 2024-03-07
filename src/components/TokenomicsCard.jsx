import React from "react"
import DonutChartWidget from "./DonutChartWidget"

const MemoizedDonutChartWidget = React.memo(DonutChartWidget);


const TokenomicsCard = () => {
  return (
    <div className='block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
      <div>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
          Noteworthy technology acquisitions 2021
        </h5>
      </div>
      <div>
        <h5 className='mb-2 text-xl font-semibold tracking-tight text-gray-900 '>
          Initial Distribution
        </h5>
        <div>
          <MemoizedDonutChartWidget />
        </div>
        <p className='font-normal text-gray-700 '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  )
}

export default TokenomicsCard
