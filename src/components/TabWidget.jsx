import React from "react"

const TabWidget = () => {
  return (
    <>
      <div className='text-sm w-full font-medium text-center text-gray-500 border-b border-gray-200'>
        <ul className='flex overflow-x-scroll whitespace-nowrap -mb-px scrollbar-hide'>
          <li className='me-2'>
            <a
              href='#'
              className='inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active'
              aria-current='page'
            >
              Overview
            </a>
          </li>
          <li className='me-2'>
            <a
              href='#'
              className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            >
              Fundamentals
            </a>
          </li>

          <li className='me-2'>
            <a
              href='#'
              className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            >
              News Insights
            </a>
          </li>
          <li className='me-2'>
            <a
              href='#'
              className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            >
              Sentiments
            </a>
          </li>
          <li className='me-2'>
            <a
              href='#'
              className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            >
              Team
            </a>
          </li>
          <li className='me-2'>
            <a
              href='#'
              className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            >
              Technicals
            </a>
          </li>
          <li className='me-2'>
            <a
              href='#'
              className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            >
              Tokenomics
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default TabWidget
