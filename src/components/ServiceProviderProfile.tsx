import { useState } from "react";
import { EnvelopeIcon, LocationIcon, PhoneIcon, StarIcon, VerifiedIcon } from "./Icons";
import ReviewServiceProviderModal from "./ReviewServiceProviderModal";

const ServiceProviderProfile = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
    const business = {
    businessName: "TomAck Autos",
    rating: 4.8,
    reviewCount: 184,
    description:
      "Since our establishment in 2010, we have been a trusted name in automotive services. We specialize in comprehensive vehicle maintenance, including meticulous brake repairs and precise engine diagnostics. We pride ourselves on our commitment to prompt and reliable service, making sure your car is always in the best hands.",
    location: "Houston, TX",
    phone: "2892227",
    email: "tomackautos@gmail.com",
    isVerified: true,
  };

  const contactInfo = [
    { label: "Location", value: business.location, icon:<LocationIcon/> },
    { label: "Phone", value: business.phone, icon: <PhoneIcon />},
    { label: "Email", value: business.email, icon: <EnvelopeIcon /> },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
   <div className="bg-white">
  <div className="flex flex-col md:flex-row gap-6 items-start">
    
    {/* Left Image */}
    <div className="flex-shrink-0">
      <img
        src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Left"
        className="w-48 h-full object-cover rounded-lg"
      />
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-gray-900">{business.businessName}</h1>
          {business.isVerified && <VerifiedIcon />}
        </div>
        <button className="text-primary bg-primary/10 p-3 rounded-md font-medium">Contact Store</button>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex">{renderStars(business.rating)}</div>
        <span className="font-medium text-gray-900">{business.rating}</span>
        <span className="text-gray-500">({business.reviewCount})</span>
        <span className="text-primary">•</span>
     <div className="relative group">
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-primary cursor-pointer hover:underline text-sm"
              >
                Leave a review
              </button>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 hidden group-hover:block bg-gray-200 p-6 text-black text-base rounded py-1 px-2 whitespace-nowrap">
               You can only leave a review after purchasing a service or product from this store.
              </div>
            </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-md leading-relaxed mb-6">
        {business.description}
      </p>

      {/* Info Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
        {["Opening Hours", "View policies", "FAQs", "Terms & Conditions"].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-primary">•</span>
            <button className="text-primary hover:text-blue-700">{item}</button>
          </div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-gray-600 text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  <ReviewServiceProviderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
</div>


  )
}

export default ServiceProviderProfile
