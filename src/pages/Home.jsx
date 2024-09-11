
import { Hero } from '../components/Hero'
import Features from '../components/Features'
import { OurServices } from '../components/OurServices'
import Team from '../components/Team'
import About from '../components/About'
import LastNews from '../components/LastNews'
export const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        
        <OurServices/>
        <LastNews/>
        <Team/>
    </div>
  )
}
