import { useState } from "react";
import { howItWorks } from "../../components/data";


const HowItWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleStepClick = (index:any) => {
    setCurrentSlide(index);
  };
  return (
 <div className="w-full max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] md:py-20">
  <div className="grid lg:grid-cols-2 gap-12 items-start">
    <div className="flex flex-col justify-between h-full">
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
        How It Works?
      </h1>
      <div className="space-y-6  ">
        {howItWorks?.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div
              key={index}
              onClick={() => handleStepClick(index)}
              className={`flex items-center p-4 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer border ${
                currentSlide === index
                  ? "border-primary bg-light-blue"
                  : "border-gray-100 bg-white"
              }`}
            >
              <div className="bg-primary p-4 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <IconComponent />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="flex flex-col justify-start lg:justify-center items-center h-auto">
      <p className="text-gray-600 text-base md:text-lg leading-relaxed text-left mb-6">
        Get services and buying products for your cars has never been easier.
        Our streamlined process makes it simple for you to book appointments
        and confirm your vehicle of choice online.
      </p>
      <div className="bg-light-blue rounded-3xl p-6 relative overflow-hidden w-full h-auto md:h-[600px] mt-10">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={howItWorks[currentSlide].image}
            alt="slide"
            className="w-full h-full object-cover rounded-2xl shadow-md transition-all duration-500"
          />
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {howItWorks?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-blue-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>

  </div>
</div>


  )
}

export default HowItWorks
