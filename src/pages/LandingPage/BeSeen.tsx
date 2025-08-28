import YellowButton from "../../components/YellowButton"
import BgImage from '../../assets/BeSeenBg.svg';
const BeSeen = () => {
  return (
<div className="relative w-full min-h-[400px] md:h-[622px] bg-white">
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
        Be Seen. Be Found. Be on the Map
      </h2>
      <p className="text-gray mb-4 text-sm sm:text-base leading-relaxed mt-6 text-[#83898F]">
    Put your business on the map — literally.
With VeFix, customers can discover your garage or service at the right time, in the right place.
Your business deserves to be visible, trusted, and valued.
      </p>

      <p className="text-gray mb-6 text-sm sm:text-base leading-relaxed text-[#83898F]">
        Your business deserves to be seen, heard, and valued.
      </p>

      <div className="flex items-center flex-wrap gap-4">
        <YellowButton text="Explore More" wFull={false} />
      </div>
    </div>
  </div>
</div>


  )
}

export default BeSeen
