export default function Rentnow() {
  return (
    <>
      <div className="relative bg-rental-hero bg-cover bg-center w-full h-[400px] md:h-[600px] lg:h-[650px] overflow-hidden  bg-no-repeat py-32 px-4">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-90 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <p className="uppercase tracking-widest  font-bold text-[#3b82f6] mb-2 ">
            Rent Now
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-10">
            Book moto Rental
          </h1>

          {/* Booking Card */}
          <div className="bg-white shadow-lg rounded-xl md:rounded-full p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full max-w-6xl mx-auto">
            <select className="bg-transparent px-4 py-2 outline-none text-sm text-gray-700">
              <option>Choose Motor-cycle</option>
            </select>

            <label className="text-xs text-gray-500 ml-1">From</label>
            <input
              type="date"
              className="bg-transparent px-4 py-2 outline-none text-sm text-gray-700"
              defaultValue="2025-06-18"
            />

            <label className="text-xs text-gray-500 ml-1">to</label>
            <input
              type="date"
              className="bg-transparent px-4 py-2 outline-none text-sm text-gray-700"
              defaultValue="2025-06-24"
            />

            <button className="bg-[#1e293b] cursor-pointer hover:bg-[#3b82f6] transition-all px-6 py-3 text-white font-medium rounded-full text-sm w-full md:w-auto">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
