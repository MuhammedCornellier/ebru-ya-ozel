import React from 'react';
import Hero from './components/Hero';
import AboutCards from './components/AboutCards';
import RecipeGrid from './components/RecipeGrid';
import WardrobeShowcase from './components/WardrobeShowcase';
import MemoryGallery from './components/MemoryGallery';
import FooterMessage from './components/FooterMessage';
import PetGallery from './components/PetGallery';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream font-quicksand text-darkGray leading-relaxed overflow-x-hidden selection:bg-peach selection:text-white">
      <Hero />
      <AboutCards />
      <WardrobeShowcase />
      <RecipeGrid />
      <MemoryGallery />
      <PetGallery />
      <FooterMessage />
    </div>
  );
};

export default App;