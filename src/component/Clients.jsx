import styled from "styled-components";

function Clients() {
  return (
    <section className="my-14">
      <div className="container mx-auto max-w-screen-xl">
        <H1 className="text-3xl">CLIENTS TESTIMONIAL</H1>
        <p className="mt-8">
          “I have worked with Mahmoud for the past year on a particularly
          complicated project. He is an excellent engineer with a well-rounded
          skill set who is fast and responsive. An absolute pleasure to work
          with.”
        </p>

        <p className="mt-8">James F. | Doctor</p>
        <p className="mt-4">Medical Product Design</p>
        <p className="mt-8">
          “Mahmoud is a very talented designer. He took my ideas and developed
          them to the exact specifications I was looking for. He’s a good
          listener and also provides valuable advice along the design process.
          Thank you, Mahmoud! Looking forward to our next contact!”
        </p>
      </div>
    </section>
  );
}

export default Clients;

const H1 = styled.h1`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    background-color: ${(props) => props.theme.colors.yellow};
    width: 150px;
    height: 6px;
  }
`;
