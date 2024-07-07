import React, { useState } from "react";
import styled from "styled-components";
import CardServices from "./CardServices";
import Accordion from "./According";

const arrayCard = [
  {
    title: "Design and Development",
    subtitle:
      "We specialize in the comprehensive design and development of innovative products, including medical devices, mobile accessories, and various jigs. From initial concept to final prototype, our services ensure precision, functionality and aesthetic appeal.",
    img: "5.svg",
    type: "dataDesigned",
  },
  {
    title: "CAD and 3D Services",
    subtitle:
      "Our CAD and 3D services encompass everything from digital sketching and 3D modeling to reverse engineering and 3D printing. We transform your ideas into accurate, editable digital models and prototypes with cutting-edge technology.",
    img: "6.svg",
    type: "dataCAD",
  },
  {
    title: "Industrial Design and Fabrication",
    subtitle:
      "We offer precision machining, sheet metal fabrication, and the design and manufacture of custom industrial equipment. Our services ensure high-quality, durable solutions for various industrial applications, from insulated doors to specialized machinery.",
    img: "7.svg",
    type: "dataIndustrial",
  },
  {
    title: "Exhibition and Diverse Services",
    subtitle:
      "We offer comprehensive services for preparing medical exhibition stands and organizing logistics, along with executing a wide range of custom manufacturing and design projects. We provide seamless and efficient solutions to meet diverse client needs.",
    img: "8.svg",
    type: "dataExhibition",
  },
];

const data = {
  dataDesigned: [
    {
      question: "Product Design and Development:",
      answer:
        "Engineering innovative solutions from concept to final product, such as smart control rings for diabetes monitoring.",
    },
    {
      question: "Medical Device Design:",
      answer:
        "Designing smart healthcare solutions for monitoring and treatment, like smart rings for vital sign monitoring in diabetic patients.",
    },
    {
      question: "Industrial Design Consultation:",
      answer:
        "Providing expert advice and guidance on product design and development, including consulting on the design and development of industrial tools.",
    },
    {
      question: "Mobile Accessories Design and Manufacturing:",
      answer:
        "Crafting functional and stylish accessories for modern devices, such as Bluetooth earbud cleaning tools.",
    },
    {
      question: "Prototype Development:",
      answer:
        "Turning ideas into tangible prototypes for testing and validation, like developing prototypes of grill tools for testing and refinement.",
    },
    {
      question: "Product Innovation and Research:",
      answer:
        "Driving innovation through continuous research and development efforts, such as researching and developing new lines of medical devices for remote patient monitoring.",
    },
  ],
  dataCAD: [
    {
      question: "3D Printing Services:",
      answer:
        "Providing rapid prototyping and custom manufacturing using cutting-edge technology, including 3D printing prototypes for mobile phone accessories.",
    },
    {
      question: "Reverse Engineering Solutions:",
      answer:
        "Reimagining existing products and components for improvement and innovation, like reverse engineering automotive parts for performance enhancement.",
    },
    {
      question: "Technical Drawings and CAD Modeling:",
      answer:
        "Creating detailed engineering drawings and 3D models for visualization and production, such as generating CAD models and technical drawings for injection molded plastic components.",
    },
    {
      question: "Design Optimization Services:",
      answer:
        "Refining designs to improve functionality, efficiency, and manufacturability, including optimizing the design of injection molded parts to reduce waste and improve production efficiency",
    },
  ],
  dataIndustrial: [
    {
      question: "Sheet Metal Fabrication:",
      answer:
        "Crafting precision stainless steel components for various applications, including kitchen components for hotels and commercial kitchens.",
    },
    {
      question: "Injection Mold Design and Manufacturing:",
      answer:
        "Creating molds for plastic components with precision and efficiency, such as molds for custom plastic parts used in medical devices.",
    },
    {
      question: "CNC Machining Services:",
      answer:
        "Providing precision machining for custom parts and components, including CNC machining of metal parts for medical equipment.",
    },
    {
      question: "Custom Fabrication Services:",
      answer:
        "Tailoring solutions to meet specific client needs and requirements, like fabricating custom enclosures for roadside screens.",
    },
    {
      question: "Cold Room Door Design and Fabrication:",
      answer:
        "Engineering insulated doors for temperature-controlled environments, such as doors for cold room storage facilities.",
    },
    {
      question: "Industrial Automation Solutions:",
      answer:
        "Enhancing productivity and efficiency through automation and robotics, such as designing automated machines for punching GRP panels.",
    },
    {
      question: "Materials Selection and Optimization:",
      answer:
        "Selecting the right materials and optimizing designs for performance and cost-efficiency, such as optimizing the design of mobile phone accessories for durability and cost-effectiveness.",
    },
  ],
  dataExhibition: [
    {
      question: "Quality Assurance and Compliance:",
      answer:
        "Ensuring products meet industry standards and regulations, such as conducting quality assurance tests on medical devices for regulatory compliance.",
    },
    {
      question: "Product Testing and Validation:",
      answer:
        "Conducting rigorous testing to ensure reliability,safety, and performance of products, including testing prototypes of medical devices for functionality and durability.",
    },
    {
      question: "Exhibition Stand Preparation and Logistics:",
      answer:
        "Offering logistical support and stand design for exhibitions and events, including transportation and stand preparation for medical exhibitions.",
    },
  ],
};

function GeneralServices() {
  const [dataAccordion, setDataAccordion] = useState(data.dataDesigned);

  const handleCardClick = (type) => {
    setDataAccordion(data[type] || []);
  };

  return (
    <section className="mt-8">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4 lg:col-span-1 w-full h-full">
            {arrayCard.map((card, index) => (
              <div key={index} onClick={() => handleCardClick(card.type)}>
                <CardServices
                  title={card.title}
                  subtitle={card.subtitle}
                  img={card.img}
                />
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <Accordion data={dataAccordion} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeneralServices;
