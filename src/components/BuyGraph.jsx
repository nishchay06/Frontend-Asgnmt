import React from "react"

const BuyGraph = () => {
  return (
    <div className='flex'>
      <div className='w-[150px] h-[150px] leading-[150px] text-[30px] bg-green-100 text-green-500 text-center rounded-full mx-10 my-10 font-semibold'>
        76%
      </div>
      <div className='flex flex-col justify-center gap-5'>
        <div className='flex gap-5'>
          <div className=' text-gray-500 w-10 text-center'>Buy</div>
          <div className='w-[228px] h-2 rounded-md bg-green-400 self-center'></div>
          <div className=' text-gray-500 w-10 text-center'>76%</div>
        </div>
        <div className='flex gap-5'>
          <div className=' text-gray-500 w-10 text-center'>Hold</div>
          <div className='w-[24px] h-2 rounded-md bg-gray-300 self-center'></div>
          <div className=' text-gray-500 w-10 text-center'>8%</div>
        </div>
        <div className='flex gap-5'>
          <div className=' text-gray-500 w-10 text-center'>Sell</div>
          <div className='w-[48px] h-2 rounded-md bg-red-600 self-center'></div>
          <div className=' text-gray-500 w-10 text-center'>16%</div>
        </div>
      </div>
    </div>
  )
}

export default BuyGraph
