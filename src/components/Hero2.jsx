import heroImage from "../images/banner1.jpg";

export default function Hero2() {
  return (
    <div
      className="relative h-[90vh] w-full bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
        <p className="uppercase text-yellow-400 tracking-widest mb-3 text-sm md:text-base">
          Cebu Motorcycle Rentals
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Ride the City <br />
          With Confidence
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-lg">
          Choose from our premium selection of motorcycles. Affordable,
          reliable, and perfect for exploring Cebu.
        </p>
        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black font-medium px-6 py-3 rounded-full hover:bg-yellow-500 transition">
            Rent Now
          </button>
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
