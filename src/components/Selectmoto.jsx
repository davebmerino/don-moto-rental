import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Motocard from "./Motocard";
import clickOrange from "../images/clickorange.jpg";
import clickBlak from "../images/clickblack.png";
import clickRed from "../images/clickred.avif";
import Aerox155 from "../images/aerox.webp";
import nmaxv2 from "../images/nmax.jpg";

const motorcycles = [
  {
    name: "Click 125 Orange",
    image: clickOrange,
    description: "2019 model, perfect for city riding and affordable",
    available: true,
  },
  {
    name: "Click 125 Black",
    image: clickBlak,
    description: "2022 model, perfect for city riding and affordable",
    available: false,
  },
  {
    name: "Click 125 Red",
    image: clickRed,
    description: "2022 model, perfect for city riding and affordable",
    available: true,
  },
  {
    name: "Aerox 155 V2",
    image: Aerox155,
    description:
      "2024 model, Standard version, perfect for city riding and for long ride",
    available: true,
  },
  {
    name: "Nmax 155 V2",
    image: nmaxv2,
    description:
      "2024 model, ABS version, perfect for city riding and for long ride",
    available: true,
  },
];

export default function Selectmoto() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 849,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-[#f8fafc] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-[#1e293b] mb-2">
          Select Your Motorcycle
        </h2>
        <p className="text-[#475569] text-lg">
          Choose from a wide range of high-quality motorcycles for rent
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {motorcycles.map((bike) => (
            <Motocard key={bike.id} bike={bike} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
