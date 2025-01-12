import React, { useState } from 'react';
import { Star, MapPin, Search, Menu, Heart, Calendar } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Suites from './components/Suites';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suites />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;