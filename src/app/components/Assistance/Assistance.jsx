import React from "react";
import Style from "./Assistance.module.css";
import assistance1 from "../assets/images/assistance1.png";
import assistance2 from "../assets/images/ttu 1.png";
import { BsChatText } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Assistance = () => {
  return (
    <>
      <div className={Style.assistanceStart}>
        <div className={Style.assistanceLine}></div>
        <h1>Free Assistance ?</h1>
        <div className={Style.assistanceContentStart}>
          <div className={Style.assistanceImage}>
            <Image
              src={assistance2}
              alt="g"
              className={Style.assistanceImage1}
            />
            <Image src={assistance1} alt="g" className={Style.assistanceImage2} />
          </div>
          <div className={Style.assistanceMainContent}>
            <h1>We are always there for you !</h1>
            <p className={Style.assistanceText}>
              We are a 24/7 mate , We not only provide an interaction , yet we
              provide a one to one session where you can question , learn and
              grow. We are a 24/7 mate , We not only provide an interaction ,
              yet we provide a one to one session where you can question , learn
              and grow.
            </p>
            <div className={Style.assistanceButton}>
              <div>
                <Link href="/" className={Style.buttons}>
                  <p>Schedule a call</p>
                  <p className={Style.messageIcon}><BsChatText /></p>
                </Link>
              </div>
              <div>
              <Link href="/" className={Style.buttons}>
                  <p>Schedule a call</p>
                  <p className={Style.calIcon}><IoIosCall /></p>
                </Link>
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
