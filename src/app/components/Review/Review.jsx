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
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import arrows from '../assets/images/rectangle-110@2x.png'
import Image from "next/image";

export default class Review extends Component {
  renderArrows = () => {
    return (
      <div className="slider-arrow">
        <p
          className="arrow-btn prev"
          onClick={() => this.slider.slickPrev()}
        >
          <Image src={arrows} className="arrowLeft" />
        </p>
        <p
          className="arrow-btn next"
          onClick={() => this.slider.slickNext()}
        >
          <Image src={arrows} className="arrowRight" />
        </p>
      </div>
    );
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      // nextArrow: <ArrowRight />,
      // prevArrow: <ArrowLeft />
    };
    return (
      <>
        <div className={Style.clientReview}
        style={{ position: "relative", marginTop: "2rem" }}
        >
          {this.renderArrows()}
            <Slider
            ref={c => (this.slider = c)}
            {...settings}>
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
