import React from 'react'
import './Home.css'
import { RightBar } from '../../components/rightbar/RightBar'
import { SideBar } from '../../components/sidebar/SideBar'
import { TimeLine } from '../../components/timeline/TimeLine'
import { TopBar } from '../../components/topbar/TopBar'

export const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <TimeLine />
        <RightBar />
      </div>
    </>
  )
}
