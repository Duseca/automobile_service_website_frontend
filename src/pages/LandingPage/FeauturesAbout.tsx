import { featuresAbout } from "../../components/data";

const FeauturesAbout = () => {   
  return (
    <div className="bg-light-blue py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
         <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Your all-in-one pit stop for smarter vehicle<br />
            care and smoother business.
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresAbout?.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-6 "
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#FEF6D5] rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeauturesAbout
