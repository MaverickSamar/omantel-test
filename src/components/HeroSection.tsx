const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-purple-600">Omantel</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Get Galaxy Z Fold7<br />
                or Galaxy Z Flip7 or<br />
                trade-in & save more.
              </h1>
              
              <button className="cursor-pointer bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                PRE-ORDER NOW
              </button>
            </div>
          </div>

          {/* Right content - Samsung phones */}
          <div className="relative">
                <img 
                  src="banner.jpg" 
                  alt="Samsung Galaxy Z Flip7" 
                  className="w-full h-auto object-contain transform"
                />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;