import React from "react";
import Style from "./Review.module.css";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";

const ReviewCard = ({ src, message, clientName }) => {
  return (
    <>
      <div className={Style.clientSliderMessage}>
        <div className={Style.commasImages}>
          <Image src={src} className={Style.reviewClientImage} />
          <div className={Style.starts}>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
        </div>
        <div className={Style.messages}>
          <p className={Style.clientNames}>{clientName}</p>
          <p className={Style.clientMessages}>{message}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
