import React from "react";
import Style from "./WhoWe.module.css";
import Image from "next/image";

const WhoWeCard = ({
  src,
  ownerName,
  role,
  firstComma,
  content,
  secondComma,
}) => {
  return (
    <>
      <div>
        <div className={Style.sliderCard}>
          <div>
            <Image src={src} className={Style.imageOwner} />
          </div>
          <div className={Style.whoWeAreName}>
            <h2>{ownerName}</h2>
            <p>{role}</p>
          </div>
          <div className={Style.whoWeAreContent}>
            <p>{firstComma}</p>
            <p>{content}</p>
            <p>{secondComma}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeCard;
