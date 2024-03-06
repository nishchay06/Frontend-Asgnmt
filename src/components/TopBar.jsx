export default function TopBar() {
  return (
    <div>
      <nav className='w-full top-0 bg-white z-10'>
        <div className='container mx-auto py-5 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center space-x-3 rtl:space-x-reverse'>
              <img
                src='https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg'
                className='h-15'
                alt='KoinX Logo'
              />
            </div>
          </div>
          <ul className='hidden md:flex items-center space-x-10 text-gray-600  font-bold text-sm uppercase'>
            <li className='hover:text-gray-500'>
              <a href='#'>Crypto</a>
            </li>
            <li className='hover:text-gray-500'>
              <a href='#'>Free Tools</a>
            </li>
            <li className='hover:text-gray-500'>
              <a href='#'>Resource Center</a>
            </li>
            <li>
              <button
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
              >
                Get Started
              </button>
            </li>
          </ul>

          <div id='hamburger' className='space-y-1 md:hidden cursor-pointer z-20'>
            <div className='w-6 h-0.5 bg-black'></div>
            <div className='w-6 h-0.5 bg-black'></div>
            <div className='w-6 h-0.5 bg-black'></div>
          </div>
          <ul
            id='menu'
            className='hidden absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-gray-600 font-bold text-sm uppercase text-center'
          >
            <li>
              <a id='hLink' href='#'>
                Crypto
              </a>
            </li>
            <li>
              <a id='hLink' href='#about'>
                Free Tools
              </a>
            </li>
            <li>
              <a id='hLink' href='#services'>
                Resource Center
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
