import { Phone, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Quick contact */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="font-bold text-xl">1234</div>
                  <div className="text-sm text-gray-400">Call Centre Number</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="font-bold text-xl">1305</div>
                  <div className="text-sm text-gray-400">International Operator</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="font-bold text-xl">1235</div>
                  <div className="text-sm text-gray-400">Business Call Centre</div>
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">CSR</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Media Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Innovation Labs</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Customer Care</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Payment Channels</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Find Outlet</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Coverage</a></li>
            </ul>
          </div>

          {/* Business */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Business</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">iSupplier</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wholesale</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">e-Tendering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Excavation</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Policies</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Whistleblowing Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">FOLLOW US ON OUR SOCIAL MEDIA</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">O</span>
              </div>
              <span>Oman Telecommunications Company © 2022</span>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-white transition-colors">Copyrights</a>
              <a href="#" className="hover:text-white transition-colors">Standard Customer Agreement</a>
              <a href="#" className="hover:text-white transition-colors">SiteMap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;