import AboutCard from "./AboutCard"
import BreadCrumbWidget from "./BreadCrumbWidget"
import GraphCard from "./GraphCard"
import PerformanceCard from "./PerformanceCard"
import RightBar from "./RightBar"
import SentimentCard from "./SentimentCard"
import TabWidget from "./TabWidget"
import TeamCard from "./TeamCard"
import TokenomicsCard from "./TokenomicsCard"

export default function Main() {
  return (
    <div className='bg-slate-100 '>
      <div className='p-3'>
        <BreadCrumbWidget />
      </div>
      <div className='flex flex-wrap justify-center'>
        <div className='md:w-2/3 md:flex md:justify-center'>
          <div>
            <GraphCard />
            <div className='mt-3 mb-5'>
              <TabWidget />
            </div>
            <div className='mt-3 mb-5'>
              <PerformanceCard />
            </div>
            <div className='mt-3 mb-5'>
              <SentimentCard />
            </div>
            <div className='mt-3 mb-5'>
              <AboutCard />
            </div>
            <div className='hidden md:block md:mt-3 md:mb-5'>
              <TokenomicsCard />
            </div>
            <div className='mt-3 mb-5'>
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
