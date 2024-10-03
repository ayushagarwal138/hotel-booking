import React from 'react';
import { Wifi, Coffee, Dumbbell,Gem } from 'lucide-react';

const facilities = [
  { name: 'Free Wi-Fi', icon: Wifi },
  { name: 'Restaurant', icon: Coffee },
  { name: 'Fitness Center', icon: Dumbbell },
  { name: 'Spa', icon: Gem  },
];

export default function FacilitiesSection() {
  console.log('Rendering FacilitiesSection');
  try {
    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <facility.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold">{facility.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error in FacilitiesSection:', error);
    return <div>Error rendering Facilities Section</div>;
  }
}