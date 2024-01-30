import React from 'react'
import Style from './CopyRight.module.css'
import copyRight from '../assets/images/rectangle-footer@2x.png'
import Image from 'next/image'

const CopyRight = () => {
  return (
    <>
    <div className={Style.copyRight}>
        <div className={Style.copyRightContent}>
            <Image src={copyRight} width={30} />
            <p>Copyright 2023</p>
        </div>
        <div className={Style.copyRightContent}>
            <p>Privacy Policy</p>
            <p>Term of use</p>
        </div>
    </div>
    </>
  )
}

export default CopyRight