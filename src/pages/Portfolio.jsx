import Hero from "../component/Hero";
import CardProject from "../component/CardProject";

function Portfolio() {
  return (
    <div>
      <Hero
        img={`${process.env.PUBLIC_URL}/image/portfolio/hero-portfolio.jpg`}
        textOne="our projects"
      />
      <h1 className="text-center my-4 text-3xl text-[#404040]">
        HIGHLIGHTING THE KEY BENEFITS PROVIDED BY OUR <br /> SERVICES AND
        ASSOCIATED PROJECTS.
      </h1>
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
