"use client";
import React, { Component } from "react";
import Style from "./Review.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiVendorAndroid } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import ReviewCard from './ReviewCard';
import image3 from "../assets/images/Ellipse 70.png";
import image4 from "../assets/images/Ellipse 120.png";

export default class Review extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };
    return (
      <>
        <div className={Style.clientReview}>
          {/* <div className={Style.clientSlider}> */}
            <Slider {...settings}>
              <ReviewCard
              src={image3}
              message= "The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets."
              clientName= "Neethan Falignton"
               />
              <ReviewCard
              src={image3}
              clientName= "Neethan Falignton"
              message= "The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets.The interactive nature of STEMkit is another standout feature. The platform encourages collaboration, allowing students to work together on projets."
               />
            </Slider>
          {/* </div> */}
        </div>
      </>
    );
  }
}
