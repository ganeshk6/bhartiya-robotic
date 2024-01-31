"use client";
import React, { Component } from "react";
import Style from "./WhoWe.module.css";
import ceoImage from "../assets/images/Ellipse 4.png";
import WhoWeCard from "./WhoWeCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class WhoWe extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 1,
      speed: 500,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: false,
          }
        }
      ]
    };
    return (
      <>
        <div className={Style.whoWeAre}>
          <p>Our Team</p>
          <h1>Who are we ?</h1>
          <div>
            <Slider {...settings}>
              <WhoWeCard
                src={ceoImage}
                ownerName="Harshit Agarwal"
                role="Founder & CEO"
                firstComma="“"
                content="Embark on an inspiring journey with Bhartiya Robotics! Explore the limitless world of innovation through our empowering IoT DIY kits. Let's cultivate a future filled with creativity and technological brilliance together."
                secondComma="“"
              />
              <WhoWeCard
                src={ceoImage}
                ownerName="Harshit Agarwal"
                role="Founder & CEO"
                firstComma="“"
                content="Embark on an inspiring journey with Bhartiya Robotics! Explore the limitless world of innovation through our empowering IoT DIY kits. Let's cultivate a future filled with creativity and technological brilliance together."
                secondComma="“"
              />
              <WhoWeCard
                src={ceoImage}
                ownerName="Harshit Agarwal"
                role="Founder & CEO"
                firstComma="“"
                content="Embark on an inspiring journey with Bhartiya Robotics! Explore the limitless world of innovation through our empowering IoT DIY kits. Let's cultivate a future filled with creativity and technological brilliance together."
                secondComma="“"
              />
              <WhoWeCard
                src={ceoImage}
                ownerName="Harshit Agarwal"
                role="Founder & CEO"
                firstComma="“"
                content="Embark on an inspiring journey with Bhartiya Robotics! Explore the limitless world of innovation through our empowering IoT DIY kits. Let's cultivate a future filled with creativity and technological brilliance together."
                secondComma="“"
              />
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
