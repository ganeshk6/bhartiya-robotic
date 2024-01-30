import React from "react";
import Style from "./Testimonial.module.css";
import image1 from "../assets/images/Ellipse 108.png";
import image2 from "../assets/images/ellipse-16@2x.png";
import image3 from "../assets/images/ellipse-120@2x.png";
import image4 from "../assets/images/ellipse-18@2x.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Testimonial = () => {
  return (
    <>
      <div className={Style.testimonialMain}>
        <div className={Style.testimonial}>
          <div className={Style.testimonialCard}>
          <Image
            className={Style.circleImage}
            src={image1}
            width={450}
            height={190}
          />
          <Image
            className={Style.circleImage}
            src={image1}
            width={450}
            height={190}
          />
            <div className={Style.cardFirstPart}>
              <Image
                className={Style.cardImage}
                src={image2}
                width={150}
                height={150}
              />
            </div>
            <div className={Style.cardSecondPart}>
              <p className={Style.clientName}>“Mark antony”</p>
              <p className={Style.clientMessage}>
                The interactive nature of STEMkit is another standout feature.
                The platform encourages collaboration, allowing students to work
                together on projets.
              </p>
              <Link href="/" className={Style.buttons}>
                <p>More⮕</p>
              </Link>
            </div>
          </div>
        {/* <div className={Style.testimonial}> */}
          <div className={Style.testimonialCard}>
          <Image
            className={Style.circleImage}
            src={image1}
            width={450}
            height={190}
          />
          <Image
            className={Style.circleImage}
            src={image1}
            width={450}
            height={190}
          />
            <div className={Style.cardFirstPart}>
              <Image
                className={Style.cardImage}
                src={image3}
                width={150}
                height={150}
              />
            </div>
            <div className={Style.cardSecondPart}>
              <p className={Style.clientName}>“Mark antony”</p>
              <p className={Style.clientMessage}>
                The interactive nature of STEMkit is another standout feature.
                The platform encourages collaboration, allowing students to work
                together on projets.
              </p>
              <Link href="/" className={Style.buttons}>
                <p>More⮕</p>
              </Link>
            </div>
          </div>
        {/* </div> */}
        {/* <div className={Style.testimonial}> */}
          <div className={Style.testimonialCard}>
          <Image
            className={Style.circleImage}
            src={image1}
            width={450}
            height={190}
          />
          <Image
            className={Style.circleImage}
            src={image1}
            width={450}
            height={190}
          />
            <div className={Style.cardFirstPart}>
              <Image
                className={Style.cardImage}
                src={image4}
                width={150}
                height={150}
              />
            </div>
            <div className={Style.cardSecondPart}>
              <p className={Style.clientName}>“Mark antony”</p>
              <p className={Style.clientMessage}>
                The interactive nature of STEMkit is another standout feature.
                The platform encourages collaboration, allowing students to work
                together on projets.
              </p>
              <Link href="/" className={Style.buttons}>
                <p>More⮕</p>
              </Link>
            </div>
          </div>
        {/* </div> */}
        {/* <div className={Style.testimonial}> */}
          <div className={Style.testimonialCard}>
          <Image
            className={Style.circleImage}
            src={image1}
            width={450}
            height={190}
          />
          <Image
            className={Style.circleImage}
            src={image1}
            width={450}
            height={190}
          />
            <div className={Style.cardFirstPart}>
              <Image
                className={Style.cardImage}
                src={image2}
                width={150}
                height={150}
              />
            </div>
            <div className={Style.cardSecondPart}>
              <p className={Style.clientName}>“Mark antony”</p>
              <p className={Style.clientMessage}>
                The interactive nature of STEMkit is another standout feature.
                The platform encourages collaboration, allowing students to work
                together on projets.
              </p>
              <Link href="/" className={Style.buttons}>
                <p>More⮕</p>
              </Link>
            </div>
          </div>
        {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default Testimonial;
