import React, { useEffect, useState } from "react"
export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <nav className='border-gray-200 bg-gray-50 '>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <div className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap '>
              Flowbite
            </span>
          </div>
          <button
            data-collapse-toggle='navbar-hamburger'
            type='button'
            className='inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
            aria-controls='navbar-hamburger'
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div
            className={isMenuOpen ? "block w-full" : "hidden w-full"}
            id='navbar-hamburger'
          >
            <ul className='flex flex-col font-medium mt-4 rounded-lg bg-gray-50 '>
              <li>
                <a
                  href='#'
                  className='block py-2 px-3 text-white bg-blue-700 rounded '
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 '
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 '
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
