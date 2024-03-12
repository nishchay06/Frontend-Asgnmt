import React from "react"

const CoinCard = ({ coin }) => {
  const bgColorVariants = {
    red: "bg-red-200",
    green: "bg-green-200",
  }
  const textColorVariants = {
    red: "text-red-500",
    green: "text-green-600",
  }
  const up = coin.item.data.price_change_percentage_24h.usd > 0
  const green = "green"
  const red = "red"
  return (
    <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2 outline outline-offset-2 outline-slate-200 p-3 shadow-md'>
      <div className='flex m-2 p-1'>
        <img
          className='w-8 h-8 block object-cover rounded-full object-center m-1'
          src={coin.item.small}
        />
        <div className='m-1'>{coin.item.symbol}</div>
        <div className='m-1 text-sm'>
          <span
            className={
              up
                ? `${bgColorVariants[green]} ${textColorVariants[green]}`
                : `${bgColorVariants[red]} ${textColorVariants[red]}`
            }
          >
            {parseFloat(coin.item.data.price_change_percentage_24h.usd).toFixed(
              2
            ) + "%"}
          </span>
        </div>
      </div>
      <div className='pl-5'>
        {"$" + parseFloat(coin.item.data.price.slice(1)).toFixed(2)}
      </div>
      <div className='flex justify-center'>
        <img src={coin.item.data.sparkline} />
      </div>
    </div>
  )
}

export default CoinCard
