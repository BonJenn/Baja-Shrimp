"use client";  // Add this line

import React from 'react';
import Header from './components/Header';
import Hero1_Video from './components/Hero_1_Video';  // Correct path
import Hero2_Menu from './components/Hero_2_Menu';
import Hero3_Catering from './components/Hero_3_Catering';
import Hero4_Carousel from './components/Hero_4_Carousel';
import Hero5_Featured_Dishes from './components/Hero_5_Feaured_Dishes';
import Hero6_Text from './components/Hero_6_Text';
import Hero7_Contact from './components/Hero_7_Contact';
import Footer from './components/Footer';
import EmailSubscribers from './components/EmailSubscribers';

export default function Page() {
  return (
    <div>
      <Header />
      <Hero1_Video />
      <Hero2_Menu />
      <Hero3_Catering />
      <Hero4_Carousel />
      <Hero5_Featured_Dishes />
      <Hero6_Text />
      <Hero7_Contact />
      <EmailSubscribers />
      <Footer />
      {/* You can add more sections or components here */}
    </div>
  );
}