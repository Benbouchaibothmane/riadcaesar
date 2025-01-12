import React from 'react';
import { Wifi, Coffee, Bath, Users } from 'lucide-react';

const suites = [
  {
    name: 'Royal Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    price: 250,
    description: 'Luxurious suite with traditional Moroccan decor and modern amenities',
    capacity: 2,
  },
  {
    name: 'Garden Suite',
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80',
    price: 200,
    description: 'Peaceful suite overlooking our beautiful garden courtyard',
    capacity: 2,
  },
  {
    name: 'Terrace Suite',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&q=80',
    price: 280,
    description: 'Private terrace with panoramic views of Marrakech',
    capacity: 3,
  },
  {
    name: 'Family Suite',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80',
    price: 350,
    description: 'Spacious suite perfect for families or groups',
    capacity: 4,
  },
  {
    name: 'Imperial Suite',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
    price: 400,
    description: 'Our most luxurious suite with separate living area',
    capacity: 2,
  }
];

export default function Suites() {
  return (
    <section id="suites" className="py-16">
      <h2 className="text-3xl font-serif mb-8">Our Luxury Suites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suites.map((suite) => (
          <div key={suite.name} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={suite.image} alt={suite.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{suite.name}</h3>
              <p className="text-gray-600 mb-4">{suite.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {suite.capacity}
                  </span>
                  <Wifi className="h-4 w-4" />
                  <Coffee className="h-4 w-4" />
                  <Bath className="h-4 w-4" />
                </div>
                <span className="text-xl font-bold">${suite.price}/night</span>
              </div>
              <button className="w-full bg-[#588157] text-white py-2 rounded-lg hover:bg-[#3a5a40] transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}