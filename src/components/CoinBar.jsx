import React, { useEffect, useState } from "react"
import CoinCard from "./CoinCard"
import axios from "axios"

const CoinBar = () => {
  const [coins, setCoins] = useState([])
  const sliderId = Math.floor(Math.random() * 1000)
  const path = "https://api.coingecko.com/api/v3/search/trending"
  const getData = async (url) => {
    try {
      axios.get(url).then((res) => {
        setCoins(res.data.coins)
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData(path)
  }, [])
  const slideLeft = () => {
    const slider = document.getElementById("slider" + sliderId)
    slider.scrollLeft -= 400
  }
  const slideRight = () => {
    const slider = document.getElementById("slider" + sliderId)
    slider.scrollLeft += 400
  }
  return (
    <>
      <div className='relative flex items-center'>
        <div
          onClick={slideLeft}
          className='bg-white w-6 h-6 rounded-full absolute left-1 shadow shadow-slate-600 text-gray-700 z-10 cursor-pointer opacity-80'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5 8.25 12l7.5-7.5'
            />
          </svg>
        </div>

        <div
          id={`slider` + sliderId}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {coins.map((coin, index) => (
            <CoinCard key={coin.item.coin_id} coin={coin} />
          ))}
        </div>
        <div
          onClick={slideRight}
          className='bg-white w-6 h-6 rounded-full absolute right-1 shadow shadow-slate-600 text-gray-700 z-10 cursor-pointer opacity-80'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m8.25 4.5 7.5 7.5-7.5 7.5'
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default CoinBar
