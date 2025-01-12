import React from 'react';
import { Calendar, Users, Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[70vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6 italic">
          Experience Luxury in the Heart of Marrakech
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          A traditional Moroccan palace with modern comfort
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r p-2">
              <Calendar className="text-[#588157]" />
              <input type="date" className="w-full focus:outline-none focus:ring-2 focus:ring-[#588157] rounded" placeholder="Check in" />
            </div>
            <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r p-2">
              <Calendar className="text-[#588157]" />
              <input type="date" className="w-full focus:outline-none focus:ring-2 focus:ring-[#588157] rounded" placeholder="Check out" />
            </div>
            <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r p-2">
              <Users className="text-[#588157]" />
              <select className="w-full focus:outline-none focus:ring-2 focus:ring-[#588157] rounded">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <button className="bg-[#588157] text-white p-3 rounded-lg hover:bg-[#3a5a40] transition-colors flex items-center justify-center">
              <Search className="mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}