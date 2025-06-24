import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import { useState, useEffect } from "react";

const banners = [banner1, banner2, banner3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {banners.map((banner, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={banner}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* Text Content */}
      <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <p className="text-[#196ffa] text-sm md:text-base uppercase tracking-widest mb-2">
          Cebu Don moto.rental
        </p>
        <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Ride With Style and Freedom
        </h1>
        <p className="mt-4 text-gray-200 text-sm md:text-lg max-w-xl mx-auto">
          Choose from our best motorcycle selections and enjoy smooth rides
          around Cebu. Affordable, convenient, and fun.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#3b82f6] hover:bg-[#f8fafc] cursor-pointer text-[#1e293b] font-medium px-6 py-3 rounded-full transition">
            Rent
          </button>
          <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-full transition">
            Explore
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {banners.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-[#3b82f6]" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
