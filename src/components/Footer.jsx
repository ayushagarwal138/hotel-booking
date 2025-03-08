import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ayush's Hotel</h3>
            <p className="text-gray-300">Luxury and comfort at your fingertips.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Rooms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Facilities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">123 Hotel Street, City, Country</p>
            <p className="text-gray-300">Phone: +1 234 567 8900</p>
            <p className="text-gray-300">Email: info@ayushhotel.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 Ayush's Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}