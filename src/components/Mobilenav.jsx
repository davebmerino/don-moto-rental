import User from "../pages/User";
import { NavLink } from "react-router-dom";

export default function Mobilenav({
  menuOpen,
  setMenuOpen,
  user,
  handleLogout,
}) {
  return (
    <>
      {/* Mobile nav menu */}
      {menuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-[#3b82f6] font-semibold" : "text-[#0f172a]"
                } hover:text-white hover:bg-gray-700`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/community"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-[#3b82f6] font-semibold" : "text-[#0f172a]"
                } hover:text-white hover:bg-gray-700`
              }
            >
              Community
            </NavLink>
            <NavLink
              to="/rent"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-[#3b82f6] font-semibold" : "text-[#0f172a]"
                } hover:text-white hover:bg-gray-700`
              }
            >
              Rent Now
            </NavLink>
            {!user ? (
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? "text-[#3b82f6] font-semibold" : "text-[#0f172a]"
                  } hover:text-white bg-[#1e293b] cursor-pointer hover:bg-[#3b82f6] transition-all px-6 py-3 text-white font-medium rounded-full text-sm w-full md:w-auto`
                }
              >
                Log In
              </NavLink>
            ) : (
              <div className="flex items-center gap-3">
                <img
                  src={user.user_metadata.avatar_url || "/default-avatar.png"}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
