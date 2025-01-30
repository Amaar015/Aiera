import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from "../../data";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 cards by default
    slidesToScroll: 3,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="categoreis testimonial">
      <span>Testimonial</span>
      <h2>Clients We Help</h2>
      <div className="testimonial-main">
        <Slider {...settings}>
          {testimonial.map((data) => (
            <div className="testimonial-card" key={data.id}>
              <div className="testimonial-image">
                <img src={data.image} alt="" />
                <div>
                  <h5>{data.name}</h5>
                  <p>{data.porfession}</p>
                </div>
              </div>
              <p className="comment">{data.comment}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
