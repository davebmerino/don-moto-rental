import Aboutcol1 from "./Aboutcol1";
import Aboutcol2 from "./Aboutcol2";

export default function About() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-16 px-4 max-w-6xl mx-auto mb-40 gap-20 bg-[#ffffff] rounded-xl shadow-md p-6 flex-1 transition-all hover:shadow-lg hover:-translate-y-1">
        <Aboutcol1 />
        <Aboutcol2 />
      </div>
    </>
  );
}
