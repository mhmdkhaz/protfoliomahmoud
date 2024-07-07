import Hero from "../component/Hero";
// start in styled component
import styled from "styled-components";
// Import FontAwesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div>
      <Hero
        img={`${process.env.PUBLIC_URL}/image/contact.jpg`}
        textOne="contact us"
      />
      {/* start in form */}
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
          <form action="" className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">WE'RE READY, LET'S TALK.</h1>
            <Input type="text" placeholder="Your Name" required />
            <Input type="text" placeholder="Email Address" required />
            <Textarea
              class="wpforms-field-medium wpforms-field-required"
              placeholder="Message"
              rows="4"
              cols="50"
              required
            ></Textarea>
            <Send
              type="submit"
              value="send message"
              className="capitalize w-40 px-4 py-2 rounded-md"
            />
          </form>
          {/* info contact */}
          <div>
            <h1 className="text-4xl font-bold">CONTACT INFO</h1>
            <div className="mt-5">
              <h1 className="capitalize text-[#191919] text-2xl font-semibold">
                address
              </h1>
              <p className="capitalize mt-2">Dubai, UAE</p>
            </div>

            <div className="mt-5">
              <h1 className="capitalize text-[#191919] text-2xl font-semibold">
                Email Us
              </h1>
              <p className="capitalize mt-2">
                MahmoudSharkatly@MasIndustrialDesignStudio.com
              </p>
            </div>

            <div className="mt-5">
              <h1 className="capitalize text-[#191919] text-2xl font-semibold">
                Call Us
              </h1>
              <p className="capitalize mt-2">+971-50-474-3395</p>
            </div>

            <div className="mt-5">
              <h1 className="capitalize text-[#191919] text-2xl font-semibold">
                Follow Us
              </h1>
              <div className="flex gap-4">
                <Icon
                  href="https://www.instagram.com/mas_design_dfm/"
                  className="capitalize mt-2 px-2 py-1 rounded-md"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Icon>
                <Icon
                  href="https://www.linkedin.com/company/102216463/admin/feed/posts/"
                  className="capitalize mt-2 px-2 py-1 rounded-md"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

const Input = styled.input`
  color: #666;
  margin: 5px 0;
  padding: 0.75em;
  height: auto;
  border-width: 1px;
  border-style: solid;
  border-color: var(--ast-border-color);
  border-radius: 2px;
  background: ${(props) => props.theme.colors.white};
`;

const Textarea = styled.textarea`
  color: #666;
  margin: 5px 0;
  padding: 0.75em;
  height: auto;
  border-width: 1px;
  border-style: solid;
  border-color: var(--ast-border-color);
  border-radius: 2px;
  background: ${(props) => props.theme.colors.white};
`;

const Send = styled.input`
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
`;

const Icon = styled.a`
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
`;
