import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import styled from "styled-components";

export default function App() {
  return (
    <section className="container mx-auto max-w-screen-xl">
      <H1 className="text-[40px]  mb-12 uppercase">our customers</H1>
      <StyledSwiper
        watchSlidesProgress={true}
        slidesPerView={5}
        className="mySwiper"
      >
        <StyledSwiperSlide>
          <StyledImg
            src={`${process.env.PUBLIC_URL}/image/customer/customer-1.png`}
            alt=""
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImg
            src={`${process.env.PUBLIC_URL}/image/customer/customer-2.png`}
            alt=""
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImg
            src={`${process.env.PUBLIC_URL}/image/customer/customer-3.png`}
            alt=""
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImg
            src={`${process.env.PUBLIC_URL}/image/customer/customer-4.png`}
            alt=""
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImg
            src={`${process.env.PUBLIC_URL}/image/customer/customer-5.png`}
            alt=""
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImg
            src={`${process.env.PUBLIC_URL}/image/customer/customer-6.png`}
            alt=""
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImg
            src={`${process.env.PUBLIC_URL}/image/customer/customer-7.png`}
            alt=""
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImg
            src={`${process.env.PUBLIC_URL}/image/customer/customer-8.png`}
            alt=""
          />
        </StyledSwiperSlide>
      </StyledSwiper>
    </section>
  );
}

const H1 = styled.h1`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.yellow};
    width: 321px;
    height: 3px;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: 200px;
`;

const StyledImg = styled.img`
  width: 90%;
  height: 100%;
`;
