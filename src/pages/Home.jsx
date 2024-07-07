import Hero from "../component/Hero";
import About from "../component/About";
import Work from "../component/Work";
import Clients from "../component/Clients";
import Customer from "../component/Customer";

function Home() {
  return (
    <section className="">
      <Hero
        img="image/Hero.jpg"
        textOne="MAS INDUSTERIAl DESIGN STUDIO"
        textTow="TURNING YOUR VISION INTO"
        span="Masterpieces"
        button={true}
      />
      <About />
      <Work />
      <Clients />
      <Customer />
    </section>
  );
}

export default Home;
