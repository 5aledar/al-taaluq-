import React , {useState} from 'react'
import Testemonial from '../components/Testemonial'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useTranslation } from "react-i18next";

// import { motion } from 'framer-motion';
// import './TestomonialContainer.scss';
const TestomonialContainer = () => {
  const {t,i18n} = useTranslation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (index) => {
        setCurrentIndex(index);
      };
    const testimonials = [
        {
            name:t("testimonialSec.name1"),
            company: t("testimonialSec.company1"),
            text: t("testimonialSec.text1"),
        },
        {
          name:t("testimonialSec.name2"),
          company: t("testimonialSec.company2"),
          text: t("testimonialSec.text2"),
      },
      {
        name:t("testimonialSec.name3"),
        company: t("testimonialSec.company3"),
        text: t("testimonialSec.text3"),
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
