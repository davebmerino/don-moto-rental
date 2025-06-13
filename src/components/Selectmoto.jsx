import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Motocard from "./Motocard";

const motorcycles = [
  {
    name: "Yamaha XTZ",
    image: "/images/xtz.jpg",
    description: "Dual-sport bike, perfect for city and off-road",
    available: true,
  },
  {
    name: "Honda Click 125",
    image: "/images/click.jpg",
    description: "Smooth, automatic scooter for daily use",
    available: false,
  },
  {
    name: "Suzuki Raider",
    image: "/images/raider.jpg",
    description: "Sporty and powerful underbone",
    available: true,
  },
  // Add more...
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
