import React from 'react';
import { navigationItems } from '../constants/data';
import { ArrowUpRight } from 'lucide-react';

export default function Header({ onExploreRooms, onAboutClick, onBlogClick, onFacilitiesClick, onContactClick }) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-white mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 8h-1V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-8 0h2V6h2v2h2V6h2v2h1v2H6V8h1V6h2v2z"/>
          </svg>
          <span className="text-xl font-bold text-white">Relax</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => {
                    if (item.label === 'Rooms') onExploreRooms();
                    else if (item.label === 'About') onAboutClick();
                    else if (item.label === 'Blog') onBlogClick();
                    else if (item.label === 'Facilities') onFacilitiesClick();
                    else if (item.label === 'Contact') onContactClick();
                  }}
                  className="text-white hover:text-blue-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button 
          className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-500 transition duration-300 flex items-center"
          onClick={onExploreRooms}
        >
          <ArrowUpRight className="mr-2" size={18} />
          Explore Rooms
        </button>
      </div>
    </header>
  );
}