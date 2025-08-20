import { useState } from "react";
import TextInput from "./TextInput";
import YellowButton from "./YellowButton";

interface FormData {
  fullName: string;
  email: string;
  mobileNumber: string;
  additionalNotes: string;
}

const ContactForm = () => {
     const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    mobileNumber: '',
    additionalNotes: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleChatWithVeFix = () => {
    // Handle chat functionality
    console.log('Chat with VeFix clicked');
  };
  return (
       <div className="w-full bg-white ">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Get In Touch
        </h1>
        <p className="text-[#83898F] text-base">
          Reach out and connect with us today for any inquiries or assistance!
        </p>
      </div>

      {/* Form */}
      <div className="space-y-6">
        <div>
          <TextInput
            type="text"
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="John Doe"
          />
        </div>
        <div>
           <TextInput
           type="email"
           label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@domain.com"
          />
        </div>
        <div>
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-900 mb-2">
            Mobile Number
          </label>
          <div className="flex">
            <div className="flex items-center px-3 py-3 bg-gray-50 border border-gray-300 border-r-0 rounded-l-lg">
              <div className="w-5 h-4 bg-red-600 rounded-sm mr-2 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-700 text-sm font-medium">+41</span>
            </div>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="576 889 324"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring focus:ring-primary focus:border-primary outline-none transition-colors placeholder-gray-400"
            />
          </div>
        </div>

        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-900 mb-2">
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            placeholder="Any additional notes goes here..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:border-primary outline-none transition-colors placeholder-gray-400 resize-none"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleChatWithVeFix}
            className="text-primary  font-medium text-sm underline transition-colors"
          >
            Chat with VeFix
          </button>
          
        <YellowButton text="Send message" wFull={false}/>
        </div>
      </div>
    </div>

  )
}

export default ContactForm
