export default function Motocard({ bike }) {
  return (
    <div className="p-4">
      <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden flex flex-col items-center text-center">
        <img
          src={bike.image}
          alt={bike.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-[#0f172a]">{bike.name}</h3>
          <p className="text-gray-600 text-sm">{bike.description}</p>
          <span
            className={`mt-2 inline-block px-3 py-1 text-xs font-medium rounded-full ${
              bike.status === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {bike.status}
          </span>
        </div>
      </div>
    </div>
  );
}
