import BgImage from '../../assets/about-us.svg';
import BgImageTwo from '../../assets/about-us-II.svg'
const Simplicity = () => {
  return (
   <div className="relative w-full  bg-white">
  <div className="flex flex-col md:flex-row w-full h-full max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] md:py-20 gap-14">
  <div className="flex-[0.6] w-full">
  <img
    src={BgImage}
    alt="Business on the map"
    className="w-full h-auto md:h-[470px] object-cover rounded-lg"
  />
</div>

    <div className="flex-[1.2] flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
        Driven by Simplicity
      </h2>
      <p className="text-gray mb-4 text-sm sm:text-base leading-relaxed mt-6 text-[#83898F]">
       We saw the significant challenges faced by vehicle owners in their quest to find trustworthy and reliable services for their vehicles. At the same time, we recognized the difficulties that service providers encountered in their efforts to connect with potential customers. This realization sparked our motivation to create an innovative platform that not only bridges the gap between these two groups but also streamlines the booking process. 

      </p>

      <p className="text-gray mb-6 text-sm sm:text-base leading-relaxed text-[#83898F]">
        
Our goal is to enhance the overall experience of vehicle care, making it smarter and more efficient for everyone involved.
      </p>

    </div>
  </div>
  <div className="flex flex-col md:flex-row w-full h-full max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] md:py-20 gap-14">
 

    <div className="flex-[1.2] flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
       Why We’re Here
      </h2>
      <p className="text-gray mb-4 text-sm sm:text-base leading-relaxed mt-6 text-[#83898F]">
      Our mission is to make vehicle care not only hassle-free but also completely transparent for everyone involved in the process. Whether you’re dealing with a flat tire, booking a comprehensive detailing job, or managing the intricacies of a workshop, we’ve got all the essential tools and resources to assist you every step of the way.


      </p>

      <p className="text-gray mb-6 text-sm sm:text-base leading-relaxed text-[#83898F]">
        We envision a world where vehicle care feels less like a tedious chore and more like a simple click away, allowing you to enjoy the freedom of the open road without the burden of maintenance weighing you down. With our innovative solutions, we aim to transform the way you think about vehicle car, making it a seamless part of your life.
      </p>

    </div>
     <div className="flex-[0.6] w-full">
  <img
    src={BgImageTwo}
    alt="Business on the map"
    className="w-full h-auto md:h-[470px] object-cover rounded-lg"
  />
</div>
  </div>
</div>
  )
}

export default Simplicity
