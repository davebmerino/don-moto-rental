import aboutPic from "../images/aboutmotorental.jpg";

export default function Aboutcol2() {
  return (
    <>
      <div className="p-5 ">
        <img
          className="rounded-xl w-[350px] h-[450px] transition-transform duration-300 hover:scale-110"
          src={aboutPic}
          alt="About Image"
        />
      </div>
    </>
  );
}
