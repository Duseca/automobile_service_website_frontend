import { useRef, useState } from "react";
import {
  Calendar,
  momentLocalizer,
  type EventProps as RBCEventProps,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ServiceProviderBookingDetail from "./ServiceProviderBookingDetail";
import BookingRemainder from "./BookingRemainder";

interface Order {
  id: number;
  orderId: string;
  customer: string;
  date: string;
  amount: string;
  status: string;
}

// Localizer
const localizer = momentLocalizer(moment);

// Booking props (your raw data)
interface BookingProps {
  id: string;
  serviceName: string;
  status: string;
  date: string; // ISO string
}

// Calendar event interface
export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  status?: string;
  serviceName?: string;
}

// Component props
interface BookingCalendarProps {
  bookings: BookingProps[];
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ bookings }) => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [menuPos, setMenuPos] = useState<{ top: number; left: number } | null>(
    null
  );

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeModal, setActiveModal] = useState<{
    type: string;
    order: Order | null;
  }>({
    type: "",
    order: null,
  });

  // Convert bookings → calendar events
  const events: CalendarEvent[] = bookings?.map((booking) => ({
    id: booking.id,
    title: `${booking.serviceName} (${booking.status})`,
    start: new Date(booking.date),
    end: new Date(booking.date),
    allDay: true,
    status: booking.status,
    serviceName: booking.serviceName,
  }));

  // Custom event renderer
  const CustomEvent: React.FC<RBCEventProps<CalendarEvent>> = ({ event }) => {
    return (
      <div
        className="cursor-pointer"
        onClick={(e) => {
          const eventRect =
            (e.currentTarget as HTMLElement).getBoundingClientRect();
          const containerRect = containerRef.current?.getBoundingClientRect();

          if (containerRect) {
            setMenuPos({
              top: eventRect.top - containerRect.top - 60, // 60px above event
              left: eventRect.left - containerRect.left,
            });
          }

          setSelectedEvent(event);
        }}
      >
        {event.title}
      </div>
    );
  };

  const closeMenu = () => {
    setSelectedEvent(null);
    setMenuPos(null);
  };

  const closeModal = () => {
    setActiveModal({ type: "", order: null });
  };

  return (
    <div
      ref={containerRef}
      className="h-[600px] bg-white rounded-2xl border border-gray-200 shadow-sm p-4 relative"
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", borderRadius: "1rem" }}
        className="rbc-custom"
        components={{
          event: CustomEvent,
        }}
      />

      {/* Popup Menu */}
      {selectedEvent && menuPos && (
        <div
          className="absolute bg-white rounded-lg shadow-lg p-1  w-48 z-50"
          style={{
            top: menuPos.top,
            left: menuPos.left,
          }}
        >
          <button
            className="w-full text-left px-4 py-2 text-sm border-b border-gray-200 hover:bg-gray-100"
            onClick={() => {
              setActiveModal({ type: "view", order: null });
              closeMenu();
            }}
          >
            View Details
          </button>
          <button
            className="w-full text-left px-4 py-2 text-sm border-b border-gray-200 hover:bg-gray-100"
            onClick={() => {
              setActiveModal({ type: "reminder", order: null });
              closeMenu();
            }}
          >
            Set Reminder
          </button>
          <button
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            onClick={() => {
              setActiveModal({ type: "feedback", order: null });
              closeMenu();
            }}
          >
            Give Feedback
          </button>
        </div>
      )}

      {/* Modal */}
      {activeModal.type && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96 relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              ✕
            </button>

            {activeModal.type === "view" && (
             <ServiceProviderBookingDetail booking={selectedEvent} onClose={()=>setActiveModal({type:"", order:null})} />
            )}

            {activeModal.type === "reminder" && (
             <BookingRemainder  onClose={()=>setActiveModal({type:"", order:null})} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
