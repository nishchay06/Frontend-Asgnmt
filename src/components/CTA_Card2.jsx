import React from "react"

const CTA_Card2 = () => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-br from-orange-400 to-red-600 border rounded-lg shadow md:flex-row md:max-w-xl'>
      <div className='max-w-[120px] max-h-[120px] m-2 p-2'>
        <img
          className='object-cover rounded-lg '
          src='../src/assets/CTA2_Img.png'
          alt=''
        />
      </div>
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-xl font-semibold tracking-tight text-slate-50 '>
          Calculate your Tax Liability
        </h5>
        <div>
          <button
            type='button'
            className='text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
          >
            <div className='flex items-center'>
              Check Now
              <div className='pl-1'>
                <svg
                  width='15'
                  height='12'
                  viewBox='0 0 15 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-3 h-3'
                >
                  <path
                    d='M13.9583 5.9952L1.45834 5.9952'
                    stroke='#0F1629'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M8.91684 0.974793L13.9585 5.99479L8.91684 11.0156'
                    stroke='#0F1629'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA_Card2
