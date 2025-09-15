import { useState, useEffect } from 'react'
import Profile from "../src/components/profile/Profile"
import Header from "./sections/header/Header"
import TechlogiesMarquee from '../src/components/technologies/TechnologiesMarquee'
import GithubStats from './sections/github_stats/GithubStats'
import InterestMarquee from './sections/interest/InteresetMarquee'
import Panel from './sections/dynamic_panel/panel'

function App() {


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
            <Panel />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
