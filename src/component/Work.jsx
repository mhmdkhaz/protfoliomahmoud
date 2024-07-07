import styled from "styled-components";
import Button from "./Button";

function Work() {
  return (
    <Section className="relative py-5">
      <div className="container mx-auto max-w-screen-xl">
        <ContentWrapper className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* left content */}
          <div></div>
          {/* right content */}
          <div>
            <H1 className="text-[40px] text-left text-white">
              WHY WORK WITH US?
            </H1>
            <ul className="mt-8">
              <Li>
                Proven Track Record: Successfully delivered exceptional results
                on 500+ projects, with a client satisfaction rate that speaks
                volumes.
              </Li>
              <Li>
                Tailored Solutions: Your vision is not just a project; it’s a
                promise when you collaborate with us. We tailor our approach to
                your unique needs, offering in-depth project analysis, iterative
                design processes, and seamless part sourcing.
              </Li>
              <Li>
                Diverse Skill Set: Specializing in SolidWorks Engineering
                Design, Load-Bearing Metal Structure Design, Sheet Metal
                Manufacturing, Plastic Injection Mold Design, Flow & Aerodynamic
                Simulation, and Production Line Design.
              </Li>
              <Li>
                Manufacturing Methods: Proficient in various manufacturing
                methods, including SLS, Multi-Jet Fusion, 5-Axis Milling, and
                Injection Molding, covering everything from Manufacturing and
                Robotics to IoT and Scientific Research. Client-Centric Focus:
                Your success is my priority.
              </Li>
            </ul>
            <P className="mt-8">
              Let’s Collaborate! In the dynamic world of freelancing, we are the
              experienced hand <br /> you <br /> need to guide your project from
              concept to reality.
            </P>
            <P className="mt-4">
              Let’s team up and turn your vision into a resounding success.
            </P>
            <P className="mt-4">
              Ready to start? Contact us now, and let’s make it happen!
            </P>
            <div className="flex justify-center mt-4">
              <Button />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </Section>
  );
}

export default Work;

const Section = styled.section`
  position: relative;
  background-image: url("image/bulb-art-light.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  /* height: 100vh; */

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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const H1 = styled.h1`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.white};
    width: 81px;
    height: 3px;
  }
`;

const Li = styled.li`
  list-style: none;
  position: relative;
  padding-left: 1.2em;
  margin-top: 12px;
  color: ${(props) => props.theme.colors.white};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.3em; /* Adjust to align vertically with text */
    width: 0.6em; /* Size of the square */
    height: 0.6em; /* Size of the square */
    background-color: ${(props) =>
      props.theme.colors.yellow}; /* Customize the color */
  }
`;

const P = styled.p`
  color: ${(props) => props.theme.colors.white};
`;
