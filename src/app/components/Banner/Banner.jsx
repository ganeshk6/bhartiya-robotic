import React from "react";
import Style from "./Banner.module.css";
import Image from "next/image";
import bannerImage1 from "../assets/images/bannerImage1.png";
import bannerImage2 from "../assets/images/bannerImage2.png";
import { FcMindMap } from "react-icons/fc";

const Banner = () => {
  return (
    <>
      <div className={Style.bannerMain}>
        <Image className={Style.bannerImage1} alt="g" src={bannerImage1} />
        <div className={Style.bannerContents}>
          <div className={Style.bannerHeader}>
            <div className={Style.bannerFirstHeader}>
              <h1>“Let’s Fertilize the seeds of Bots”</h1>
            </div>
            <div className={Style.bannerSecondHeader}>
              <h1>Bhartiya Robotics</h1>
            </div>
          </div>
          <div className={Style.bammerDetails3}>
            <p>
              Welcome to Bhartiya Robotics, where innovation meets education!
              Unleash your creativity with our cutting-edge IoT DIY kits
              designed to inspire and educate. At Bhartiya Robotics, we believe
              in empowering individuals to harness the power of technology and
              cultivate a passion for robotics. &quot;Let&apos;;s fertilize the
              seeds of bots&quot; is not just a tagline; it&apos;s a philosophy
              that drives us to provide hands-on learning experiences that are
              both engaging and transformative.
            </p>
          </div>
          <div className={Style.bannerButton}>
            <button type="button">Get Started</button>
          </div>
        </div>
        <Image className={Style.bannerImage2} alt="g" src={bannerImage2} />
      </div>
    </>
  );
};

export default Banner;
