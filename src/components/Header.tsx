import { useState } from 'react';
import { Search, ShoppingCart, User, CreditCard, Phone } from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const storeMenuItems = [
    { name: 'Smartphones', hasSubmenu: true },
    { name: 'Trade-In Now', hasSubmenu: false },
    { name: 'Smart Watches', hasSubmenu: true },
    { name: 'Accessories', hasSubmenu: true },
    { name: 'Laptops and Tablets', hasSubmenu: true },
    { name: 'Smart Living', hasSubmenu: false },
    { name: 'Omani Products', hasSubmenu: true },
    { name: 'Gaming and Entertainment', hasSubmenu: true },
    { name: 'Car insurance', hasSubmenu: false },
    { name: 'Business Devices', hasSubmenu: true }
  ];

  const handleMouseEnter = (item: string) => {
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleItemClick = (item: string) => {
    console.log('redirecting to:', item);
    window.open('https://store.omantel.om', '_blank');
  };

  return (
    <div className="bg-white relative">
      {/* Top navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div className="flex space-x-8 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Personal</a>
              <a href="#" className="hover:text-gray-900">Business</a>
              <a href="#" className="hover:text-gray-900">Wholesale</a>
              <a href="#" className="hover:text-gray-900">Investors</a>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="text-orange-500 text-sm">العربية</span>
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">O</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and main nav */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-purple-600">Omantel</span>
            </div>
            <nav className="flex space-x-8 relative">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('Store')}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium border-b-2 border-orange-500 pb-4">
                  Store
                </a>
                
                {/* Store Dropdown Menu */}
                {activeDropdown === 'Store' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Store</h3>
                        <button 
                          onClick={() => handleItemClick('Store')}
                          className="text-orange-500 text-sm hover:text-orange-600 flex items-center"
                        >
                          See all
                          <div className="w-5 h-5 ml-1 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">→</span>
                          </div>
                        </button>
                      </div>
                      
                      <div className="space-y-1">
                        {storeMenuItems.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => handleItemClick(item.name)}
                            className="flex justify-between items-center py-2 px-2 hover:bg-gray-50 rounded cursor-pointer group"
                          >
                            <span className="text-gray-700 group-hover:text-gray-900">{item.name}</span>
                            {item.hasSubmenu && (
                              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-xs">→</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom section */}
                    <div className="border-t border-gray-200 p-4 bg-gray-50">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold text-gray-900">Store</h4>
                        <div className="flex space-x-2">
                          <button className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                            <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                              <div className="bg-white rounded-sm"></div>
                              <div className="bg-white rounded-sm"></div>
                              <div className="bg-white rounded-sm"></div>
                              <div className="bg-white rounded-sm"></div>
                            </div>
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600">
                            <div className="w-4 h-4 flex flex-col space-y-1">
                              <div className="h-0.5 bg-current"></div>
                              <div className="h-0.5 bg-current"></div>
                              <div className="h-0.5 bg-current"></div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">CATEGORIES</p>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#" className="text-gray-600 hover:text-purple-600">Postpaid</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Prepaid</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Home Services</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Services</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Makasib</a>
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 flex items-center space-x-2 cursor-pointer">
              <CreditCard className="w-4 h-4" />
              <span>Pay bill</span>
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 flex items-center space-x-2 cursoer-pointer">
              <Phone className="w-4 h-4" />
              <span>Top up</span>
            </button>
            <ShoppingCart className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            <User className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-3 text-sm text-gray-600 cursor-pointer">
            <span>🏠</span>
            <span>Home</span>
            <span>›</span>
            <span className="font-medium text-gray-900">Store</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;