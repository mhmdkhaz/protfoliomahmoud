import Hero from "../component/Hero";
import styled from "styled-components";

function AboutUs() {
  return (
    <div>
      <Hero img="image/about/about.jpeg" textOne="who am i ?" button={false} />
      <div className="container mx-auto max-w-screen-xl">
        <H1 className="text-3xl uppercase font-semibold my-12">about me</H1>
        <p className="mb-4">
          I am Mahmoud Sharkatly, the Founder and CEO of MAS Industrial Design
          Studio, headquartered in Dubai, UAE.
        </p>
        <p className="mb-4">
          As a seasoned senior mechanical engineer and licensed freelance
          professional by the UAE government, I specialize in industrial and
          product design, project management, and mechanical design
          optimization. With unwavering dedication to excellence, I lead our
          team in delivering top-tier solutions that meet the highest standards
          of quality and innovation.
        </p>
        <p className="mb-4">
          With a keen eye for detail and a commitment to innovation, I oversee
          all aspects of our projects, from conceptualization to execution.
          Through my leadership, MAS Industrial Design Studio has become
          synonymous with cutting-edge design, meticulous attention to detail,
          and superior craftsmanship.
        </p>
        <p className="mb-4">
          Holding a Bachelor’s degree in Mechanical Engineering and currently
          pursuing a Master’s degree in Fluid Mechanics, I am dedicated to
          staying at the forefront of industry trends and advancements. Fluent
          in both Arabic and English, I am passionate about leveraging my
          expertise to drive the success of MAS Industrial Design Studio and
          exceed the expectations of our clients and partners.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

const H1 = styled.h1`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    background-color: ${(props) => props.theme.colors.yellow};
    width: 115px;
    height: 3px;
  }
`;
