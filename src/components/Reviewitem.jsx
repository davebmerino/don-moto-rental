export default function Reviewitem({ data }) {
  const stars = "⭐".repeat(data.stars);
  return (
    <>
      <div className="min-w-auto align-middle text-center bg-[#ffffff]  shadow-sm rounded-xl p-4">
        <h3 className="text-lg font-semibold">{data.userName}</h3>
        <p className="text-gray-600">{data.comment}</p>
        <div className="text-yellow-500 mt-2 text-lg">{stars}</div>
      </div>
    </>
  );
}
