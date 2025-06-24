export default function ContactUs() {
  return (
    <div className="px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f172a] mb-12">
        Contact Us
      </h2>

      <div className="flex flex-col-reverse md:flex-row gap-10 items-stretch">
        {/* Map Section */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31549.324216199637!2d123.8676576!3d10.3111119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99c858937f4f5%3A0x8a9f9f73e364816!2sCebu%20City%2C%20Cebu!5e0!3m2!1sen!2sph!4v1719231912345"
            className="w-full h-full rounded-xl shadow-md border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-semibold text-[#1e293b] mb-6">
            Get in Touch
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#1e293b] hover:bg-[#3b82f6] cursor-pointer text-white px-6 py-2 rounded-full shadow-md transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
