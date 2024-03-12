export default function Card() {
  return (
    <div className='m-1 p-2'>
      <div className='flex flex-col items-center bg-blue-100 border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-blue-200 '>
        <div className='md:h-auto md:w-48 '>
          <div className='max-w-[80px] max-h-[120px] m-2'>
            <img
              className='object-cover rounded-lg '
              src='/CTA1_Img.png'
              alt=''
            />
          </div>
          <div className='text-center'>
            <div>John Smith</div>
            <div className='text-xs text-slate-600 text-center'>
              Designation here
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <div>
            <p className='mb-3 font-normal text-gray-700 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
