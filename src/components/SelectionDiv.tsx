
type Category = {
  id: string | number;
  title: string;
  image: string;
  disabled?: boolean;
};

interface SelectionDivProps {
  categories: Category[];
  selectedCategory: string | number | null;
  onSelect: (val:any, val2:any) => void;
};
const SelectionDiv = ({categories, selectedCategory, onSelect}: SelectionDivProps) => {
      
  return (
     <div className="space-y-2 w-full">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`
            flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-200
            border-gray-200 bg-white
            ${category.disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
          onClick={() => !category.disabled && onSelect(category.id, category.disabled)}
        >
          {/* Category Image */}
          <div className="flex-shrink-0 mr-4">
            <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Category Title */}
          <div className="flex-grow">
            <h3
              className={`
                text-base font-medium
                ${category.disabled ? "text-gray-400" : "text-gray-900"}
              `}
            >
              {category.title}
            </h3>
          </div>

          {/* Radio Button */}
          <div className="flex-shrink-0 ml-4">
            <div
              className={`
                w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200
                ${
                  selectedCategory === category.id
                    ? "border-primary bg-primary"
                    : category.disabled
                    ? "border-gray-300"
                    : "border-gray-300 hover:border-blue-400"
                }
              `}
            >
              {selectedCategory === category.id && !category.disabled && (
                <div className="w-2 h-2 bg-white rounded-full"></div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SelectionDiv
