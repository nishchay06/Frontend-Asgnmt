import React from "react"

const TabWidget = () => {
  return (
    <>
      <div class='text-sm font-medium text-center text-gray-500 border-b border-gray-200 '>
        <ul class='flex flex-wrap -mb-px'>
          <li class='me-2'>
            <a
              href='#'
              class='inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active '
              aria-current='page'
            >
              Overview
            </a>
          </li>
          <li class='me-2'>
            <a
              href='#'
              class='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            >
              Fundamentals
            </a>
          </li>

          <li class='me-2'>
            <a
              href='#'
              class='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            >
              News Insights
            </a>
          </li>
          <li class='me-2'>
            <a
              href='#'
              class='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            >
              Sentiments
            </a>
          </li>
          <li class='me-2'>
            <a
              href='#'
              class='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            >
              Team
            </a>
          </li>
          <li class='me-2'>
            <a
              href='#'
              class='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
            >
              Technicals
            </a>
          </li>
          <li class='me-2'>
            <a
              href='#'
              class='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
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
