import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/motorentallogo.jpg";
import Mobilenav from "./Mobilenav";
import { supabase } from "../supabase-client";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = "text-[#0f172a] hover:text-[#64748b] transition-colors";
  const activeClass = "text-[#3b82f6] font-semibold";

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get current user session
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    // Subscribe to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#f8fafc] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto py-2 px-6 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <NavLink
            to="/"
            className="hidden md:block font-mono text-xl font-bold text-[#0f172a] leading-4"
          >
            Cebu Don <br />
            moto<span className="text-[#3b82f6]">.rental</span>
          </NavLink>

          <div className="h-20 w-20">
            <img className="h-full w-full" src={logo} alt="Logo" />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Community
            </NavLink>
            <NavLink
              to="/rent"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Rent Now
            </NavLink>
            {!user ? (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${navLinkClass} ${
                    isActive ? activeClass : ""
                  } bg-[#1e293b] cursor-pointer hover:bg-[#3b82f6] transition-all px-6 py-3 text-white font-medium rounded-full text-sm w-full md:w-auto`
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

          {/* Mobile nav toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen((prev) => !prev)}>
              <svg
                className="w-6 h-6 text-[#0f172a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
      <Mobilenav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        user={user}
        handleLogout={handleLogout}
      />
    </nav>
  );
}
