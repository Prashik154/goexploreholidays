export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">WildTrails Safaris</h3>
            <p className="text-gray-400 mb-4">
              Crafting unforgettable wildlife experiences since 2005. 
              Committed to ethical tourism and conservation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Destinations</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Ranthambore National Park</a></li>
              <li><a href="#" className="hover:text-white">Bandhavgarh Tiger Reserve</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Safari Experiences</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Photography Safaris</a></li>
              <li><a href="#" className="hover:text-white">Luxury Wildlife Tours</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Forest Road, Ranthambore, Rajasthan</p>
              <p>Email: info@wildtrails.com</p>
              <p>Phone: +91 98765 43210</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2023 WildTrails Safaris. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}