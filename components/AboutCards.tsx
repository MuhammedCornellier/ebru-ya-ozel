import React from 'react';
import { ABOUT_ITEMS } from '../constants';
import { PawPrint } from './CatIcons';

const AboutCards: React.FC = () => {
  return (
    <section className="py-16 px-8 max-w-5xl mx-auto text-center relative">
      <h2 className="font-pacifico text-4xl text-peach mb-8 relative z-10">
        Senin Hakkında Sevdiğim Şeyler
      </h2>
      
      <div className="absolute top-10 left-10 text-peach/10 rotate-[-15deg] animate-pulse">
        <PawPrint className="w-16 h-16" />
      </div>
      <div className="absolute bottom-10 right-10 text-mint/20 rotate-[15deg] animate-pulse delay-700">
        <PawPrint className="w-20 h-20" />
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8 relative z-10">
        {ABOUT_ITEMS.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-2xl w-[250px] shadow-sm border-t-[5px] border-gold transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-md relative overflow-hidden group"
          >
            <div className="absolute -bottom-4 -right-4 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PawPrint className="w-24 h-24 rotate-12" />
            </div>

            <span className="text-4xl block mb-3 relative z-10">{item.icon}</span>
            <h3 className="font-pacifico text-2xl text-peach mb-2 relative z-10">{item.title}</h3>
            <p className="text-darkGray font-quicksand relative z-10">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCards;