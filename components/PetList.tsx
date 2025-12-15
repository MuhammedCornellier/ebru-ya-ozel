import React from 'react';
import { PETS } from '../constants';

const PetList: React.FC = () => {
  return (
    <section className="py-16 px-8 max-w-5xl mx-auto text-center">
      <h2 className="font-pacifico text-4xl text-peach mb-8">
        Can Yoldaşların
      </h2>
      
      <div className="flex flex-wrap justify-center gap-12 mt-8">
        {PETS.map((pet) => (
          <div key={pet.id} className="text-center group">
            <div className="w-[180px] h-[180px] mx-auto mb-4 rounded-full overflow-hidden border-[6px] border-mint transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 shadow-md">
              <img 
                src={pet.imageUrl} 
                alt={pet.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-bold text-xl text-darkGray font-quicksand">
              {pet.name} <span className="text-sm font-normal text-gray-500">({pet.type})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetList;