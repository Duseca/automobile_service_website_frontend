import { useState } from "react";
import ToggleSwitch from "../../components/ToggleSwitch";
import YellowButton from "../../components/YellowButton";


const ServiceProviderSettings = () => {
    const [notifications, setNotifications] = useState({
        serviceReminders: true,
        paymentConfirmations: true,
        promotionsOffers: false,
        smsAlerts: false,
        newBlogs: true
      });
    
    const handleToggle = (key: keyof typeof notifications) => {
      setNotifications(prev => ({
        ...prev,
        [key]: !prev[key],
      }));
    };
  return (
     <div className="w-full mx-auto p-6 bg-white rounded-3xl">
      {/* Header */}
      <div>
          <h1 className="text-2xl font-semibold text-black mb-2">
            Settings
          </h1>
          <p className="text-[#83898F]">
            Customize your experience  and stay in control of what updates you receive.
          </p>
        </div>

      <div className="my-6">
          <div className="space-y-4">
          <ToggleSwitch 
            isOn={notifications.serviceReminders} 
            handleToggle={() => handleToggle('serviceReminders')}
            label="Booking Updates"
          />
          
          <ToggleSwitch 
            isOn={notifications.paymentConfirmations} 
            handleToggle={() => handleToggle('paymentConfirmations')}
            label="Promotional Offers"
          />
          
          <ToggleSwitch 
            isOn={notifications.promotionsOffers} 
            handleToggle={() => handleToggle('promotionsOffers')}
            label="SMS Alerts"
          />
          
          <ToggleSwitch 
            isOn={notifications.smsAlerts} 
            handleToggle={() => handleToggle('smsAlerts')}
            label="Email Notifications"
          />
        </div>
      </div>

   
     <div className="flex justify-end items-center space-x-4 mt-8">
         <YellowButton wFull={false} text="Save preferences" handleClick={()=>{}} />
            <button
    type='button'
              className={`bg-white border border-gray-100 cursor-pointer text-black px-4 py-2 rounded-md font-medium transition-colors
              
                `}
            >Cancel
            </button>
         
        </div>
      
    </div>
  )
}

export default ServiceProviderSettings
