import React from "react"

const TrendingItem = ({ coin }) => {
  return (
    <div>
      <li className='py-3 sm:py-4'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <img
              className='w-8 h-8 rounded-full'
              src={coin.item.small}
              alt='Neil image'
            />
          </div>
          <div className='flex-1 min-w-0 ms-4'>
            <p className='text-sm font-medium text-gray-900 truncate'>
              {coin.item.name}
            </p>
          </div>
          <div className='inline-flex items-center text-base font-semibold'>
            {"$" + parseFloat(coin.item.data.price.slice(1)).toFixed(2)}
          </div>
        </div>
      </li>
    </div>
  )
}

export default TrendingItem
