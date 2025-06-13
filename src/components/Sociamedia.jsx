import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function SocialMedia() {
  return (
    <>
      <div className="">
        <h1 className="text-lg font-medium text-center mb-4">
          Our Social Media <br />
        </h1>
        <div className="flex justify-center gap-3">
          <FaFacebook className="text-2xl text-[#1e293b] hover:text-[#3b82f6] transition-colors duration-300 cursor-pointer" />
          <FaInstagram className="text-2xl text-[#1e293b] hover:text-[#3b82f6] transition-colors duration-300 cursor-pointer" />
          <FaTwitter className="text-2xl text-[#1e293b] hover:text-[#3b82f6] transition-colors duration-300 cursor-pointer" />
          <FaFacebookMessenger className="text-2xl text-[#1e293b] hover:text-[#3b82f6] transition-colors duration-300 cursor-pointer" />
        </div>
      </div>
    </>
  );
}
