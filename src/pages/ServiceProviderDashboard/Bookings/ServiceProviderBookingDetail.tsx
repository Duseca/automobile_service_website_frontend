
import { orderItems, vehicleDeliveryData } from "../../../components/data";
import { CreditCardIcon, CrossIcon } from "../../../components/Icons";

interface ServiceProviderBookingDetailProps {
  booking: any;
  onClose: () => void;
}
const ServiceProviderBookingDetail = ({ booking, onClose }: ServiceProviderBookingDetailProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto p-6 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black cursor-pointer"
        >
          <CrossIcon />
        </button>

        <h2 className="text-xl font-semibold text-gray-900 mb-6">View Booking Details</h2>
        
        {/* Booking Items */}
        <table className="w-full text-sm md:text-sm font-semibold text-black uppercase tracking-wide rounded-t-lg bg-gray-100 min-w-[600px]">
          <thead>
            <tr>
              <th className="p-3 text-left">Item Name</th>
              <th className="p-3 text-center">Unit Price</th>
              <th className="p-3 text-center">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orderItems.map((item) => (
              <tr key={item.id} className="bg-white">
                {/* Item Info */}
                <td className="p-3 flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
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

                {/* Unit Price */}
                <td className="p-3 text-center">${item.price.toFixed(2)}</td>

                {/* Total Price */}
                <td className="p-3 text-center text-primary font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Extra Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
          <VehicleInfo />
          <BookingInfo booking={booking} />
        </div>

        <PaymentInfo />
        <SummaryOfCharges />

        <div className="flex flex-row items-center justify-center space-x-4 mt-6">
           <button className="px-3 py-2 bg-[#FFCC00] text-black font-medium rounded-lg w-full transition-colors">
                          Accept
                        </button>
            <button 
            onClick={onClose}
            className="px-3 py-2 bg-red-500 text-white rounded-lg w-full  transition-colors">
                                    Reject
                                    </button>                      
          
        </div>
      </div>
    </div>
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
        {vehicleDeliveryData?.slice(0, 3)?.map((item, index) => (
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
};

const PaymentInfo = () => {
  return (
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
              Card Holder Name
            </h3>
            <p className="text-sm text-[#83898F]">Oliver Jamieson</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black mb-1">
              Card Number
            </h3>
            <div className="flex items-center space-x-2">
              <CreditCardIcon />
              <p className="text-sm text-[#83898F]">*******7547</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingInfo = ({ booking }: { booking: any }) => {
  return (
    <div>
      {/* Header */}
      <div className="rounded-t-lg bg-gray-100 p-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Booking Details
        </h3>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        {/* Booking ID */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Booking ID</h3>
          <p className="text-sm text-[#83898F]">#BK12345</p>
        </div>

        {/* Customer */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Customer</h3>
          <p className="text-sm text-[#83898F]">John Doe</p>
        </div>

        {/* Date */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Date</h3>
          <p className="text-sm text-[#83898F]">{booking?.date}</p>
        </div>

        {/* Amount */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Amount</h3>
          <p className="text-sm text-[#83898F]">{booking?.amount}</p>
        </div>

        {/* Status */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Status</h3>
          <p
            className={`text-sm font-medium ${
              booking?.status === "Pending"
                ? "text-yellow-600"
                : booking?.status === "Completed"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {booking?.status}
          </p>
        </div>
      </div>
    </div>
  );
};

const SummaryOfCharges = () => {
  return (
    <div className="my-10">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Summary of Charges
      </h3>

      <table className="w-full text-sm lg:text-base">
        <tbody>
          <tr>
            <td className="py-2 text-gray-600">Items Total</td>
            <td className="py-2 text-right font-medium text-primary">$43</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-600">Delivery Fee</td>
            <td className="py-2 text-right font-medium text-green-600">FREE</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-600">Taxes and Fees</td>
            <td className="py-2 text-right font-medium text-primary">$343</td>
          </tr>
          <tr>
            <td colSpan={2} className="pt-3">
              <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                <span className="text-lg font-semibold text-primary">Grand Total</span>
                <span className="text-xl font-bold text-primary">$2443</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ServiceProviderBookingDetail
