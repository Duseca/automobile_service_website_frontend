import { DecrementIcon, IncrementIcon } from "./Icons";

interface ProductCardProps {
  part: {
    id: string;
    name: string;
    price: string;
  };
  isSelected: boolean;
  quantity: number;
  toggleSelection: (id: string) => void;
  updateQuantity: (id: string, change: number) => void;
  insideProducts?: boolean;
  onOpenModal?: (id: string) => void;
}

const ServiceProductCard: React.FC<ProductCardProps> = ({
  part,
  isSelected,
  quantity,
  toggleSelection,
  updateQuantity,
  insideProducts = true,
  onOpenModal,
}) => {
  return (
    <div className="flex items-center space-x-3 border border-gray-200 rounded-2xl p-4 my-3">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => toggleSelection(part.id)}
        className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-blue-500"
      />

      {/* Product Image */}
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
          {part.id === "airFilter" ? (
            <div className="w-10 h-8 bg-gray-600 rounded-sm flex items-center justify-center">
              <div className="w-8 h-6 bg-gray-800 rounded-sm"></div>
            </div>
          ) : (
            <div className="flex space-x-1">
              <div className="w-3 h-6 bg-red-600 rounded-sm"></div>
              <div className="w-3 h-6 bg-red-700 rounded-sm"></div>
              <div className="w-3 h-6 bg-red-600 rounded-sm"></div>
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-sm font-medium text-black leading-tight">{part.name}</h3>
        <p className="text-primary font-semibold text-sm mt-1">{part.price}</p>
      </div>

      {/* Conditional Controls */}
      {insideProducts ? (
        // 👉 Increment / Decrement controls
        <div className="flex items-center bg-gray-100 rounded-lg">
          <button
            onClick={() => updateQuantity(part.id, -1)}
            className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
            disabled={quantity === 0}
          >
            <DecrementIcon />
          </button>
          <span className="px-4 py-2 text-sm font-medium min-w-[40px] text-center">
            {quantity}
          </span>
          <button
            onClick={() => updateQuantity(part.id, 1)}
            className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
          >
            <IncrementIcon />
          </button>
        </div>
      ) : (
        <button
          onClick={() => onOpenModal?.(part.id)}
          className="px-4 py-2 bg-[#F5F6F8] text-black rounded-lg cursor-pointer transition"
        >
         Select Date/Time
        </button>
      )}
    </div>
  );
};

export default ServiceProductCard
