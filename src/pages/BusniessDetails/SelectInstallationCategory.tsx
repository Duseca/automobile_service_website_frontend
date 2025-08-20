
import { useState } from 'react';
import BgImage from '../../assets/authBg.svg';
import { BusniessSelectCategory } from '../../components/data';
import SelectionDiv from '../../components/SelectionDiv';
import { Link } from 'react-router';
import YellowButton from '../../components/YellowButton';
import Modal from '../../components/Modal';
const SelectInstallationCategory = () => {
      const [selectedCategory, setSelectedCategory] = useState<string>('car-accessories');
    const [showModal, setShowModal] = useState(false);
    
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

  <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 md:p-16 bg-[#FBFEFF]">
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-black mb-6">
        Select Installation Categories
        </h1>
        <p className="text-[#83898F] text-base">
         Choose the installation categories to help others find your services.
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
            <YellowButton text="Continue" wFull={true} handleClick={()=>setShowModal(true)} />

          <Link to={"/"} className="flex items-center justify-center my-6">
            <span className="text-primary font-semibold text-lg text-center">
              Skip for now
            </span>
          </Link>
          </div>
  </div>
     <Modal
        show={showModal}
        link='/allow-access'
        title={'Allow Access'}
        modalTitle='Allow Access to Contacts?'
        description='Granting access to your contact list lets you send invites, connect with customers, and manage communications — all within the platform.'
        onClose={() => setShowModal(false)}
        bottomText='Not now'
      />
</div>
  )
}

export default SelectInstallationCategory
