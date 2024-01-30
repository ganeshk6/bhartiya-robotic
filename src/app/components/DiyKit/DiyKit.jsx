import React from 'react'
import Style from './DiyKit.module.css'
import DiyKitCard from './DiyKitCard'
import dk1 from '../assets/images/logoImage.svg'
import dk2 from '../assets/images/f2-1@2x.png'
import dk3 from '../assets/images/f3-1@2x.png'
import dk4 from '../assets/images/f4-1@2x.png'
import dk5 from '../assets/images/f5-1@2x.png'
import dk6 from '../assets/images/f6-1@2x.png'
import dk7 from '../assets/images/f7-1@2x.png'
import dk8 from '../assets/images/f8-1@2x.png'

const DiyKit = () => {
  return (
    <>
    <div id="kits" className={Style.Kits}>
        <h1>Features of Our DIY Kit</h1>
        <div className={Style.KitsCard}>
          <DiyKitCard src={dk1} dec="Quality Materials" />
          <DiyKitCard src={dk2} dec="Educational Value" />
          <DiyKitCard src={dk3} dec="Get Ready For future" />
          <DiyKitCard src={dk4} dec="Easy to Understand" />
          <DiyKitCard src={dk5} dec="Instructions Manual" />
          <DiyKitCard src={dk6} dec="On Industry Standards" />
          <DiyKitCard src={dk7} dec="Support and Community" />
          <DiyKitCard src={dk8} dec="Video Explaination" />
        </div>
      </div>
    </>
  )
}

export default DiyKit