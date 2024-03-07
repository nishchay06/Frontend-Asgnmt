import GettingStartedVector from "./GettingStartedVector"

export default function GetStarted() {
  return (
    <div className='text-white bg-blue-700 w-full max-w-md border border-gray-200 rounded-lg shadow'>
      <div className='flex flex-col items-center pb-5 px-5 text-center'>
        <div className='text-xl font-bold max-w-72 p-2 m-2'>
          Get Started with KoinX for FREE
        </div>
        <div className='text-md max-w-96 p-1 m-2'>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of you tax reports.
        </div>
        <div className='p-1 m-2'>
          <GettingStartedVector />
        </div>
        <div className='flex items-center justify-between p-1 m-2'>
          <button
            type='button'
            className='text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
          >
            <div className='flex items-center'>
              Get Started for FREE
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
