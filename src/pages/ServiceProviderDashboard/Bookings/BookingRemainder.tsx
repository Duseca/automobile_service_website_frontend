import { useState } from "react"
import Dropdown from "../../../components/Dropdown"
import { CrossIcon } from "../../../components/Icons"
import YellowButton from "../../../components/YellowButton"


const BookingRemainder = ({onClose}:{onClose : (val:any)=>void}) => {
    const [selectedDate, setSelectedDate] = useState('')
  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
  <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto p-6 relative space-y-5">
    
    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-black cursor-pointer"
    >
      <CrossIcon />
    </button>

    <h2 className="text-xl font-semibold text-gray-900 mb-6">
      Set Reminder
    </h2>

    <p className="text-[#83898F]">
      Never miss your service! Set a reminder to get notified before your
      scheduled appointment.
    </p>

    <Dropdown
      label="Reminder Options"
      name="selectedDate"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      options={[
        "15 minutes before",
        "30 minutes before",
        "1 hour before",
      ]}
    />

    <YellowButton
      text="Save changes"
      wFull={true}
      handleClick={onClose}
    />
  </div>
</div>
    
  )
}

export default BookingRemainder
