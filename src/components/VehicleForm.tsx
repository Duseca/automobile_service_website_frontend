import Dropdown from './Dropdown';

interface VehicleFormProps {
  formData: {
    make: string;
    model: string;
    year: string;
    engineSize: string;
    fuelType: string;
    transmissionType: string;
  };
  handleChange: (val: any) => void;
}

const VehicleForm = ({ formData, handleChange }: VehicleFormProps) => {
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: 30 },
    (_, i) => (currentYear - i).toString()
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Dropdown
        label="Make"
        name="make"
        value={formData.make}
        options={['Toyota', 'Honda', 'Ford', 'BMW', 'Audi']}
        onChange={handleChange}
      />
      <Dropdown
        label="Model"
        name="model"
        value={formData.model}
        options={['Corolla', 'Civic', 'Mustang', 'X5', 'A4']}
        onChange={handleChange}
      />
      <Dropdown
        label="Manufacture Year"
        name="year"
        value={formData.year}
        options={yearOptions}
        onChange={handleChange}
      />
      <Dropdown
        label="Engine Size"
        name="engineSize"
        value={formData.engineSize}
        options={['1.0L', '1.6L', '2.0L', '3.0L', '4.0L']}
        onChange={handleChange}
      />
      <Dropdown
        label="Fuel Type"
        name="fuelType"
        value={formData.fuelType}
        options={['Petrol', 'Diesel', 'Hybrid', 'Electric']}
        onChange={handleChange}
      />
      <Dropdown
        label="Transmission Type"
        name="transmissionType"
        value={formData.transmissionType}
        options={['Manual', 'Automatic', 'Semi-Automatic']}
        onChange={handleChange}
      />
    </div>
  );
};

export default VehicleForm;
