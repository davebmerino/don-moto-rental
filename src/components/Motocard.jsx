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
              bike.available === true
                ? "bg-green-300 text-green-900"
                : "bg-red-300 text-red-500"
            }`}
          >
            {bike.status}
          </span>
        </div>
      </div>
    </div>
  );
}
