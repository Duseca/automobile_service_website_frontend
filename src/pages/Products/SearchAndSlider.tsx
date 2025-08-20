import React, { useState } from 'react'
import { BackArrowIcon, SearchIcon } from '../../components/Icons';
import { productCategories } from '../../components/data';
const SearchAndSlider = () => {
     const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('service-parts');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    console.log('Selected category:', categoryId);
  };

  const scrollLeft = () => {
    const container = document.getElementById('categories-container');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('categories-container');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  return (
    <div className="bg-white max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px]">
      <div className="px-4 py-6">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search category, parts, brand or keywords..."
              className="w-full px-4 py-3 pr-12 text-black border border-gray-200 rounded-full focus:outline-none focus:ring focus:ring-primary focus:border-transparent transition-all"
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-blue-500 hover:text-blue-600 transition-colors"
            ><SearchIcon />

            </button>
          </div>
        </div>
        <div className="relative ">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
            style={{ marginLeft: '-16px' }}
          >
           <BackArrowIcon />
          </button>
          <div
            id="categories-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide "
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {productCategories?.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex-shrink-0 cursor-pointer transition-all duration-200 `}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-20 h-20 rounded-xl overflow-hidden mb-3 transition-all duration-200`}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors text-center ${
                      activeCategory === category.id
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
            style={{ marginRight: '-16px' }}
          >
            <BackArrowIcon />
          </button>
        </div>
      </div>

      <style >{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default SearchAndSlider
