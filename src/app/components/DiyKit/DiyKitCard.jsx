import React from 'react'
import Style from './DiyKit.module.css'
import Image from 'next/image'

const DiyKitCard = ({src, dec}) => {
  return (
    <>
    <div className={Style.kitsImage}>
        <div>
          <Image
            src={src}
            className={Style.image}
            alt="src"
          />
        </div>
        <div className={Style.sensorName}>
          <p>{dec}</p>
        </div>
      </div>
    </>
  )
}

export default DiyKitCard