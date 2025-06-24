import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/motorentallogo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#f8fafc] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto py-2 px-6 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            to={"/"}
            className="hidden md:block font-mono text-xl font-bold text-[#0f172a] leading-4"
          >
            Cebu Don <br />
            moto<span className="text-[#3b82f6]">.rental</span>
          </Link>
          <div className="h-10 w-10">
            <img className="h-[40px] w-[40px]" src={logo} alt="Logo" />
          </div>
          {/**Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to={"/"}
              className="text-[#0f172a] hover:text-[#64748b] transition-colors"
            >
              Home
            </Link>
            <Link
              to={"/community"}
              className="text-[#0f172a] hover:text-[#64748b] transition-colors"
            >
              Community
            </Link>
            <Link
              to={"/rent"}
              className="text-[#0f172a] hover:text-[#64748b] transition-colors"
            >
              Rent Now
            </Link>
            <Link
              to={"/login"}
              className="text-[#0f172a] hover:text-[#64748b] transition-colors"
            >
              Log In
            </Link>
          </div>

          {/**Mobile nav button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen((prev) => !prev)}>
              <svg
                className="w-6 h-6 text-[#0f172a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/**Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-[#ffffff]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to={"/"}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#0f172a] hover:text-white hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to={"/about-us"}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#0f172a] hover:text-white hover:bg-gray-700"
            >
              About Us
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#0f172a] hover:text-white hover:bg-gray-700"
            >
              Contct
            </Link>
            <Link
              to={"/motorcycle"}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#0f172a] hover:text-white hover:bg-gray-700"
            >
              Motorcycles
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
