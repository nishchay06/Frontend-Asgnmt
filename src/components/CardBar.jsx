import React from "react"
import CardBarItem from "./CardBarItem"
import LeftSliderBtn from "../LeftSliderBtn"
import RightSliderBtn from "./RightSliderBtn"

const CardBar = () => {
  const sliderId = Math.floor(Math.random() * 1000)
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
        <LeftSliderBtn slideLeft={slideLeft} />

        <div
          id={`slider` + sliderId}
          className='grid grid-flow-col overflow-x-scroll scroll-smooth scrollbar-hide'
        >
          <CardBarItem color='red' />
          <CardBarItem color='blue' />
          <CardBarItem color='green' />
          <CardBarItem color='yellow' />
          <CardBarItem color='pink' />
          <CardBarItem color='red' />
          <CardBarItem color='blue' />
          <CardBarItem color='green' />
          <CardBarItem color='yellow' />
          <CardBarItem color='pink' />
        </div>
        <RightSliderBtn slideRight={slideRight} />
      </div>
    </>
  )
}

export default CardBar
