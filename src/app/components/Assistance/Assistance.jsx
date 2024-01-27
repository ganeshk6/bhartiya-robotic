import React from "react";
import Style from "./Assistance.module.css";
import assistance1 from "../assets/images/assistance1.png";
import assistance2 from "../assets/images/assistance2.png";
import { BsChatText } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import Image from "next/image";

const Assistance = () => {
  return (
    <>
      <div className={Style.assistanceStart}>
        <h1>Free Assistance ?</h1>
        <div className={Style.assistanceContentStart}>
          <div className={Style.assistanceImage}>
            <Image src={assistance2} alt="g" height={400} width={500} className={Style.assistanceImage1} />
            <Image src={assistance1} alt="g" height={300}/>
          </div>
          <div className={Style.assistanceMainContent}>
            <h1>We are always there for you !</h1>
            <p>
              We are a 24/7 mate , We not only provide an interaction , yet we
              provide a one to one session where you can question , learn and
              grow. We are a 24/7 mate , We not only provide an interaction ,
              yet we provide a one to one session where you can question , learn
              and grow.
            </p>
            <div className={Style.assistanceButton}>
              <div className={Style.buttons}>
                <button type="button">
                  Schedule a call{" "}
                  <span>
                    <BsChatText />
                  </span>
                </button>
                {/* <span>
                  <BsChatText />
                </span> */}
              </div>
              <div>
                <button type="button">
                  Chat with us{" "}
                  <span>
                    <IoIosCall />
                  </span>
                </button>
                {/* <span>
                  <IoIosCall />
                </span> */}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assistance;
