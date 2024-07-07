import styled from "styled-components";

function About() {
  return (
    <Section className="w-full pb-14">
      <div className="container mx-auto max-w-screen-xl">
        <div className="relative flex flex-col justify-center items-center">
          <h1 className="text-center mt-10 w-[522px] font-medium">
            "If you think good design is expensive, you should look at the cost
            of bad design."
          </h1>
          <span className="mt-3">— Dr. Ralf Speth.</span>
          <img
            src={`${process.env.PUBLIC_URL}/image/quote.png`}
            className="absolute left-0 top-20 w-32 h-24"
            alt=""
          />
        </div>
        {/*  */}
        <div className="flex items-center gap-2 mt-14">
          <Upper>w</Upper>
          <h1>
            elcome to{" "}
            <span className="font-medium">MAS Industrial Design Studio</span> ,
            where ingenuity meets expertise and innovation.
          </h1>
        </div>

        <p className="text-lg  tracking-wider">
          A seasoned mechanical engineer and freelance product/industrial
          designer, I am dedicated to crafting extraordinary solutions that
          seamlessly blend form and function
        </p>

        <p className="mt-4">
          At <span className="font-medium">MAS Industrial Design Studio</span> ,
          you benefit from a personalized approach that is tailored to your
          unique needs and aspirations. My singular focus is on delivering
          exceptional results that exceed expectations and leave a lasting
          impression. What sets me apart is not just my technical proficiency,
          but my unwavering commitment to creativity and client satisfaction.
          With a keen eye for detail and a passion for pushing the limits of
          design, I thrive on challenges and relish the opportunity to bring
          your ideas to life. From concept to execution, I am with you every
          step of the way, ensuring a seamless and collaborative experience.
          Together, we’ll embark on a journey of exploration and innovation,
          where possibilities are endless, and dreams become reality
        </p>

        <p className="mt-4">
          Welcome to a world of limitless imagination and unparalleled
          craftsmanship. 
        </p>

        <p className="mt-4">
          Welcome to
          <span className="font-medium"> MAS Industrial Design Studio.</span>
        </p>
      </div>
    </Section>
  );
}

export default About;

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.grayBack};
`;

const Upper = styled.span`
  font-size: 50px;
`;
