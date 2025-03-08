import React from 'react';
import { ArrowRight } from 'lucide-react';
import background from '../assets/Images/background.jpg'

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="src/assets/Images/image1.jpg" alt="Hotel Pool" className="rounded-lg shadow-md w-48 object-cover h-80" />
            <img src="src/assets/Images/image2.jpg" alt="Hotel Room" className="rounded-lg shadow-md absolute right-0 bottom-10 transform translate-x-1/8 w-2/3 h-60 object-cover" />
            <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Relax hotel</h2>
            <p className="text-gray-600 mb-6">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
            </p>
            <div className="flex justify-between mb-8 ml-14 mr-14">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-500">1.2k</p>
                <p className="text-gray-600 text-sm">Hotels</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-500">4.8k</p>
                <p className="text-gray-600 text-sm">Rooms</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-500">186</p>
                <p className="text-gray-600 text-sm">Country</p>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 flex items-center">
              Explore More
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}