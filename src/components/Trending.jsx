export default function Trending() {
  return (
    <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-gray-900 '>
          Trending Coins(24h)
        </h5>
      </div>
      <div className='flow-root'>
        <ul role='list' className='divide-y divide-gray-200 '>
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='/docs/images/people/profile-picture-1.jpg'
                  alt='Neil image'
                />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate'>
                  Neil Sims
                </p>
              </div>
              <div className='inline-flex items-center text-base font-semibold'>
                $320
              </div>
            </div>
          </li>
          <li className='py-3 sm:py-4'>
            <div className='flex items-center '>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='/docs/images/people/profile-picture-3.jpg'
                  alt='Bonnie image'
                />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate'>
                  Bonnie Green
                </p>
              </div>
              <div className='inline-flex items-center text-base font-semibold text-gray-900 '>
                $3467
              </div>
            </div>
          </li>
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='/docs/images/people/profile-picture-2.jpg'
                  alt='Michael image'
                />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate'>
                  Michael Gough
                </p>
              </div>
              <div className='inline-flex items-center text-base font-semibold text-gray-900 '>
                $67
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
