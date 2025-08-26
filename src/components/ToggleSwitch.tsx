import React from 'react'
interface ToggleProps {
    isOn: boolean;
    handleToggle: ()=>void;
    label:string;
}
const ToggleSwitch:React.FC<ToggleProps> = ({ isOn, handleToggle, label }) => {
  return (
     <div className="flex items-center justify-between w-full">
      {/* Label */}
      <span className="text-md font-medium text-black">{label}</span>

      {/* Toggle */}
      <button
        onClick={handleToggle}
        role="switch"
        aria-checked={isOn}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300  ${
          isOn ? "bg-primary" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            isOn ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  )
}

export default ToggleSwitch