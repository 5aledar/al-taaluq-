import React from 'react'
import { Hero } from '../components/Hero'
import Features from '../components/Features'
import { OurServices } from '../components/OurServices'

export const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <OurServices/>
    </div>
  )
}
