'use client';
import { useState } from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    guests: 2,
    safariType: 'Morning Safari (5:30 AM)'
  });

  const destinations = [
    'Ranthambore National Park',
    'Bandhavgarh Tiger Reserve',
    'Kanha National Park'
  ];

  const safariTypes = [
    'Morning Safari (5:30 AM)',
    'Evening Safari (3:30 PM)',
    'Full Day Safari'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-green-700 p-5 text-white">
        <h3 className="text-xl font-semibold">Book Your Safari</h3>
        <p className="text-green-100 text-sm">Secure your wildlife experience</p>
      </div>

      <div className="p-6">
        {step === 1 ? (
          <div className="space-y-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <MapPin className="w-4 h-4 mr-2" />
                Destination
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select National Park</option>
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>{dest}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Calendar className="w-4 h-4 mr-2" />
                Safari Date
              </label>
              <input
                type="date"
                name="date"
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!formData.destination || !formData.date}
              className={`w-full mt-4 py-3 rounded-lg font-medium ${
                (!formData.destination || !formData.date)
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              Continue
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <span className="mr-2">🕒</span>
                Safari Type
              </label>
              <select
                name="safariType"
                value={formData.safariType}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                {safariTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Users className="w-4 h-4 mr-2" />
                Number of Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                ))}
              </select>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Your Safari</h4>
              <div className="space-y-2 text-sm">
                <p><span className="text-gray-600">Destination:</span> {formData.destination}</p>
                <p><span className="text-gray-600">Date:</span> {formData.date}</p>
                <p><span className="text-gray-600">Type:</span> {formData.safariType}</p>
                <p><span className="text-gray-600">Guests:</span> {formData.guests}</p>
              </div>
              
              <button className="w-full mt-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium">
                Complete Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}