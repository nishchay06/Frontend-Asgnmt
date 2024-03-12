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
      <div className='px-7 py-5'>
        <BreadCrumbWidget />
      </div>
      <div className='flex flex-wrap justify-center'>
        <div className='md:w-2/3 md:flex md:justify-center'>
          <div className='flex flex-col items-center w-full'>
            <div className='m-3 w-4/5'>
              <TitleCard />
            </div>
            <div className='mx-5 w-4/5'>
              <GraphCard />
            </div>
            <div className='m-3 w-auto'>
              <TabWidget />
            </div>
            <div className='m-3 w-4/5'>
              <PerformanceCard />
            </div>
            <div className='m-3 w-4/5'>
              <SentimentCard />
            </div>
            <div className='m-3 w-4/5'>
              <AboutCard />
            </div>
            <div className='hidden md:block md:m-3 w-4/5'>
              <TokenomicsCard />
            </div>
            <div className='m-3 w-4/5'>
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
