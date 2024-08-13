"use client";  // Add this line

import React from 'react';
import Header from './components/Header';
import Hero1 from './components/Hero_1_Video';  // Correct path
import Hero2 from './components/Hero_2_Menu';
import Hero3 from './components/Hero_3_Carousel';


export default function Page() {
  return (
    <div>
      <Header />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      {/* You can add more sections or components here */}
    </div>
  );
}