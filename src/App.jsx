import { useState } from 'react'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
    </div>
  );
}


export default App
