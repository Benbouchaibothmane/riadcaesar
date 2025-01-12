import React from 'react';
import { Search, Menu, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-[#588157]">Riad Caesar</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-8">
              <a href="#suites" className="text-gray-700 hover:text-[#588157]">Suites</a>
              <a href="#location" className="text-gray-700 hover:text-[#588157]">Location</a>
              <a href="#reviews" className="text-gray-700 hover:text-[#588157]">Reviews</a>
            </nav>
            <button className="bg-[#588157] text-white px-4 py-2 rounded-lg hover:bg-[#3a5a40] transition-colors">
              Book Now
            </button>
          </div>
          
          <div className="md:hidden">
            <button className="p-2">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}