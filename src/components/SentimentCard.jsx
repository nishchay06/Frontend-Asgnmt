import React from "react"
import CardBar from "./CardBar"
import BuyGraph from "./BuyGraph"

const SentimentCard = () => {
  return (
    <div>
      <div className='block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
        <div>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-800 '>
            Sentiment
          </h5>
        </div>
        <div className=' my-4'>
          <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-800 flex'>
            Key Events
            <div className='flex justify-center items-center p-1 text-slate-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </h5>
          <CardBar />
        </div>
        <div className=' my-4'>
          <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-800 flex'>
            Analyst Estimates
            <div className='flex justify-center items-center p-1 text-slate-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </h5>
          <div>
            <BuyGraph />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SentimentCard
