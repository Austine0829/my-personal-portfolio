import { useState } from 'react'
import Profile from './components/Profile'
import Header from "./components/Header"
import RecentActivities from './components/RecentActivities'
import TechlogiesMarquee from './components/TechnologiesMarquee'
import GithubStats from './components/GithubStats'
import InterestMarquee from './components/InteresetMarquee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-12 gap-2 m-4'>
        <div className='grid grid-cols-12 gap-1 p-1 col-span-12 md:pb-7 md:max-h-screen md:col-span-7 md:overflow-y-auto no-scrollbar'>
          <div className='col-span-12'>
            <Header />
          </div>
          <div className='col-span-12 xl:col-span-7'>
            <Profile />
          </div>
          <div className='col-span-12 xl:col-span-5'>
            <RecentActivities />
          </div>
          <div className='col-span-12'>
            <TechlogiesMarquee />
          </div>
          <div className='col-span-12'>
            <GithubStats />
          </div>
          <div className='col-span-12'>
            <InterestMarquee />
          </div>
        </div>

        <div className='border p-1 col-span-12 md:col-span-5'>
          <h1>Hello <i className='si si-github'></i></h1>
        </div>
      </div>
    </>
  )
}

export default App
