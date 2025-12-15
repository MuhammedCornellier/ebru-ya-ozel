import React from 'react';
import { HERO_IMAGES } from '../constants';
import { CatSittingLeft, CatSittingRight } from './CatIcons';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-cream to-softPink text-center px-4 md:px-8 overflow-hidden relative">
      
      <div className="relative mb-6 md:mb-10 mt-10 md:mt-0 w-full max-w-3xl flex justify-center items-center">
        
        <div className="absolute -left-4 md:-left-16 bottom-0 w-20 md:w-32 animate-[bounce_3s_infinite] z-0">
            <CatSittingLeft className="w-full h-full drop-shadow-lg transform -rotate-12" />
        </div>

        <div className="flex items-center justify-center -space-x-8 md:-space-x-12 relative z-10 pt-8">
            
            <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border-4 border-white shadow-lg overflow-hidden relative z-10 transform -rotate-12 hover:scale-105 hover:z-30 transition-all duration-300">
                <img 
                    src={HERO_IMAGES[0]} 
                    alt="Left Profile" 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-[160px] h-[160px] md:w-[240px] md:h-[240px] rounded-full border-4 md:border-8 border-white shadow-2xl overflow-hidden relative z-20 -mt-8 hover:scale-105 transition-transform duration-300">
                <img 
                    src={HERO_IMAGES[1]} 
                    alt="Center Profile" 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border-4 border-white shadow-lg overflow-hidden relative z-10 transform rotate-12 hover:scale-105 hover:z-30 transition-all duration-300">
                <img 
                    src={HERO_IMAGES[2]} 
                    alt="Right Profile" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        <div className="absolute -right-4 md:-right-16 bottom-0 w-20 md:w-32 animate-[bounce_3.5s_infinite] z-0">
            <CatSittingRight className="w-full h-full drop-shadow-lg transform rotate-12" />
        </div>
      </div>

      <h1 className="font-pacifico text-4xl md:text-6xl text-peach mb-2 relative z-10 px-2 mt-4">
        Ebru'nun Dünyası
      </h1>
      <p className="text-lg md:text-2xl text-darkGray font-quicksand relative z-10 px-4">
        Güzel anların başladığı yere hoş geldiniz
      </p>
      <div className="mt-8 md:mt-12 text-3xl md:text-4xl text-peach animate-custom-bounce select-none cursor-default">
        ↓
      </div>
    </section>
  );
};

export default Hero;