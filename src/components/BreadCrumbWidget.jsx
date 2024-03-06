import React from "react"

const BreadCrumbWidget = () => {
  return (
    <div>
      <nav class='flex' aria-label='Breadcrumb'>
        <ol class='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
          <li class='inline-flex items-center'>
            <a
              href='#'
              class='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600'
            >
              Cryptocurrencies
            </a>
          </li>
          <li>
            <div class='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5'
                />
              </svg>

              <a
                href='#'
                class='ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 '
              >
                Bitcoin
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default BreadCrumbWidget
