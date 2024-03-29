import React from "react";
import Style from "./KitKnowledge.module.css";
import Image from "next/image";
import kitknowledgeBgImage from "../assets/images/kirKnowledgebg.jpg";
import knowledge1 from "../assets/images/knowledge1.png";
import knowledge2 from "../assets/images/knowledge2.png";
import knowledge3 from "../assets/images/knowledge3.png";
import clickPath1 from "../assets/images/clip-path-group@2x.png"
import clickPath2 from "../assets/images/clip-path-group-1@2x.png"

const Kitknowledge = () => {
  return (
    <>
      <div className={Style.kitKnowledgeMain}>
        <h1>
          Ignite the Future <br />
          The journey of profound knowledge
        </h1>
        {/* <div className={Sty}>d</div> */}
        {/* <Image src={kitknowledgeBgImage} alt="d" className={Style.bgImage} /> */}
        <div className={Style.bgImageKnowledge}>
        <div className={Style.kitKnowledge}>
            <Image src={clickPath1} className={Style.clickPath1} />
          <div className={Style.kit1}>
            <Image src={knowledge1} alt="df" className={Style.kitImage1} height={300} />
            <div className={Style.kitDetails1}>
              <h3>Ignition Kit</h3>
              {/* <div> */}
                <ul>
                    <li>Basic Sensors</li>
                    <li>Micro controllers</li>
                    <li>nterfacing hardwares & softwares</li>
                    <li>Home Automation</li>
                </ul>
                {/* <p>-Basic Sensors</p>
                <p>-Micro controllers</p>
                <p>-Interfacing hardwares & softwares</p>
                <p>-Home Automation</p> */}
              {/* </div> */}
            </div>
          </div>
          <Image src={clickPath2} className={Style.clickPath2} />
          <div className={Style.kit2}>
            <Image src={knowledge2} alt="f" className={Style.kitImage2} height={300} />
            <div className={Style.kitDetails1}>
              <h3>Explorer Kit</h3>
              <ul>
                    <li>Basic Sensors</li>
                    <li>Micro controllers</li>
                    <li>nterfacing hardwares & softwares</li>
                    <li>Home Automation</li>
                </ul>
            </div>
          </div>
          <div className={Style.kit3}>
            <Image src={knowledge3} alt="s" className={Style.kitImage3} height={300} />
            <div className={Style.kitDetails1}>
              <h3>Innovator Kit</h3>
              <ul>
                    <li>Basic Sensors</li>
                    <li>Micro controllers</li>
                    <li>nterfacing hardwares & softwares</li>
                    <li>Home Automation</li>
                </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Kitknowledge;
