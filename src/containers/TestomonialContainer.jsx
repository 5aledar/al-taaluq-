import React , {useState} from 'react'
import Testemonial from '../components/Testemonial'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// import { motion } from 'framer-motion';
// import './TestomonialContainer.scss';
const TestomonialContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (index) => {
        setCurrentIndex(index);
      };
    const testimonials = [
        {
            name:'sarah dayan',
            company: 'google',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia, magnam eaque libero exercitationem quaerat. Quidem incidunt quod ratione inventore, esse voluptatem repudiandae odit. Itaque dolorem quaerat sint aliquid mollitia.'
        },
        {
            name:'sarah ss',
            company: 'google',
            text:'Tailwind CSS is the only framework that Ive seen scale on large teams. Its easy to customize, adapts to any design, and the build size is tiny.'
        },
        {
            name:'sarah sssssss',
            company: 'google',
            text:'Tailwind CSS is the only framework that Ive seen scale on large teams. Its easy to customize, adapts to any design, and the build size is tiny.'
        }
    ]
  return (

    <div className='my-5'>
      {testimonials.length && (
        <div>
          <Testemonial name={testimonials[currentIndex].name} comapny={testimonials[currentIndex].company} text={testimonials[currentIndex].text} />

          <div className="flex justify-center gap-3 items-center">
            <div className="w-20 h-20 " onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft className='m-auto size-14' />
            </div>

            <div className="w-20 h-20" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight className='m-auto size-14'/>
            </div>
          </div>
        </div>
      )}
 
    </div>
  )
}

export default TestomonialContainer
