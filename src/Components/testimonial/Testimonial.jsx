import React from "react";
import "./Testimonial.css";
import park from "../../assets/park.jpg";
import lee from "../../assets/lee.jpg";
import moon from "../../assets/moon.jpg";
import { Pagination,Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Testimonial() {
  const data = [
    {
      avatar: lee,
      name: "Lee Sung Kyung",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua .Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
    },
    {
      avatar: moon,
      name: "Moon Ga Young",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua .Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
    },
    {
      avatar: park,
      name: "Park Hyung Sik",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua .Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{

          nextEl: ".swiper-button-next",

          prevEl: ".swiper-button-prev",

          clickable: true,

        }}
        modules={[Pagination, Navigation]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="testimonial" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">

          <div className="swiper-button-prev slider-arrow">

            <ion-icon name="arrow-back-outline"></ion-icon>

          </div>

          <div className="swiper-button-next slider-arrow">

            <ion-icon name="arrow-forward-outline"></ion-icon>

          </div>

          <div className="swiper-pagination"></div>

        </div>
      </Swiper>
    </section>
  );
}

export default Testimonial;
