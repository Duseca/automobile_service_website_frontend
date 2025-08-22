import { orderItems } from "../../components/data"
import { DecrementIcon, IncrementIcon } from "../../components/Icons"
import YellowButton from "../../components/YellowButton"

const OrderSummary = ({ nextStep }: { nextStep: () => void }) => {
  return (
 <div className="min-h-screen">
  <div className="bg-white rounded-lg mb-10">
    {/* Table Section */}
    <div className="overflow-x-auto w-full">
  <table className="w-full text-sm md:text-base font-semibold text-black uppercase tracking-wide rounded-t-lg bg-gray-100 min-w-[600px]">
    <thead>
      <tr>
        <th className="p-3 text-left">Item Name</th>
        <th className="p-3 text-center">Unit Price</th>
        <th className="p-1 text-center">Quantity</th>
        <th className="p-3 text-center">Total</th>
        <th className="p-3 text-center">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100">
      {orderItems.map((item) => (
        <tr key={item.id} className="bg-white">
          {/* Item Info */}
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
              <h3 className="text-xs md:text-sm text-gray-600 line-clamp-1">
                Air Filter - D50
              </h3>
            </div>
          </td>

          {/* Unit Price */}
          <td className="p-3 text-center">${item.price.toFixed(2)}</td>

          {/* Quantity Controls */}
          <td className="p-1 text-center">
             <div className="inline-flex items-center border border-gray-200 rounded-lg bg-gray-100">
              <button
                className="p-2 border-r border-gray-200"
              >
                <DecrementIcon />
              </button>
              <span className="font-semibold min-w-[40px] text-center">
               7
              </span>
              <button
                className="p-2 border-l border-gray-200"
              >
                <IncrementIcon />
              </button>
            </div>
          </td>

          {/* Total Price */}
          <td className="p-3 text-center text-primary font-semibold">
            ${(item.price * item.quantity).toFixed(2)}
          </td>

          {/* Actions */}
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


    {/* Voucher Section */}
    <div className="my-4">
      <div className="mb-4">
        <div className="rounded-t-lg bg-gray-100 p-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Discount/Voucher Code
          </h3>
         
        </div>
      </div>
 <p className="text-sm text-gray-600 mb-4">
            If you have any voucher code, apply here
          </p>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="e.g., FREE20P"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:border-transparent outline-none"
        />
        <button className="px-6 py-2 bg-primary text-white font-medium rounded-lg ">
          Apply
        </button>
      </div>
    </div>

<div className="my-10">
  <h3 className="text-lg font-semibold text-gray-900 mb-4">
    Summary of charges
  </h3>

  <table className="w-full text-sm lg:text-base">
    <tbody >
      <tr>
        <td className="py-2 text-gray-600">Items Total</td>
        <td className="py-2 text-right font-medium text-primary">$43</td>
      </tr>
      <tr>
        <td className="py-2 text-gray-600">Shipping Fee</td>
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

  </div>
  <YellowButton text="Proceed to Next" wFull={true} handleClick={()=>nextStep()} />
</div>

  )
}

export default OrderSummary
