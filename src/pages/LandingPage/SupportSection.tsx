import { supportData } from "../../components/data"

const SupportSection = () => {
  return (
     <div className="bg-gradient-to-br from-white via-white to-[#80B8DD] ">
      <div className="w-full h-full max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-6">
            Support That's Always By Your Side
          </h1>
          <p className="text-[#83898F] text-lg leading-relaxed max-w-2xl mx-auto">
            From quick answers to personalized assistance, we've got your back every step of the 
            way. Because your success is our priority.
          </p>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {supportData.map((item, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center bg-white rounded-2xl shadow-md p-4 h-full"
    >
      <div className="w-full h-40 md:h-48 lg:h-56 rounded-xl overflow-hidden mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-[#83898F] text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  )
}

export default SupportSection
