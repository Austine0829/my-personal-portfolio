import { useState, useEffect } from 'react'
import Profile from './components/Profile'
import Header from "./components/Header"
import RecentActivities from './components/RecentActivities'
import TechlogiesMarquee from './components/TechnologiesMarquee'
import GithubStats from './components/GithubStats'
import InterestMarquee from './components/InteresetMarquee'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
        <div className="grid grid-cols-12 gap-4 h-full w-full p-4 lg:flex lg:max-h-[768px] lg:max-w-[1920px]">
          <div className='flex flex-col gap-1 col-span-12 overflow-y-auto no-scrollbar'>
            <Header />
            <Profile />
            <TechlogiesMarquee />
            <GithubStats />
            <InterestMarquee />
          </div>
          <div className='flex flex-col gap-1 h-full w-full col-span-12'>
            <div className='flex gap-1 border border-gray-300 bg-white p-1 rounded-lg'>
              <button className='bg-gray-200 p-2 px-3 text-[13px] font-bold rounded-lg'>Projects</button>
              <button className='bg-gray-200 p-2 px-3 text-[13px] font-bold rounded-lg'>Connect</button>
            </div>
            <div className='flex flex-col h-screen overflow-y-auto w-fit no-scrollbar '>
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
