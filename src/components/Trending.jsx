import React, { useEffect, useState } from "react"
import axios from "axios"
import TrendingItem from "./TrendingItem"

export default function Trending() {
  const [coins, setCoins] = useState([])
  const sliderId = Math.floor(Math.random() * 1000)
  const path = "https://api.coingecko.com/api/v3/search/trending"
  const getData = async (url) => {
    try {
      axios.get(url).then((res) => {
        setCoins(res.data.coins.slice(0, 3))
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData(path)
  }, [])
  return (
    <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-gray-900 '>
          Trending Coins(24h)
        </h5>
      </div>
      <div className='flow-root'>
        <ul role='list' className='divide-y divide-gray-200 '>
          {coins.map((coin) => (
            <TrendingItem key={coin.item.coin_id} coin={coin} />
          ))}
        </ul>
      </div>
    </div>
  )
}
