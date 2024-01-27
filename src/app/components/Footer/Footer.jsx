import React from "react";
import Style from "./Footer.module.css";
import Image from "next/image";
import footerLogo from "../assets/images/only_logo_without_bg.png";
import { IoIosCall } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { RiCamera2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className={Style.footerClass}>
        <div className={Style.footerDetails}>
          <div className={Style.footerLogoIcons}>
            <div>
              <Image src={footerLogo} alt="g" height={50} width={100} />
            </div>
            <div className={Style.footerNameIcons}>
              <h2>Bhartiya Robotics</h2>
              <div className={Style.footerIcons}>
                <p>
                  <IoIosCall />
                </p>
                <p>
                  <IoLogoFacebook />
                </p>
                <p>
                  <IoLogoTwitter />
                </p>
                <p>
                  <RiCamera2Fill />
                </p>
                <p>
                  <IoMdMail />
                </p>
              </div>
            </div>
          </div>
          <div className={Style.footerDetailaLink}>
            <div className={Style.footerFirstLink}>
              <div className={Style.footerAbout}>
                <p>About Us</p>
              </div>
              <div className={Style.footerAllLinks}>
                <p>Suggestion</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Blog</p>
              </div>
            </div>
            <div className={Style.footerFirstLink}>
              <div className={Style.footerAbout}>
                <p>Support</p>
              </div>
              <div className={Style.footerAllLinks}>
                <p>Help Center</p>
                <p>Frequently Asked Questions</p>
                <p>Downloads</p>
                <p>Raise a Ticket</p>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.footerForm}>
          <div>
            <h3 className={Style.footerFormHeader}>Take you first step</h3>
          </div>
          <div>
            <input type="text" className={Style.inputFields} />
          </div>
          <div>
            <textarea
              name=""
              className={Style.inputFields}
              cols="10"
              rows="5"
            ></textarea>
          </div>
          <div className={Style.footerFormButton}>
            <button type="button">connect</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
