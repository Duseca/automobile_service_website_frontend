import { useState } from "react";
import { BackIconCalendar, CrossIcon, NextIconCalendar } from "../../../components/Icons"
import YellowButton from "../../../components/YellowButton";
interface TimeSlot {
  time: string;
  available: boolean;
}
interface BookingDateAndTimeProps{
    onClose: () =>void;
}
const BookingDateAndTime = ({ onClose }: BookingDateAndTimeProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 4, 1)); // May 2025
  const [selectedDate, setSelectedDate] = useState(2);
  const [selectedTime, setSelectedTime] = useState("12:30 PM");

  const timeSlots: TimeSlot[] = [
    { time: "11:00 AM", available: true },
    { time: "11:30 AM", available: true },
    { time: "12:00 PM", available: false },
    { time: "12:30 PM", available: true },
    { time: "1:30 PM", available: false },
    { time: "2:00 PM", available: true },
    { time: "2:30 PM", available: true },
    { time: "3:30 PM", available: false },
    { time: "4:30 PM", available: true },
  ];

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Adjust for Monday start

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const handleDateSelect = (day: number) => {
    setSelectedDate(day);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const formatDate = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const days = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black cursor-pointer"
        >
          <CrossIcon />
        </button>

        <h2 className="text-lg font-semibold mb-4">Select Date/Time</h2>
        <p className="text-gray-600 mb-4">
          Select a convenient date and time to schedule this service for your
          customer.
        </p>

        <div className="flex flex-col lg:flex-row gap-6 p-4">
          {/* Calendar Section */}
          <div className="flex-1 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-semibold text-black">{monthName}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition"
                >
                  <BackIconCalendar />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition"
                >
                  <NextIconCalendar />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {/* Day headers */}
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="py-2 text-center text-xs font-semibold text-gray-500 uppercase tracking-wide"
                >
                  {day}
                </div>
              ))}

              {/* Days */}
              {days.map((day, index) => (
                <div
                  key={index}
                  className={`py-3 text-center cursor-pointer rounded-md border text-sm font-medium transition
                    ${
                      day === null
                        ? "bg-transparent border-transparent cursor-default"
                        : day === selectedDate
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-blue-300"
                    }`}
                  onClick={() => day && handleDateSelect(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Time Slots Section */}
          <div className="w-full lg:w-80 border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {formatDate(selectedDate)}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => slot.available && handleTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={`py-2 px-3 rounded-md text-sm font-medium transition
                    ${
                      slot.time === selectedTime && slot.available
                        ? "bg-primary text-white border border-primary"
                        : slot.available
                        ? "bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-gray-50"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                    }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="my-5">
          <YellowButton text="Save changes" wFull={true} handleClick={onClose} />
        </div>
      </div>
    </div>
  );
};
export default BookingDateAndTime
