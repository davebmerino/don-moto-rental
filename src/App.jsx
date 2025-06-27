import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LogIn from "./pages/LogIn";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] transition-opacity duration-700 pt-20">
      <Navbar />
      <div className="container mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/community"
            element={
              <div className="max-w-5xl text-2xl text-center font-bold align-middle min-h-90 flex items-center justify-center mx-auto">
                Community Page Is still work on progress
              </div>
            }
          />
          <Route
            path="/rent"
            element={
              <div className="max-w-5xl text-2xl text-center font-bold align-middle min-h-90 flex items-center justify-center mx-auto">
                Rent Now Page Is still work on progress
              </div>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="*"
            element={
              <div className="max-w-5xl text-2xl text-center font-bold align-middle min-h-90 flex items-center justify-center mx-auto">
                404 Not Found
              </div>
            }
          />
          <Route path="/admin" element={<div>Admin Page</div>} />
          <Route path="/user" element={<div>User Page</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
