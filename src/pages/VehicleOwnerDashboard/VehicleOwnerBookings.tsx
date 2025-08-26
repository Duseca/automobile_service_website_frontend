import { VehicleOwnerBookingsData } from "../../components/data"


const VehicleOwnerBookings = () => {
  return (
   <div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-black mb-2">
             Bookings
          </h1>
          <p className="text-[#83898F]">
            View, reschedule, or cancel your bookings easily.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-100 text-black font-medium">
            <tr>
              <th className="px-6 py-4">Booking ID</th>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Actions</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {VehicleOwnerBookingsData?.map((booking) => (
              <tr
                key={booking.id}
                className="bg-white hover:bg-gray-50 transition-colors"
              >
                {/* Booking ID */}
                <td className="px-6 py-4 text-gray-900">{booking.bookingId}</td>

                {/* Service */}
                <td className="px-6 py-4 text-gray-900">{booking.service}</td>
             
                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-600"
                        : booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
    <td className="px-6 py-4 text-gray-900">$100</td>
                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 bg-[#FFCC00] text-black rounded-lg transition-colors"
                      title="Reschedule booking"
                    >
                      Reschedule
                    </button>
                    <button
                      className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      title="Cancel booking"
                    >
                      Cancel
                    </button>
                  </div>
                </td>

                {/* Empty column */}
                <td className="px-6 py-4"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty state */}
      {VehicleOwnerBookingsData?.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 
                   002-2V7a2 2 0 00-2-2H5a2 2 0 
                   00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No bookings found
          </h3>
          <p className="text-gray-500 mb-4">
            Get started by adding your first booking.
          </p>

          <button className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors">
            Add Your First Booking
          </button>
        </div>
      )}
    </div>
  )
}

export default VehicleOwnerBookings
