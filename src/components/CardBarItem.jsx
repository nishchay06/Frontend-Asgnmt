import React from "react"

const CardBarItem = ({ color }) => {
  const colorVariants = {
    blue: "bg-blue-300",
    red: "bg-red-300 ",
    yellow: "bg-yellow-200",
    pink: "bg-pink-200",
    green: "bg-green-200",
  }
  const bgColorVariants = {
    blue: "bg-blue-600",
    red: "bg-red-600 ",
    yellow: "bg-yellow-600",
    pink: "bg-pink-600",
    green: "bg-green-600",
  }
  const iconVariants = {
    yellow: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        fill='currentColor'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.867 19.125h.008v.008h-.008v-.008Z'
        />
      </svg>
    ),
    red: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        fill='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        />
      </svg>
    ),
    blue: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-6 h-6'
      >
        <path
          fill-rule='evenodd'
          d='M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z'
          clip-rule='evenodd'
        />
        <path d='M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z' />
      </svg>
    ),
    pink: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        fill='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z'
        />
      </svg>
    ),
    green: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        fill='currentColor'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
        />
      </svg>
    ),
  }
  return (
    <div
      className={`${colorVariants[color]} w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  rounded-lg cursor-pointer m-2 p-3 shadow-md`}
    >
      <div className='flex'>
        <div
          className={`${bgColorVariants[color]} text-white rounded-full p-2 m-1 h-10`}
        >
          <div> {iconVariants[color]}</div>
        </div>
        <div>
          <div className='text-sm font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className='text-sm '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  )
}

//

export default CardBarItem
