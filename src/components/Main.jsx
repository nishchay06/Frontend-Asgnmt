import AboutCard from "./AboutCard"
import BreadCrumbWidget from "./BreadCrumbWidget"
import GraphCard from "./GraphCard"
import PerformanceCard from "./PerformanceCard"
import RightBar from "./RightBar"
import SentimentCard from "./SentimentCard"
import TabWidget from "./TabWidget"
import TeamCard from "./TeamCard"
import TokenomicsCard from "./TokenomicsCard"
import TitleCard from "./TitleCard"

export default function Main() {
  return (
    <div className='bg-slate-100 '>
      <div className='p-3'>
        <BreadCrumbWidget />
      </div>
      <div className='flex flex-wrap justify-center'>
        <div className='md:w-2/3 md:flex md:justify-center'>
          <div>
            <div className='m-3'>
              <TitleCard />
            </div>
            <div className='mx-5'>
              <GraphCard />
            </div>
            <div className='m-3'>
              <TabWidget />
            </div>
            <div className='m-3'>
              <PerformanceCard />
            </div>
            <div className='m-3'>
              <SentimentCard />
            </div>
            <div className='m-3'>
              <AboutCard />
            </div>
            <div className='hidden md:block md:m-3'>
              <TokenomicsCard />
            </div>
            <div className='m-3'>
              <TeamCard />
            </div>
          </div>
        </div>
        <div className='md:w-1/3 md:flex md:justify-center'>
          <RightBar />
        </div>
      </div>
    </div>
  )
}
