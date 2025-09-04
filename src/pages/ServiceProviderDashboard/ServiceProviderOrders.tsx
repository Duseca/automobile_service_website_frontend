import { useState } from "react";
import { VehicleOwnerOrdersData } from "../../components/data";
import ServiceProviderOrderDetail from "./modals/ServiceProviderOrderDetail";
import YellowButton from "../../components/YellowButton";
import { Link } from "react-router";

const ServiceProviderOrders = () => {
    const [activeTab, setActiveTab] = useState("All");
      const tabs = ["All", "Pending", "Processing", "Completed", "Cancelled", "Returns"];
      const [selectedOrder, setSelectedOrder] = useState({})
    const [showModal, setShowModal] = useState(false)
      const filteredOrders =
        activeTab === "All"
          ? VehicleOwnerOrdersData
          : VehicleOwnerOrdersData?.filter((order) => order.status === activeTab);
  return (
    <div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
      {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
  <div>
    <h1 className="text-2xl font-semibold text-black mb-2">Orders</h1>
    <p className="text-[#83898F]">
      Track all your past purchases — view details, check status, or reorder
      with ease.
    </p>
  </div>
  <Link to={"create"} className="w-full md:w-auto">
    <YellowButton 
      text="Create new Order" 
      wFull={true}  // full width on mobile
    />
  </Link>
</div>

    
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg cursor-pointer font-medium transition-colors ${
              activeTab === tab
                ? "text-primary bg-light-blue"
                : "text-[#83898F] bg-gray-100 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    
      {/* Table (Responsive) */}
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 text-black font-medium">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
    
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="bg-white hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {order.orderId}
                  </td>
                  <td className="px-6 py-4 text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-900">{order.date}</td>
                  <td className="px-6 py-4 text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium
                      ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Processing"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                        className="px-3 py-2 bg-[#FFCC00] text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors"
                        title="Reorder"
                      >
                        Accept
                      </button>
                      <button
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        title="Cancel"
                      >
                        Update
                      </button>
                       <button
                       onClick={()=>{
                        setShowModal(true)
                        setSelectedOrder(order)}}
                        className="px-3 py-2 bg-light-blue text-primary rounded-lg cursor-pointer transition-colors"
                        title="Cancel"
                      >
                       View
                      </button>
                    
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
     {filteredOrders.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            </div>
          )}
      
            {showModal &&   <ServiceProviderOrderDetail 
          order={selectedOrder}
          onClose={()=>setShowModal(false)}
          />}
          
      
    </div>
  )
}

export default ServiceProviderOrders
