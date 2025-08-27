import { useState } from "react";
import YellowButton from "../../components/YellowButton";


const ServiceProviderLanguage = () => {
        const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
    
    const languages = [
      "English",
      "French",
      "German",
      "Italian"
    ];
    
    const handleLanguageChange = (language:string) => {
      setSelectedLanguage(language);
    };
    
  return (
      <div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-black mb-2">
            Language
          </h1>
          <p className="text-[#83898F]">
           Customize your preferences for language to personalize your experience.
          </p>
        </div>
        
      </div>
      <div className="w-full b">
   <div className="space-y-2 ">
        {languages.map((language) => (
          <div key={language} className="flex items-center justify-between pb-2">
            <span className="text-black text-base font-medium">{language}</span>
            <button 
              onClick={() => handleLanguageChange(language)}
              className="relative rounded-full w-6 h-6 flex items-center justify-center border border-gray-300"
            >
              {selectedLanguage === language && (
                <div className="absolute w-4 h-4 bg-primary rounded-full"></div>
              )}
            </button>
          </div>
        ))}
      </div>
       <div className="flex justify-end space-x-3">
      <YellowButton
        wFull={false}
        text="Save Preferences"
      />
      <button className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        Cancel
      </button>
    </div>
     
    </div>
    </div>
  )
}

export default ServiceProviderLanguage
