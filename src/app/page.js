import React from 'react';
import Header from './components/Header';
import Hero1 from './components/Hero_1';  // Correct path
import Hero2 from './components/Hero_2';


export default function Page() {
  return (
    <div>
      <Header />
      <Hero1 />
      <Hero2 />
      {/* You can add more sections or components here */}
    </div>
  );
}
