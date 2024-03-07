import React from "react"
import FundamentalCardItem from "./FundamentalCardItem"

const FundamentalCard = () => {
  return (
    <div className='w-full flow-root p-5'>
      <ul role='list' className='divide-y '>
        <li className='py-3 sm:py-4'>
          <FundamentalCardItem />
        </li>
        <li className='py-3 sm:py-4'>
          <FundamentalCardItem />
        </li>
        <li className='py-3 sm:py-4'>
          <FundamentalCardItem />
        </li>
        <li className='py-3 sm:py-4'>
          <FundamentalCardItem />
        </li>
        <li className='py-3 sm:py-4'>
          <FundamentalCardItem />
        </li>
      </ul>
    </div>
  )
}

export default FundamentalCard
