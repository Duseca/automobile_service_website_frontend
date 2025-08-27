import { useState } from 'react'
import TextInput from '../../../components/TextInput'
import YellowButton from '../../../components/YellowButton';

const ServiceProviderCustomerDetail = ({ nextStep }: { nextStep: () => void }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phoneNumber: "",
  });
  return (
        <>
        {/* Header */}
        <div className="rounded-t-lg bg-gray-100 p-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Customer Details
            </h3>
        </div>

        {/* Form Content */}
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
            {/* Left Column */}
            <div className="space-y-6">
                {/* Customer Name */}
                <div>
                <TextInput
                    label="Customer name"
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    placeholder="John Doe"
                    onChange={(e) =>
                    setFormData({ ...formData, customerName: e.target.value })
                    }
                />
                </div>

                {/* Phone Number */}
                <div>
                <label className="block text-sm font-semibold text-black mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                    <div className="flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                    <span className="text-red-500 font-bold text-lg">🇨🇦</span>
                    <span className="ml-2 text-sm text-gray-600">+1</span>
                    </div>
                    <input
                    type="tel"
                    name="mobile"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    placeholder="(416) 000 234"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    />
                </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
                {/* Email */}
                <div>
                <TextInput
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="abc@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                    }
                />
                </div>
            </div>
            </div>
        </div>

        {/* Button */}
        <div className="my-20">
            <YellowButton
            text="Proceed to next step"
            wFull={true}
            handleClick={nextStep}
            />
        </div>
        </>
  )
}

export default ServiceProviderCustomerDetail
