import styled from "styled-components";
import Button from "./Button";

function Hero({ img, textOne, textTow, span, button }) {
  return (
    <Section
      img={img}
      className="w-full h-screen flex flex-col justify-center items-center mt-5"
    >
      <H1 className="text-white text-5xl leading-10 font-bold uppercase">
        {textOne}
      </H1>
      <H1 className="text-3xl my-10 font-bold">
        {textTow} <Span>{span}</Span>
      </H1>
      {button && <Button />}
    </Section>
  );
}

export default Hero;

const Section = styled.section`
  position: relative;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(52, 52, 52, 0.4) 9.15%,
      rgba(0, 0, 0, 0.5) 18.3%
    );

    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.white};
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.yellow};
`;
