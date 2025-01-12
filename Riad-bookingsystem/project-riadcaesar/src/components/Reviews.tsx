import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    date: '2024-02-15',
    comment: 'Absolutely stunning riad with incredible service. The Royal Suite exceeded all expectations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    date: '2024-02-10',
    comment: 'Perfect location in the heart of the medina. The staff made our stay unforgettable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
  },
  {
    name: 'Emma Thompson',
    rating: 5,
    date: '2024-02-01',
    comment: 'A true oasis in Marrakech. The Garden Suite was peaceful and beautifully decorated.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-serif mb-4">Guest Reviews</h2>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <span className="ml-2 text-lg font-semibold">5.0 out of 5</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.name} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
            <p className="text-sm text-gray-500 mt-2">{review.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}