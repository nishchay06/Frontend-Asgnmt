import React from "react"

const FundamentalCardItem = () => {
  return (
      <div className='flex items-center'>
        <div className='flex-1 min-w-0'>
          <p className='text-sm font-medium text-gray-900 truncate'>
            Bitcoin Price
          </p>
        </div>
        <div className='inline-flex items-center text-base font-semibold'>
          $16,815.46
        </div>
      </div>
  )
}

export default FundamentalCardItem
