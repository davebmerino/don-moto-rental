export default function Steps({ card }) {
  return (
    <>
      <div className="relative bg-white rounded-xl shadow-md p-6 flex-1 transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden">
        <div className="absolute right-0 bottom-0 text-black text-[180px] font-bold opacity-20 leading-none select-none pointer-events-none z-1">
          {card.number}
        </div>
        <h5 className="text-xl font-semibold text-slate-800 mb-2 text-center">
          {card.subTitle}
        </h5>
        <p className="text-slate-600 text-center">{card.content}</p>
      </div>
    </>
  );
}
