import React from 'react';
import { PETS } from '../constants';
import { PawPrint } from './CatIcons';

const PetGallery: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-10">
        
        <div className="absolute top-[2%] left-[2%] animate-[bounce_4s_infinite] text-peach"><PawPrint className="w-12 h-12" /></div>
        <div className="absolute top-[12%] left-[8%] animate-[bounce_5s_infinite] delay-100 text-mint"><PawPrint className="w-8 h-8 rotate-12" /></div>
        <div className="absolute top-[22%] left-[-2%] animate-[bounce_6s_infinite] delay-300 text-darkGray"><PawPrint className="w-16 h-16 -rotate-12" /></div>
        <div className="absolute top-[35%] left-[5%] animate-[bounce_4s_infinite] delay-500 text-peach"><PawPrint className="w-10 h-10 rotate-45" /></div>
        <div className="absolute top-[48%] left-[1%] animate-[bounce_7s_infinite] delay-200 text-mint"><PawPrint className="w-14 h-14 -rotate-6" /></div>
        <div className="absolute top-[60%] left-[10%] animate-[bounce_5s_infinite] delay-700 text-darkGray"><PawPrint className="w-12 h-12 rotate-90" /></div>
        <div className="absolute bottom-[25%] left-[3%] animate-[bounce_6s_infinite] delay-100 text-peach"><PawPrint className="w-20 h-20 -rotate-12" /></div>
        <div className="absolute bottom-[10%] left-[8%] animate-[bounce_4s_infinite] delay-400 text-mint"><PawPrint className="w-10 h-10 rotate-12" /></div>
        <div className="absolute bottom-[2%] left-[-1%] animate-[bounce_5s_infinite] delay-600 text-darkGray"><PawPrint className="w-16 h-16 rotate-45" /></div>

        <div className="absolute top-[15%] left-[25%] animate-[bounce_8s_infinite] delay-1000 text-peach opacity-50"><PawPrint className="w-6 h-6 rotate-180" /></div>
        <div className="absolute top-[85%] left-[30%] animate-[bounce_9s_infinite] delay-200 text-mint opacity-50"><PawPrint className="w-8 h-8 -rotate-45" /></div>
        <div className="absolute top-[5%] left-[45%] animate-[bounce_7s_infinite] delay-500 text-darkGray opacity-50"><PawPrint className="w-5 h-5 rotate-12" /></div>
        <div className="absolute bottom-[5%] right-[40%] animate-[bounce_6s_infinite] delay-300 text-peach opacity-50"><PawPrint className="w-7 h-7 -rotate-12" /></div>

        <div className="absolute top-[3%] right-[5%] animate-[bounce_5s_infinite] delay-150 text-darkGray"><PawPrint className="w-14 h-14 rotate-12" /></div>
        <div className="absolute top-[15%] right-[-1%] animate-[bounce_4s_infinite] delay-300 text-peach"><PawPrint className="w-10 h-10 -rotate-6" /></div>
        <div className="absolute top-[28%] right-[10%] animate-[bounce_6s_infinite] delay-500 text-mint"><PawPrint className="w-18 h-18 rotate-45" /></div>
        <div className="absolute top-[42%] right-[2%] animate-[bounce_5s_infinite] delay-200 text-darkGray"><PawPrint className="w-12 h-12 -rotate-12" /></div>
        <div className="absolute top-[55%] right-[8%] animate-[bounce_7s_infinite] delay-600 text-peach"><PawPrint className="w-8 h-8 rotate-90" /></div>
        <div className="absolute top-[68%] right-[-2%] animate-[bounce_4s_infinite] delay-100 text-mint"><PawPrint className="w-16 h-16 rotate-12" /></div>
        <div className="absolute bottom-[18%] right-[6%] animate-[bounce_6s_infinite] delay-400 text-darkGray"><PawPrint className="w-20 h-20 -rotate-45" /></div>
        <div className="absolute bottom-[5%] right-[1%] animate-[bounce_5s_infinite] delay-700 text-peach"><PawPrint className="w-12 h-12 rotate-12" /></div>
        <div className="absolute bottom-[30%] right-[15%] animate-[bounce_8s_infinite] delay-200 text-mint"><PawPrint className="w-6 h-6 rotate-180" /></div>

      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        <h2 className="font-pacifico text-4xl md:text-5xl text-darkGray mb-2">
          <span className="text-peach">Pati</span> Dostları
        </h2>
        <div className="w-24 h-1 bg-mint mx-auto mb-12 rounded-full"></div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-8 pb-20">
          {PETS.map((pet, index) => {
            const rotationClass = index % 2 === 0 ? 'rotate-3 hover:rotate-0' : '-rotate-3 hover:rotate-0';
            const translateY = index % 2 !== 0 ? 'md:translate-y-12' : ''; // Stagger vertical position

            return (
              <div 
                key={pet.id}
                className={`group relative bg-white p-3 md:p-4 shadow-xl transition-all duration-500 transform ${rotationClass} ${translateY} hover:scale-110 hover:z-20 cursor-default rounded-sm`}
                style={{ maxWidth: '280px' }}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm rotate-[-2deg] opacity-80"></div>

                <div className="w-[240px] h-[280px] overflow-hidden bg-gray-100 mb-2">
                  <img 
                    src={pet.imageUrl} 
                    alt="Pet" 
                    className="w-full h-full object-cover filter sepia-[0.2] group-hover:sepia-0 transition-all duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PetGallery;