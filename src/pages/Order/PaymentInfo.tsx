import { useState } from "react";
import TextInput from "../../components/TextInput";
import YellowButton from "../../components/YellowButton";


const PaymentInfo = ({ nextStep }: { nextStep: () => void }) => {
     const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '1234 5678 9012 3456',
    expiryDate: '',
    cvv: ''
  });

  return (
   <div className="">
  <div className="rounded-t-lg bg-gray-100 p-2">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">
      Payment Information
    </h3>
  </div>

  <div >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
      {/* Left Column */}
      <div className="space-y-6">
        {/* Cardholder Name */}
        <div>
          <TextInput
            label="CardHolder name"
            type="text"
            name="cardHolderName"
            value={formData.cardholderName}
            placeholder="Name on the card"
            onChange={(e) =>
              setFormData({ ...formData, cardholderName: e.target.value })
            }
          />
        </div>

        {/* Expiry Date */}
        <div>
          <label
            htmlFor="expiryDate"
            className="block text-sm font-semibold text-black mb-1"
          >
            Expiry Date
          </label>
          <div className="relative">
            <input
              id="expiryDate"
              type="time"
              placeholder="MM / YY"
              className="w-full px-3 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-900"
            />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* Card Number */}
        <div>
          <label
            htmlFor="cardNumber"
            className="block text-sm font-semibold text-black mb-1"
          >
            Card Number
          </label>
          <div className="relative">
            <input
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-900"
            />
            {/* Mastercard Icon */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-red-500 opacity-80"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-400 opacity-80 -ml-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CVV */}
        <div>
          <label
            htmlFor="cvv"
            className="block text-sm font-semibold text-black mb-1"
          >
            CVV
          </label>
          <input
            id="cvv"
            type="text"
            placeholder="3-digit code"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-900"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="my-20">
  <YellowButton text="Proceed to next step" wFull={true} handleClick={nextStep} />
  </div>
</div>

  )
}

export default PaymentInfo
