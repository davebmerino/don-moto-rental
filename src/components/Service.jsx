import Servicecard from "../components/Servicecard";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";

const serviceData = [
  {
    image: banner1,
    title: "Rent with Drive",
    description:
      "Experience a comfortable ride with our professional drivers who know the local roads inside out.",
  },
  {
    image: banner2,
    title: "Rent Motorcycle",
    description:
      "Choose from our wide selection of well-maintained motorcycles to suit every style and budget.",
  },
  {
    image: banner3,
    title: "Rent and Tour",
    description:
      "Discover Cebu’s top tourist destinations with our guided tour services on two wheels.",
  },
];

export default function Service() {
  return (
    <>
      <div className="mb-30">
        <h3 className="text-4xl text-center font-bold text-[#1e293b] mb-10">
          Our Service
        </h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch px-4 max-w-6xl mx-auto ">
          {serviceData.map((service) => (
            <Servicecard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
