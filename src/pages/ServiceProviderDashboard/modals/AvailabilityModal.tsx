import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import Dropdown from "../../../components/Dropdown";
import YellowButton from "../../../components/YellowButton";

type TimeSlot = {
  id: string;
  startTime: string;
  endTime: string;
};

const AvailabilityModal = ({
  onClose,
  showModal,
}: {
  onClose: () => void;
  showModal: boolean;
}) => {
  const [selectedDay, setSelectedDay] = useState("Sunday");
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([
    { id: "1", startTime: "09:30 AM", endTime: "11:00 AM" },
    { id: "2", startTime: "01:00 PM", endTime: "03:00 PM" },
    { id: "3", startTime: "05:30 PM", endTime: "08:30 PM" },
  ]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const addTimeSlot = () => {
    const newSlot: TimeSlot = {
      id: Date.now().toString(),
      startTime: "09:00 AM",
      endTime: "05:00 PM",
    };
    setTimeSlots([...timeSlots, newSlot]);
  };

  const removeTimeSlot = (id: string) => {
    setTimeSlots(timeSlots.filter((slot) => slot.id !== id));
  };

  const updateTimeSlot = (
    id: string,
    field: "startTime" | "endTime",
    value: string
  ) => {
    setTimeSlots(
      timeSlots.map((slot) =>
        slot.id === id ? { ...slot, [field]: value } : slot
      )
    );
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black cursor-pointer"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold mb-4">Set Availability</h2>
        <p className="text-gray-600 mb-6">
          Define working hours or availability details here.
        </p>

        <div className="space-y-6">
          {/* Days Selection */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-900">Days</h3>
            <div className="flex flex-wrap gap-2">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedDay === day
                      ? "bg-light-blue text-primary"
                      : "bg-white text-[#83898F] border border-[#DEE1E7]"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Timeslots */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Timeslots</h3>

            <div className="space-y-3">
              {timeSlots.map((slot) => (
                <div key={slot.id} className="flex items-center space-x-3">
                  <div className="flex-1">
                    <Dropdown
                      name={`startTime-${slot.id}`}
                      value={slot.startTime}
                      options={timeSlots.map((t) => t.startTime)}
                      onChange={(e) =>
                        updateTimeSlot(slot.id, "startTime", e.target.value)
                      }
                    />
                  </div>

                  <div className="flex-1">
                    <Dropdown
                      name={`endTime-${slot.id}`}
                      value={slot.endTime}
                      options={timeSlots.map((t) => t.endTime)}
                      onChange={(e) =>
                        updateTimeSlot(slot.id, "endTime", e.target.value)
                      }
                    />
                  </div>

                  <button
                    onClick={() => removeTimeSlot(slot.id)}
                    className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <BsTrash className="w-5 h-5 cursor-pointer" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add More Button */}
            <button
              onClick={addTimeSlot}
              className="flex items-center space-x-2 text-primary cursor-pointer font-medium text-sm"
            >
              <span>＋</span>
              <span className="underline">Add more</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="col-span-2 flex justify-end gap-3 mt-4">
          <YellowButton wFull={false} text="Save changes" />
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const TimeDropdown: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}> = ({ value, onChange, placeholder = "Select time" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const timeOptions = [
    "12:00 AM", "12:30 AM", "01:00 AM", "01:30 AM", "02:00 AM", "02:30 AM",
    "03:00 AM", "03:30 AM", "04:00 AM", "04:30 AM", "05:00 AM", "05:30 AM",
    "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM",
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
    "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM",
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
        flex items-center justify-between"
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <span>⌄</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {timeOptions.map((time) => (
            <button
              key={time}
              onClick={() => {
                onChange(time);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
            >
              {time}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailabilityModal;
