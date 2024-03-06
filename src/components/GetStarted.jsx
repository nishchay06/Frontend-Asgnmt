import GettingStartedVector from "./GettingStartedVector"

export default function GetStarted() {
  return (
    <div class='text-white bg-blue-700 w-full max-w-sm border border-gray-200 rounded-lg shadow'>
      <div class='flex flex-col items-center pb-5 px-5 text-center'>
        <div class='text-xl font-bold max-w-72 p-2 m-2'>
          Get Started with KoinX for FREE
        </div>
        <div class='text-md max-w-96 p-1 m-2'>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of you tax reports.
        </div>
        <div className='p-1 m-2'>
          <GettingStartedVector />
        </div>
        <div class='flex items-center justify-between p-1 m-2'>
          <button
            type='button'
            class='text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
          >
            <div className='flex items-center'>
              Get Started for FREE
              <div className='pl-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3 '
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
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
