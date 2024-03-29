import axios from "axios"
import React, { useEffect, useState } from "react"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

const TitleCard = () => {
  const [data, setData] = useState([])
  async function getData(url) {
    try {
      axios.get(url).then((res) => {
        setData(res.data.bitcoin)
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true&precision=2"
    )
  }, [])
  const usd_price = data.usd ? data.usd.toFixed(2) : 0
  const inr_price = data.inr ? data.inr.toFixed(0) : 0
  const perc = data.usd_24h_change ? data.usd_24h_change.toFixed(2) : 0

  const bgColorVariants = {
    red: "bg-red-200",
    green: "bg-green-200",
  }
  const textColorVariants = {
    red: "text-red-500",
    green: "text-green-600",
  }
  const up = perc > 0
  const green = "green"
  const red = "red"
  return (
    <div>
      <div className='block max-w-5xl p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-2'>
        <div className='flex items-center m-2 p-2'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2500'
              height='2500'
              viewBox='0.004 0 63.993 64'
              className='w-8 h-8'
            >
              <path
                d='M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z'
                fill='#f7931a'
              />
              <path
                d='M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z'
                fill='#fff'
              />
            </svg>
          </div>
          <div className='text-2xl font-semibold leading-none text-gray-900 m-1'>
            Bitcoin
          </div>
          <div className='ml-2 text-sm font-bold text-slate-400'>BTC</div>
          <div>
            <button
              type='button'
              className='text-white bg-gray-500 font-medium rounded-lg ml-6 text-sm px-2 py-2 me-2 mb-2'
            >
              Rank #1
            </button>
          </div>
        </div>
        <div className='mt-8 m-2 p-2'>
          <div className='flex gap-3'>
            <div className='text-3xl font-semibold leading-none text-gray-900 m-1'>
              {"$" + usd_price}
            </div>
            <div>
              <span
                className={
                  up
                    ? `${bgColorVariants[green]} ${textColorVariants[green]}`
                    : `${bgColorVariants[red]} ${textColorVariants[red]}`
                }
              >
                {up ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large' />}
                {perc + "%"}
              </span>
            </div>
            <div className='ml-2 text-sm text-slate-400'>(24H)</div>
          </div>
          <div className='leading-none font-semibold text-gray-900 m-2'>
            {"Rs " + inr_price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleCard
