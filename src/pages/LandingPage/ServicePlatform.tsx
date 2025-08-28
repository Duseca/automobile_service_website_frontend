
import { serviceListCardData } from "../../components/data"

const ServicePlatform = () => {
  return (
   <div className="bg-gradient-to-br from-secondary/50 via-light-blue to-light-blue p-8">
      <div className="w-full h-full max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-6">
            Got a Service to List or a Ride to Fix?
          </h1>
          <p className="text-[#83898F] text-lg leading-relaxed max-w-2xl mx-auto">
           Whether you’re growing your business or caring for your car, VeFix has you covered.
Service providers can list what they offer. Car owners can find exactly what they need — fast.
          </p>
        </div>
       <div className="grid md:grid-cols-2 gap-8 lg:px-24">
       {serviceListCardData.map((card) => (
  <div
    key={card.id}
    className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 text-white"
    style={{
      backgroundImage: `url(${card.bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="mb-6">
      <div className="w-12 h-12  bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
        {card.icon}
      </div>
      <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
      <p className="leading-relaxed">{card.description}</p>
    </div>
    {card.button}
  </div>
))}


        </div>
      </div>
    </div>
  )
}

export default ServicePlatform
