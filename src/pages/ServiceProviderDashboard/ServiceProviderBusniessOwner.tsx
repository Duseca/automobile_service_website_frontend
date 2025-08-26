import { useState } from "react";
import YellowButton from "../../components/YellowButton";

const ServiceProviderBusniessHours = () => {
    const [selectedDay, setSelectedDay] = useState('Sunday');
  const [startTime, setStartTime] = useState('09:30 AM');
  const [endTime, setEndTime] = useState('08:00 PM');
  const [isStartTimeOpen, setIsStartTimeOpen] = useState(false);
  const [isEndTimeOpen, setIsEndTimeOpen] = useState(false);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute of [0, 30]) {
        const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        const ampm = hour < 12 ? 'AM' : 'PM';
        const time12 = `${hour12.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${ampm}`;
        times.push(time12);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  const handleDaySelect = (day:any) => {
    setSelectedDay(day);
  };

  const handleStartTimeSelect = (time:any) => {
    setStartTime(time);
    setIsStartTimeOpen(false);
  };

  const handleEndTimeSelect = (time:any) => {
    setEndTime(time);
    setIsEndTimeOpen(false);
  };

  return (
      <div className="">

  <div><h1 className="text-2xl font-semibold text-black mb-2">Business Hours</h1>
    <p className="text-[#83898F] mb-8">
    Manage the days and timeslots the store is open for customers to avail your services.
    </p></div>
      {/* Days Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-4">Days</label>
        <div className="flex flex-wrap  gap-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => handleDaySelect(day)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedDay === day
                  ? 'bg-light-blue text-primary border-light-blue'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Starting Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Starting Time</label>
          <div className="relative">
            <button
              onClick={() => setIsStartTimeOpen(!isStartTimeOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <span className="text-gray-900">{startTime}</span>
              
            </button>
            
            {isStartTimeOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                {timeOptions.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => handleStartTimeSelect(time)}
                    className={`w-full px-3 py-2 text-left hover:bg-gray-50 text-sm ${
                      startTime === time ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                    } first:rounded-t-lg last:rounded-b-lg`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Ending Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ending Time</label>
          <div className="relative">
            <button
              onClick={() => setIsEndTimeOpen(!isEndTimeOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <span className="text-gray-900">{endTime}</span>
             
            </button>
            
            {isEndTimeOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                {timeOptions.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => handleEndTimeSelect(time)}
                    className={`w-full px-3 py-2 text-left hover:bg-gray-50 text-sm ${
                      endTime === time ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                    } first:rounded-t-lg last:rounded-b-lg`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
       <div className="flex justify-end space-x-3">
      <YellowButton
        wFull={false}
        text="Save changes"
      />
      <button className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        Cancel
      </button>
    </div>
    </div>
  )
}

export default ServiceProviderBusniessHours
