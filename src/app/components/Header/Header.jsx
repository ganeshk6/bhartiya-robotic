"use client";
import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import logo from "../assets/images/only_logo_without_bg.png";
import Image from 'next/image'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navLinkData } from '@/app/constant';
import { Link } from 'react-scroll';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [fix, setFix] = useState(false);
  
    function setFixed() {
      if (window.scrollY > 50) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
    useEffect(() => {
      window.addEventListener("scroll", setFixed);
    });
  return (
    <>
     <div className={fix ? styles.fixedNavbar : styles.Header}>
        <div className={styles.Logo}>
          <Link to='./'>
            <Image className={styles.logoImage} alt='g' src={logo}/>
          </Link>
        </div>
      <div className={styles.HeaderLink}>
        <ul>
          {navLinkData.map(({ _id, title, link }) => (
            <li key={_id}>
              <Link
                activeClass={styles.activeNav}
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.btn}>
        <button type="button">Sign-up</button>
        <button type="button" >Login</button>
      </div>
      <div className={styles.desktopMenu}>
        <span onClick={() => setShowMenu(!showMenu)} className={styles.navMenu}>
          <FiMenu />
        </span>
      </div>
      {/* </div> */}
      {showMenu && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuShow}>
            <div className={styles.mobileLogo}>
                <div>
                  <Link to='./'>
                    <Image src={logo} alt='df' height={75} width={150} />
                  </Link>
                  <div className={styles.mobileContent}>
                    <p>BHARATIYA ROBOTICS</p>
                  </div>
                </div>
              <div className={styles.mobileClose}>
                <span
                  onClick={() => setShowMenu(false)}
                  className={styles.navCloseMenu}
                >
                  <MdClose />
                </span>
              </div>
            </div>
            <div className={styles.mobileNavlink}>
              <ul>
                {navLinkData.map(({ _id, title, link }) => (
                  <li key={_id}>
                    <Link
                      to={link}
                      onClick={() => setShowMenu(false)}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      spy={true}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Header