export default function Servicecard({ image, title, description }) {
  return (
    <>
      <div className="w-full md:w-1/3 bg-white shadow-sm rounded-xl text-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
        {image && (
          <img
            className="w-full h-55 object-cover rounded-t-lg "
            src={image}
            alt={title}
          />
        )}
        <div className="flex flex-wrap">
          <h3 className="text-2xl text-[#0f172a] px-4 mx-auto font-bold">
            {title}
          </h3>
          <p className=" text-sm font-light p-4 mb-4">{description}</p>
        </div>
      </div>
    </>
  );
}
