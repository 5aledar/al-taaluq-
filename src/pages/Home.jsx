import About from '../components/About'
import { Hero } from '../components/Hero'
import Features from '../components/Features'
import { OurServices } from '../components/OurServices'
import Team from '../components/Team'
import { OurActivities } from '../components/OurActivities'

export const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <About/>
        <OurServices/>
        <OurActivities/>
        <Team/>
    </div>
  )
}
