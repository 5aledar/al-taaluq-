import About from '../components/About'
import { Hero } from '../components/Hero'
import Features from '../components/Features'
import { OurServices } from '../components/OurServices'
import Team from '../components/Team'
import TestomonialContainer from '../containers/TestomonialContainer'
import { OurActivities } from '../components/OurActivities'

import LastNews from '../components/LastNews'
export const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <About/>
        <OurServices/>
        <LastNews/>
        <Team/>
        <TestomonialContainer />
        <OurActivities/>
    </div>
  )
}
