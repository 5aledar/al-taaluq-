
import { Hero } from '../components/Hero'
import Features from '../components/Features'
import { OurServices } from '../components/OurServices'
import Team from '../components/Team'
import TestomonialContainer from '../containers/TestomonialContainer'

export const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <OurServices />
        <OurServices/>
        <Team/>
        <TestomonialContainer />
        <OurServices/>
    </div>
  )
}
