import { useState, useEffect } from "react";

const VeFixBookingSection = () => {
const slides = [
    "https://images.pexels.com/photos/2014773/pexels-photo-2014773.jpeg",
    "https://images.pexels.com/photos/2014773/pexels-photo-2014773.jpeg",
    "https://images.pexels.com/photos/2014773/pexels-photo-2014773.jpeg",
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
    <div className="w-full h-full max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] md:py-20">
<div className="relative bg-white rounded-3xl overflow-hidden h-[400px] sm:h-[450px] lg:h-[600px]">
   
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
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition z-20"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition z-20"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
                current === i ? "bg-white" : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 lg:inset-y-0 lg:right-20 lg:left-auto z-10 flex items-center justify-end">
        <div className="w-full lg:w-[40%] xl:w-[50%] p-6 sm:p-10 lg:p-12 bg-white/90 backdrop-blur-sm rounded-3xl ">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            24/7 online booking
          </h2>

          <div className="space-y-3 sm:space-y-4 text-black">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              With VeFix, customers can easily view your availability, schedule
              appointments, and manage their bookings 24/7 — right from the
              VeFix Web.
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Set your booking preferences, share your link, and let us handle
              the rest while you focus on what you do best.
            </p>
          </div>

          
        </div>
      </div>
    </div>
    </div>
  );
};

export default VeFixBookingSection;
