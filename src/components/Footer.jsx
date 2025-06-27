import { FaFacebookF, FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import logo from "../images/motorentallogo.jpg";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-[#1e293b] text-[#e2e8f0] py-10 px-4 mt-20 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo & Description */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-25 h-25 rounded-full" />
            <div>
              <h4 className="text-xl font-bold">Cebu Don Moto Rentals</h4>
              <p className="text-sm text-[#cbd5e1]">
                Your adventure starts here.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-md font-semibold mb-2">Contact Us</h5>
            <p className="text-sm">📞 +63 912 345 6789</p>
            <p className="text-sm">📧 info@donmotorentals.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="text-md font-semibold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://m.me"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition"
              >
                <FaFacebookMessenger />
              </a>
              <a
                href="https://m.me"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#334155] mt-8 pt-6 text-center text-sm text-[#94a3b8]">
          © {new Date().getFullYear()} Cebu Don Moto Rentals. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}
