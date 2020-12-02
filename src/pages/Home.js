import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Info/Data'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Info {...homeObjThree}/>
      
    </div>
  )
}

export default Home
