import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] transition-opacity duration-700 pt-20">
      <Navbar />
      <div className="container mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
