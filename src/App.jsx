import { useState } from 'react'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './App.css'
import ScrollAnimationSection from './components/ScrollAnimationSection';
import CustomerReviewsSection from './components/CustomerReviewsSection';
import EnquiryFormSection from './components/EnquiryFormSection';
import Footer from './components/Footer';



function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ScrollAnimationSection />
      <CustomerReviewsSection />
      <EnquiryFormSection />  
      <Footer />
    </div>
  );
}


export default App
