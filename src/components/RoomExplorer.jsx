import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { roomTypes } from '../constants/data';
import rooms from '../assets/Images/rooms.jpg'

export default function RoomExplorer() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl text-center font-bold">Luxurious Accommodations</h2>
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300" onClick={() => scroll('left')}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300" onClick={() => scroll('right')}>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto" ref={scrollRef}>
          <div className="flex space-x-6" style={{ width: `${roomTypes.length * 300}px` }}>
            {roomTypes.map((room, index) => (
              <RoomCard key={index} name={room} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RoomCard({ name }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow flex-shrink-0" style={{ width: '280px' }}>
      <img src={`${rooms}`} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold mb-2">{name}</h3>
        <div className="flex text-yellow-400">
          {'★'.repeat(5)}
        </div>
        <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={() => alert(`You clicked on ${name}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}