
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
      <p className="text-base md:text-lg">
       Looking after your car shouldn’t be a hassle. That’s why we’ve made it easy to find trusted
        <br className="hidden md:block" /> 
       services, list your business, or just explore what’s out there—all in one place.
      </p>
    </div>
    </div>
    
  </div>
  )
}

export default Banner
