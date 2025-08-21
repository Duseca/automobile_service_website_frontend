interface DropdownProps {
  label: string;
  name: any;
  value: string;
  options: string[];
  onChange: (val:any) => void;
}
const Dropdown = ({ label, name, value, options, onChange }: DropdownProps) => {
  return (
     <div >
      <label className="block text-sm font-semibold text-black mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Select {label}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
