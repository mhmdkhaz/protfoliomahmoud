import React from "react";

function CardProject() {
  return (
    <section>
      <div className=" rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src={`${process.env.PUBLIC_URL}/image/portfolio/card-portfolio.png`}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <ul className="list-disc">
            <li className="text-lg font-semibold">
              Sheet Metal Design for Stainless Steel Kitchen Components
            </li>
            <ul className="list-disc ml-4">
              <li>Related Services:</li>
              <ul className="list-disc ml-8">
                <li>Sheet Metal Fabrication</li>
                <li>Product Design and Development</li>
              </ul>
              <li>
                <span className="text-lg font-semibold">Explanation:</span>
                We specialize in designing stainless steel components for
                kitchens in hotels and commercial spaces. From ovens to sinks
                and cabinets,our designs prioritize functionality, durability,
                and aesthetic appeal.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CardProject;
