import { useState } from 'react';
import { CrossIcon } from '../../../components/Icons'
import Dropdown from '../../../components/Dropdown';
import ToggleSwitch from '../../../components/ToggleSwitch';
import YellowButton from '../../../components/YellowButton';
interface FormData {
  allowOnlineBooking: boolean;
  acceptCashPayment: boolean;
  mobileServices: boolean;
  interval: string;
  paddingTime: string;
  parallelClients: string;
  processingTimeDuring: string;
  processingTimeAfter: string;
  timeRate: string;
  messageToClient: string;
  questionForClient: string;
}
const MoreSettingsModal = ({ onClose }: { onClose: () => void }) => {
    const [formData, setFormData] = useState<FormData>({
    allowOnlineBooking: true,
    acceptCashPayment: true,
    mobileServices: false,
    interval: "",
    paddingTime: "Not Set",
    parallelClients: "",
    processingTimeDuring: "Not Set",
    processingTimeAfter: "Not Set",
    timeRate: "Not Set",
    messageToClient: "",
    questionForClient: "",
  });

  const handleChange = (name: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black cursor-pointer"
        >
          <CrossIcon />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-black mb-6">More Settings</h2>

        <div className="space-y-6">
          {/* Header */}
          <h3 className="text-sm font-semibold text-gray-900">
            No-Show Protection
          </h3>

          {/* Message to client */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-black">
              Message to client
            </label>
            <textarea
              value={formData.messageToClient}
              onChange={(e) =>
                handleChange("messageToClient", e.target.value)
              }
              placeholder="e.g. Please arrive 10 minutes early for preparation."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={3}
            />
          </div>

          {/* Question for client */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-black">
              Question for client
            </label>
            <textarea
              value={formData.questionForClient}
              onChange={(e) =>
                handleChange("questionForClient", e.target.value)
              }
              placeholder="e.g. Do you have any allergies we should know about?"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={3}
            />
          </div>

          {/* Toggle Options */}
          <div className="space-y-4">
            <ToggleSwitch
              isOn={formData.allowOnlineBooking}
              handleToggle={() =>
                handleChange("allowOnlineBooking", !formData.allowOnlineBooking)
              }
              label="Allow clients to book online"
            />

            <ToggleSwitch
              isOn={formData.acceptCashPayment}
              handleToggle={() =>
                handleChange("acceptCashPayment", !formData.acceptCashPayment)
              }
              label="Accept cash payment in store"
            />

            <ToggleSwitch
              isOn={formData.mobileServices}
              handleToggle={() =>
                handleChange("mobileServices", !formData.mobileServices)
              }
              label="Mobile Services"
            />
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Dropdown
              label="Interval"
              name="interval"
              value={formData.interval}
              onChange={(val) => handleChange("interval", val)}
              options={["15 min", "30 min", "45 min", "1 hour"]}
            />

            <Dropdown
              label="Padding Time"
              name="paddingTime"
              value={formData.paddingTime}
              onChange={(val) => handleChange("paddingTime", val)}
              options={["Not Set", "5 min", "10 min", "15 min", "30 min"]}
            />

            <Dropdown
              label="Parallel Clients"
              name="parallelClients"
              value={formData.parallelClients}
              onChange={(val) => handleChange("parallelClients", val)}
              options={["1", "2", "3", "4", "5+"]}
            />

            <Dropdown
              label="Processing Time During Service"
              name="processingTimeDuring"
              value={formData.processingTimeDuring}
              onChange={(val) => handleChange("processingTimeDuring", val)}
              options={["Not Set", "10 min", "20 min", "30 min"]}
            />

            <Dropdown
              label="Processing Time After Service"
              name="processingTimeAfter"
              value={formData.processingTimeAfter}
              onChange={(val) => handleChange("processingTimeAfter", val)}
              options={["Not Set", "10 min", "20 min", "30 min"]}
            />

            <Dropdown
              label="Time Rate"
              name="timeRate"
              value={formData.timeRate}
              onChange={(val) => handleChange("timeRate", val)}
              options={["Not Set", "Hourly", "Daily", "Per Session"]}
            />
          </div>

 <div className="flex flex-col space-y-4 mt-6">
          <YellowButton text="Save Changes" wFull={true}   />
          <button
            onClick={onClose}
              className="text-primary text-lg font-semibold cursor-pointer "
          >
            Cancel
          </button>
        </div>
</div>
      </div>
    </div>
  )
}

export default MoreSettingsModal
