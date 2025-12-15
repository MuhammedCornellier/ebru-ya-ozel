import React from 'react';
import { RECIPES } from '../constants';

const RecipeGrid: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto text-center">
      <h2 className="font-pacifico text-3xl md:text-4xl text-peach mb-2">
        Elinden Çıkan Lezzetler
      </h2>
      <p className="text-darkGray italic mb-8 font-quicksand text-sm md:text-base">(Yorumlar için resmin üzerine gel)</p>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-4">
        {RECIPES.map((recipe) => (
          <div 
            key={recipe.id} 
            className="relative w-full max-w-[300px] h-[350px] rounded-2xl overflow-hidden shadow-lg cursor-pointer group bg-white mx-auto"
          >
            <img 
              src={recipe.imageUrl} 
              alt={recipe.title} 
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-115"
            />
            <div className="absolute inset-0 bg-peach/90 flex flex-col justify-center items-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-white">
              <h4 className="font-pacifico text-2xl mb-4">{recipe.title}</h4>
              <p className="font-quicksand text-lg leading-relaxed">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeGrid;