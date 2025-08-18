import { useState, useEffect } from "react";

const VeFixBookingSection = () => {
  const slides = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1200&q=80",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Content Section above slider */}
      <div className="relative z-10 p-8 sm:p-12 lg:p-16 bg-white/90 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            24/7 online booking
          </h2>

          <div className="space-y-6 text-gray-700">
            <p className="text-base sm:text-lg leading-relaxed">
              With VeFix, customers can easily view your availability,
              schedule appointments, and manage their bookings 24/7 — right from
              the VeFix Web.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Set your booking preferences, share your link, and let us handle
              the rest while you focus on what you do best.
            </p>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["Easy scheduling", "bg-blue-500"],
              ["24/7 availability", "bg-green-500"],
              ["Auto rebooking", "bg-purple-500"],
              ["Client management", "bg-orange-500"],
            ].map(([text, color], i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className={`w-2 h-2 ${color} rounded-full`}></div>
                <span className="text-sm text-gray-600">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Background */}
      <div className="absolute inset-0 z-0">
        {slides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition z-20"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition z-20"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                current === i ? "bg-white" : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VeFixBookingSection;
