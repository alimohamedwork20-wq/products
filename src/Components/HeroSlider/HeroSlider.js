import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSlider.css";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  return (
    <div className="hero">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="hero-swiper"
      >
        <SwiperSlide className="slide-hero">
          <div className="content">
            <h4>Introducing the new</h4>
            <h3>Microsoft Xbox 360 Controller</h3>
            <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
            <Link to="/" className="btn">
              Shop Now
            </Link>
          </div>

          <img src="/img/banner_Hero1.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide className="slide-hero">
          <div className="content">
            <h4>Introducing the new</h4>
            <h3>Microsoft Xbox</h3>
            <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
            <Link to="/" className="btn">
              Shop Now
            </Link>
          </div>

          <img src="/img/banner_Hero2.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide className="slide-hero">
          <div className="content">
            <h4>Introducing the new</h4>
            <h3>Microsoft Xbox</h3>
            <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
            <Link to="/" className="btn">
              Shop Now
            </Link>
          </div>

          <img src="/img/banner_Hero3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
