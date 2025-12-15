import React from 'react';
import { OUTFITS } from '../constants';
import { HangerIcon } from './CatIcons';

const WardrobeShowcase: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto text-center">
      <div className="flex items-center justify-center gap-4 mb-8">
        <HangerIcon className="w-10 h-10 md:w-12 md:h-12 text-peach" />
        <h2 className="font-pacifico text-3xl md:text-5xl text-peach">
            Senin Tarzın
        </h2>
        <HangerIcon className="w-10 h-10 md:w-12 md:h-12 text-peach transform scale-x-[-1]" />
      </div>

      <p className="text-darkGray font-quicksand text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        Her kıyafetle ayrı bir hikaye yazıyorsun. İşte en sevdiğim kombinlerinden bazıları...
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {OUTFITS.map((outfit, index) => (
          <div 
            key={outfit.id} 
            className={`group relative rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white ${index % 2 === 0 ? 'md:translate-y-4' : ''}`} // Staggered effect on desktop
          >
            <div className="h-[400px] w-full overflow-hidden">
                <img 
                src={outfit.imageUrl} 
                alt={outfit.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-peach/90 via-peach/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <h3 className="font-pacifico text-2xl text-white drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {outfit.title}
                </h3>
                <div className="w-10 h-1 bg-white rounded-full my-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <p className="text-white font-quicksand text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {outfit.note}
                </p>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-3 md:hidden">
                 <h3 className="font-pacifico text-xl text-peach text-center">{outfit.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WardrobeShowcase;