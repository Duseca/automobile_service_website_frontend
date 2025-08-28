
import bannerImage from '../../assets/bannerImg.svg';
const Banner = () => {
  return (
      <div 
  className="w-full  text-white p-4 md:p-14 flex items-center "
    style={{ backgroundImage:`url(${bannerImage})`,  backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div className="flex items-center max-w-6xl mx-auto gap-12">
    <img  />
    <div className="flex-1 text-black">
       <div className="flex-1 text-black">
     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-5">
        Simplify Car Care
      </h2>
      <p className="text-sm md:text-lg leading-relaxed">
        Looking after your car shouldn’t be a hassle. VeFix makes it easy to:
      </p>
      <ul className="list-disc pl-6 text-sm md:text-lg space-y-1 mt-2">
        <li>Find trusted services</li>
        <li>List your business</li>
        <li>Explore what’s out there</li>
      </ul>
      <p className="text-sm md:text-lg mt-4">
        All in one platform. Whether you want services, list your business, or
        just explore what’s out there—all in one place.
      </p>
    </div>
    </div>
    </div>
    
  </div>
  )
}

export default Banner
