import { useState } from 'react'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './App.css'
import ScrollAnimationSection from './components/ScrollAnimationSection';



function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ScrollAnimationSection />
  
    </div>
  );
}


export default App
