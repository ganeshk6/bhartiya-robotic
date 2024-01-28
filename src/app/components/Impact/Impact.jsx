import Image from "next/image";
import React from "react";
import Style from "./Impact.module.css";
import India from "../assets/images/india.png";
import Sold from "../assets/images/sold.png";
import Growth from "../assets/images/groth.png";
import Institute from "../assets/images/institute.png";
import { ST } from "next/dist/shared/lib/utils";

const Impact = () => {
  return (
    <>
      <div className={Style.impactMain}>
        <div>
          <Image className={Style.indiaImage} src={India} alt="sd" width={750} />
        </div>
        <div className={Style.impactContent}>
          <div className={Style.impactHeader}>
            <h1>Exploring Our Impact</h1>
            <small>“ We are here to serve your learning path“</small>
            <div className={Style.lines}>
                <div className={Style.leftCircle}></div>
                <div className={Style.lineBetween}></div>
                <div className={Style.rightCircle}></div>
            </div>
          </div>
          <div className={Style.impactContent2}>
            <div className={Style.impactContentImage}>
              <Image src={Sold} alt="g" className={Style.impactImage} />
              <p>500+ KIDS REACHED</p>
            </div>
            <div className={Style.impactContentImage}>
              <Image src={Growth} alt="g" className={Style.impactImage} />
              <p>Available in 16000+ Cities</p>
            </div>
            <div className={Style.impactContentImage}>
              <Image src={Institute} alt="f" className={Style.impactImage} />
              <p>Top Institute Instructors</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impact;
