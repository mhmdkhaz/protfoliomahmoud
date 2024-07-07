import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// start in styled component
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const arrayImg = [
    {
      img: "Help-1.jpg",
      title: "PRODUCT DESIGN",
      subTitle:
        "User-centered design Functional analysisConcept explorationCAD and visualizationPrototypingCMF",
    },
    {
      img: "Help-2.png",
      title: "DESIGN ENGINEERING",
      subTitle:
        "Design implementationMechanical designDFM (Design for manufacturing)Technical specificationSurface modelingSupplier sourcing",
    },
    {
      img: "Help-3.jpg",
      title: "STRATEGIC DESIGN",
      subTitle:
        "Identify business opportunitiesMarket- and competitive analysisTrend forecastingProduct brand identity (DNA)Design guidelinesSustainability",
    },
  ];
  return (
    <>
      <StyledSwiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {arrayImg.map((help, index) => (
          <StyledSwiperSlide key={index}>
            <StyledImg
              src={`${process.env.PUBLIC_URL}/image/sliderHelp/${help.img}`}
              alt=""
            />
            <StyledContent>
              <H1 className="text-center text-white text-5xl font-semibold">
                {help.title}
              </H1>
              <P className="text-2xl text-center my-5">{help.subTitle}</P>
            </StyledContent>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
}

const StyledSwiper = styled(Swiper)`
  width: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: 100vh;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.black};
    z-index: 2;
    opacity: 0.6;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  z-index: 5;
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.yellow};
`;

const P = styled.p`
  color: ${(props) => props.theme.colors.white};
`;
