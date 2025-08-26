import { orderItems, vehicleDeliveryData } from "../../../components/data";
import { CreditCardIcon } from "../../../components/Icons";

interface Props {
  order: any;
  onClose: () => void;
}

const OrderDetailsModal = ({ order, onClose }: Props) => (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">View Booking Details</h2>
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
                    <div className="w-10 h-10  bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
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
        
                  {/* Actions */}
                 
                </tr>
              ))}
            </tbody>
          </table>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
          <VehicleInfo />
          <OrderInfo order={order}/>
          </div>
          <PaymentInfo />
        <div className="flex flex-col space-y-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="text-primary text-lg font-semibold cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
        
        
    </div>
);
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
const OrderInfo = ({order}:{order : any}) =>{
    return(     <div>
      {/* Header */}
      <div className="rounded-t-lg bg-gray-100 p-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Order Details
        </h3>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        {/* Order ID */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Order ID</h3>
          <p className="text-sm text-[#83898F]">{order.orderId}</p>
        </div>

        {/* Customer */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Customer</h3>
          <p className="text-sm text-[#83898F]">{order.customer}</p>
        </div>

        {/* Date */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Date</h3>
          <p className="text-sm text-[#83898F]">{order.date}</p>
        </div>

        {/* Amount */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Amount</h3>
          <p className="text-sm text-[#83898F]">{order.amount}</p>
        </div>

        {/* Status */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Status</h3>
          <p
            className={`text-sm font-medium ${
              order.status === "Pending"
                ? "text-yellow-600"
                : order.status === "Completed"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {order.status}
          </p>
        </div>
      </div>
    </div>)
}
export default OrderDetailsModal;
