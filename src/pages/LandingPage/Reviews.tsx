import { reviews } from '../../components/data';
import { VerifiedIcon } from '../../components/Icons';
import reviewBgImage from '../../assets/reviews-bg.svg';
import reviewsMobile from '../../assets/reviewsMobile.svg'
const Reviews = () => {
  return (
<div className="w-full h-full max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] md:py-20">
  <div>
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-black mb-6">
        Built on trust. Backed by reviews
      </h1>
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#83898F]">
        Real testimonials from our happy customers who chose us for their vehicle and 
        business needs — and have never looked back.
      </p>
    </div>

    <div
      className="relative bg-cover bg-center bg-no-repeat py-14 px-6 lg:px-20 rounded-4xl overflow-visible"
      style={{ backgroundImage: `url(${reviewBgImage})` }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 relative">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
            <div className="relative z-10 bg-white rounded-xl ">
              <div className="space-y-6">
                {reviews.map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border-gray-100 border-b p-1"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      <VerifiedIcon />
                    </div>
                    <span className="text-lg font-semibold text-gray-800">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <img
            src={reviewsMobile}
            alt="Side Illustration"
            className="w-2/3 sm:w-full lg:w-[280px] object-contain absolute top-1/2 -translate-y-1/2 right-0 lg:translate-x-1/4"
          />
        </div>
      </div>
    </div>
  </div>
</div>

)
}

export default Reviews
