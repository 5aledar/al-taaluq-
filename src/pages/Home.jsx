
import { Hero } from '../components/Hero'
import Features from '../components/Features'
import { OurServices } from '../components/OurServices'
import Team from '../components/Team'

export const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <OurServices/>
        <Team/>
        <OurServices/>
    </div>
  )
}
