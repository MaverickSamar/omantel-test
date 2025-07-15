import { useState } from 'react';
import { Grid, List, ChevronDown } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  colors: string[];
  badge?: string;
  badgeColor?: string;
  buttonText: string;
  buttonColor: string;
}

const ProductGrid = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('Recommended');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy Z Fold7',
      image: 'Fold7_Silver.jpg',
      price: '736.190',
      originalPrice: 'OMR',
      colors: ['#E5E5E5', '#000000', '#F4A460'],
      badge: '1 mo free',
      badgeColor: 'purple',
      buttonText: 'Preorder now',
      buttonColor: 'purple'
    },
    {
      id: 2,
      name: 'Samsung Galaxy Z Flip7',
      image: 'Flip7_Blue.jpg',
      price: '418.100',
      originalPrice: 'OMR',
      colors: ['#4169E1', '#000000', '#F4A460'],
      badge: '1 mo free',
      badgeColor: 'purple',
      buttonText: 'Preorder now',
      buttonColor: 'purple'
    },
    {
      id: 3,
      name: 'Galaxy A1 Samsung Galaxy S25 Edge 5G',
      image: 's25_edge_jetblack.jpg',
      price: '420.950',
      originalPrice: 'OMR',
      colors: ['#000000', '#D4AF37'],
      buttonText: 'See details',
      buttonColor: 'orange'
    },
    {
      id: 4,
      name: 'Apple iPhone 16e',
      image: 'iPhone-16e-black',
      price: '',
      colors: ['#000000', '#FFFFFF'],
      buttonText: 'See details',
      buttonColor: 'orange'
    },
    {
      id: 5,
      name: 'Galaxy A1 Samsung Galaxy S25 Ultra',
      image: 'sm-s931_galaxys25_front_mint.jpg',
      price: '',
      colors: ['#4169E1', '#000000', '#90EE90'],
      buttonText: 'See details',
      buttonColor: 'orange'
    },
    {
      id: 6,
      name: 'Galaxy A1 Samsung Galaxy S25',
      image: 'sm-s938_galaxys25ultra_front_titaniumblack.jpg',
      price: '',
      colors: ['#D4AF37', '#000000', '#90EE90'],
      buttonText: 'See details',
      buttonColor: 'orange'
    }
  ];

  const categories = [
    'Smartphones',
    'Trade In Now',
    'Smart Watches',
    'Accessories',
    'Laptops and Tablets',
    'Smart Living',
    'Omani Products',
    'Gaming and Entertainment',
    'Car Insurance',
    'Business Devices'
  ];

  const sortOptions = [
    'Recommended',
    'Price: High to Low',
    'Price: Low to High',
    'Newest arrivals'
  ];

  const handleSortSelect = (option: string) => {
    setSortBy(option);
    setIsDropdownOpen(false);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 pr-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Store</h2>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">CATEGORIES</h3>
            {categories.map((category, index) => (
              <div key={index} className="flex items-center space-x-2 py-2 text-gray-700 hover:text-purple-600 cursor-pointer">
                <span className="text-orange-500">›</span>
                <span className="text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-100 text-orange-600' : 'text-gray-400'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-100 text-orange-600' : 'text-gray-400'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sorting</span>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[140px] justify-between"
                >
                  <span>{sortBy}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {sortOptions.map((option, index) => (
                      <button
                        key={option}
                        onClick={() => handleSortSelect(option)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                          sortBy === option ? 'bg-orange-100 text-orange-600' : 'text-gray-700'
                        } ${index === 0 ? 'rounded-t-md' : ''} ${index === sortOptions.length - 1 ? 'rounded-b-md' : ''}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                {/* Product name at the top */}
                <div className="p-4 pb-2">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight">{product.name}</h3>
                </div>

                {/* Image and color variants section */}
                <div className="relative px-4 pb-4">
                  {product.badge && (
                    <div className={`absolute bottom-4 right-2 ${product.badgeColor === 'purple' ? 'bg-purple-600' : 'bg-green-500'} text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 z-10`}>
                      <img src="pre-order.svg" alt="pre-order" />
                    </div>
                  )}
                  
                  <div className="flex">
                    {/* Color options on the left */}
                    <div className="flex flex-col space-y-2 mr-4 pt-4">
                      {product.colors.map((color, index) => (
                        <div key={index} className="relative">
                          <div 
                            className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                              index === 0 ? 'border-orange-500' : 'border-gray-300'
                            }`}
                            style={{ backgroundColor: color }}
                          />
                          {index > 0 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-4 h-0.5 bg-red-500 transform rotate-45"></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Product image */}
                    <div className="flex-1">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Pricing and button section */}
                <div className="px-4 pb-4">
                  {product.price && (
                    <div className="mb-4">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-xs text-gray-500">Starts from</span>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-sm font-medium text-gray-900">{product.originalPrice}</span>
                          <span className="text-xl font-bold text-gray-900">{product.price}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">With 5% VAT OMR 772.990</div>
                      </div>
                    </div>
                  )}

                  <button 
                    className={`w-full py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                      product.buttonColor === 'purple' 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    {product.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;