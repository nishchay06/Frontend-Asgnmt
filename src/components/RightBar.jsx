import GetStarted from "./GetStarted"
import Trending from "./Trending"

export default function RightBar() {
  return (
    <div>
      <div className='m-3'>
        <GetStarted />
      </div>
      <div className='m-3'>
        <Trending />
      </div>
    </div>
  )
}
