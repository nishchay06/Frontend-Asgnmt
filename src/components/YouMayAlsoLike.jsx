import React from "react"
import CoinBar from "./CoinBar"

const YouMayAlsoLike = () => {
  return (
    <div className=''>
      <div className='p-5'>
        <h5 className='text-xl font-bold leading-none text-gray-900 mb-5'>
          You May Also Like
        </h5>
        <CoinBar />
      </div>
      <div className='mb-4 p-5'>
        <h5 className='text-xl font-bold leading-none text-gray-900 mb-5'>
          Trending Coins
        </h5>
        <CoinBar />
      </div>
    </div>
  )
}

export default YouMayAlsoLike
