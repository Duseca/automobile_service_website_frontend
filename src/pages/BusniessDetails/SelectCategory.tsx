import { useState } from 'react';
import BgImage from '../../assets/authBg.svg';
import { BusniessSelectCategory } from '../../components/data';
import SelectionDiv from '../../components/SelectionDiv';
import { Link } from 'react-router';
import YellowButton from '../../components/YellowButton';
const SelectCategory = () => {
     const [selectedCategory, setSelectedCategory] = useState<string>('car-accessories');


  const handleCategorySelect = (categoryId: string, disabled?: boolean) => {
    if (!disabled) {
      setSelectedCategory(categoryId);
    }
  };
  return (
    <div className="min-h-screen flex">
  {/* Left Side Background */}
  <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
    <div className="absolute inset-0 bg-black/20"></div>
    <div
      className="w-full h-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BgImage})` }}
    />
  </div>

  {/* Right Side Content */}
  <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 md:p-16 bg-[#FBFEFF]">
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-black mb-6">
          Select Your Store Category
        </h1>
        <p className="text-[#83898F] text-base">
          Choose the type of store that best describes your business.
        </p>
      </div>
    </div>
    <div className="space-y-2 w-full">
       <SelectionDiv
       categories={BusniessSelectCategory}
        selectedCategory={selectedCategory}
        onSelect={handleCategorySelect}
      />
    </div>
     <div className='mt-10 w-full'>
            <Link to={"/add-busniess-installation-category"}>
            <YellowButton text="Continue" wFull={true}  />
            </Link>
          <Link to={"/"} className="flex items-center justify-center my-6">
            <span className="text-primary font-semibold text-lg text-center">
              Skip for now
            </span>
          </Link>
          </div>
  </div>
   
</div>

  )
}

export default SelectCategory
