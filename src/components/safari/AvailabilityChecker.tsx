'use client';
import { useState } from 'react';
import { safariZones } from '@/app/utils/data';

export function AvailabilityChecker() {
  const [selectedDate, setSelectedDate] = useState<string>('');

  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-200 mb-16">
      <h3 className="text-lg font-semibold mb-4">Check Safari Availability</h3>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3">
          <label className="block text-sm font-medium mb-1">Select Date</label>
          <input
            type="date"
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className="md:w-2/3">
          {selectedDate ? (
            <>
              <h4 className="font-medium mb-3">Available Zones for {new Date(selectedDate).toLocaleDateString()}</h4>
              <div className="space-y-3">
                {safariZones.map((zone) => (
                  <div key={zone.id} className="p-4 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <p className="font-medium">{zone.name}</p>
                      <div className="flex gap-4 text-sm mt-1 text-gray-600">
                        <span className={zone.morningSlots > 0 ? 'text-green-600' : 'text-red-600'}>
                          Morning: {zone.morningSlots > 0 ? `${zone.morningSlots} slots` : 'Full'}
                        </span>
                        <span className={zone.eveningSlots > 0 ? 'text-green-600' : 'text-red-600'}>
                          Evening: {zone.eveningSlots > 0 ? `${zone.eveningSlots} slots` : 'Full'}
                        </span>
                      </div>
                    </div>
                    <button 
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        (zone.morningSlots > 0 || zone.eveningSlots > 0)
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      ₹{zone.price}
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-500">Select a date to check availability</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}