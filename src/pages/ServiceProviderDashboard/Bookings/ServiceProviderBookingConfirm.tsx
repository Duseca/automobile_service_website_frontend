import { useState } from "react";
import YellowButton from "../../../components/YellowButton";
import { orderItems, vehicleDeliveryData } from "../../../components/data";
import Modal from "../../../components/Modal";

const ServiceProviderBookingConfirm = () => {
    const [showModal, setShowModal] = useState(false)
    console.log('hellow')
  return (
    <>
  <div>
    <div className="min-h-screen">
      <div className="bg-white rounded-lg mb-10">
        {/* Order Items Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-sm md:text-base font-semibold text-black uppercase tracking-wide rounded-t-lg bg-gray-100 min-w-[600px]">
            <thead>
              <tr>
                <th className="p-3 text-left">Item Name</th>
                <th className="p-3 text-center">Unit Price</th>
                <th className="p-3 text-center">Total</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orderItems.map((item) => (
                <tr key={item.id} className="bg-white">
                  <td className="p-3 flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm md:text-base font-medium text-gray-900 line-clamp-2">
                        {item.name}
                      </h3>
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="p-3 text-center text-primary font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-3 text-center">
                    <button className="p-2 bg-[#FF3B30] text-white rounded-lg transition-colors hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vehicle Info + Date/Time */}
        <div className="my-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <VehicleInfo />
            </div>

            <div>
              <div className="rounded-t-lg bg-gray-100 p-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Date/Time
                </h3>
              </div>

              <div className="space-y-4 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1">
                      Date
                    </h3>
                    <p className="text-sm text-[#83898F]">
                      Wednesday 2nd May, 2025
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1">
                      Time Slot
                    </h3>
                    <p className="text-sm text-[#83898F]">12:30 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Info + Payment Info */}
        <div className="my-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <CustomerInfo />
            </div>

            <div>
              <div className="rounded-t-lg bg-gray-100 p-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Payment Information
                </h3>
              </div>

              <div className="space-y-4 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1">
                      Payment Status
                    </h3>
                    <p className="text-sm text-[#83898F]">Paid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary of Charges */}
        <div className="my-10">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <div className="rounded-t-lg bg-gray-100 p-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Summary of Charges
                </h3>
              </div>

              <table className="w-full text-sm lg:text-base">
                <tbody>
                  <tr>
                    <td className="py-2 text-gray-600">Items Total</td>
                    <td className="py-2 text-right font-medium text-primary">
                      $43
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">Shipping Fee</td>
                    <td className="py-2 text-right font-medium text-green-600">
                      FREE
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">Taxes and Fees</td>
                    <td className="py-2 text-right font-medium text-primary">
                      $343
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="pt-3">
                      <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                        <span className="text-lg font-semibold text-primary">
                          Grand Total
                        </span>
                        <span className="text-xl font-bold text-primary">
                          $2443
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="my-10">
        <YellowButton
          text="Confirm Booking"
          wFull={true}
          handleClick={() => setShowModal(true)}
        />
        
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          title="Continue"
          modalTitle="Order Confirmed!"
          description="The manual order has been placed for your customer. You can view and manage this order from your orders dashboard anytime."
          link="/"
          bottomText=""
        /> 
       
      </div>
    </div>
  </div>
</>

  )
}
const VehicleInfo = () => {
  return (
    <div>
      {/* Header */}
      <div className="rounded-t-lg bg-gray-100 p-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Vehicle</h3>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        {vehicleDeliveryData?.slice(0,3)?.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-sm font-semibold text-black mb-1">
              {item.label}
            </h3>
            <p className="text-sm text-[#83898F]">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
const CustomerInfo = () => {
  return (
    <div>
      <div className="rounded-t-lg bg-gray-100 p-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Details</h3>
      </div>

      <div className="space-y-4 p-4">
        <div className="flex justify-between">
            <div  className={`flex-1`}>
              <h3 className="text-sm font-semibold text-black mb-1">
                Full name
              </h3>
              <p className="text-sm text-[#83898F]">Marcus Rafiee</p>
            </div>
        
        </div>

        <div className="flex justify-between">
          {[1,2]?.map((_ ,  index) => (
            <div key={index} className={`flex-1 ${index === 0 ? "mr-8" : ""}`}>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {index ===0 ? 'Mobile Number' : 'Email address'}
              </h3>
              <p className="text-sm text-[#83898F]">{index ===0 ? '+31 45454 545454' : 'marcus.rafiee3@email.com'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceProviderBookingConfirm
