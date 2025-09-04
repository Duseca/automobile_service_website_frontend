import { useState } from "react";
import { ServiceProviderBookingsData } from "../../../components/data";
import { Link } from "react-router";
import YellowButton from "../../../components/YellowButton";
import BookingCalendar from "./BookingCalendar";
import { CalendarViewIcon, TabularViewIcon } from "../../../components/Icons";
import ServiceProviderBookingDetail from "./ServiceProviderBookingDetail";
export interface BookingProps {
  id: string;
  serviceName: string;
  date: string; // ISO or Date string
  amount: string;
  status: "On-going" | "Completed" | "Cancelled" | "Pending" | string;
}
const ServiceProviderBooking = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"table" | "calendar">("table");
  const tabs: string[] = ["All", "On-going", "Completed", "Cancelled"];
  const [selectedBooking, setSelectedBooking] = useState<BookingProps | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const filteredBookings: BookingProps[] =
    activeTab === "All"
      ? ServiceProviderBookingsData
      : ServiceProviderBookingsData?.filter(
          (booking: BookingProps) => booking.status === activeTab
        );

  return (
    <div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
      {/* Header */}
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-black mb-2">Bookings</h1>
          <p className="text-[#83898F]">
            Track all your past bookings — view details, check status, or update them with ease.
          </p>
        </div>
        <div className="flex gap-3">
          <Link to={"create"}>
            <YellowButton text="Create new Booking" wFull={false} />
          </Link>
        </div>
      </div>

      {/* Tabs */}
        <div className="flex justify-between items-center mb-6">
  {/* Tabs on the left */}
  <div className="flex flex-wrap gap-2">
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

  {/* View toggle buttons on the right */}
  <div className="flex gap-2">
    <button
      onClick={() => setViewMode("table")}
      className={`p-2 rounded-lg font-medium ${
        viewMode === "table"
          ? "bg-light-blue text-primary"
          : "bg-gray-100 text-[#83898F] hover:text-black"
      }`}
    >
     <TabularViewIcon />

    </button>
    <button
      onClick={() => setViewMode("calendar")}
      className={`p-2 rounded-lg font-medium ${
        viewMode === "calendar"
          ? "bg-light-blue text-primary"
          : "bg-gray-100 text-[#83898F] hover:text-black"
      }`}
    >
      <CalendarViewIcon />
    </button>
  </div>
</div>


      {/* Conditional View */}
      {viewMode === "table" ? (
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-100 text-black font-medium">
                <tr>
                  <th className="px-6 py-4">Booking ID</th>
                  <th className="px-6 py-4">Service Name</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map((booking: BookingProps) => (
                  <tr
                    key={booking.id}
                    className="bg-white hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {booking.serviceName}
                    </td>
                    <td className="px-6 py-4 text-gray-900">{booking.date}</td>
                    <td className="px-6 py-4 text-gray-900">{booking.amount}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium
                          ${
                            booking.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : booking.status === "Processing"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-red-100 text-red-700"
                          }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <button className="px-3 py-2 bg-[#FFCC00] text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors">
                          Reschedule
                        </button>
                        <button className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                          Reject
                        </button>
                        <button
                          onClick={() => {
                            setShowModal(true);
                            setSelectedBooking(booking);
                          }}
                          className="px-3 py-2 bg-light-blue text-primary rounded-lg cursor-pointer transition-colors"
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
      ) : (
        <BookingCalendar bookings={filteredBookings} />
      )}

      {filteredBookings.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
        </div>
      )}
      {showModal && <ServiceProviderBookingDetail booking={selectedBooking} onClose={()=>{setShowModal(false)}}/>}
    </div>
  );
};

export default ServiceProviderBooking
