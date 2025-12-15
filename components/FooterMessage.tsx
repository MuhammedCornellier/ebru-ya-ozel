import React from 'react';
import { CatPeeking } from './CatIcons';

const FooterMessage: React.FC = () => {
  return (
    <>
      <section className="py-16 px-8 max-w-5xl mx-auto text-center relative mt-12">
        
        <div className="relative max-w-2xl mx-auto">
            <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-32 h-20 z-0">
                <CatPeeking className="w-full h-full" />
            </div>

            <div className="bg-softPink p-12 rounded-[30px] shadow-lg relative z-10 border-4 border-white">
            <p className="italic text-xl md:text-2xl text-darkGray font-quicksand mb-6">
                "Seninle geçen her an, bu sayfadaki fotoğraflar kadar renkli ve güzel. İyi ki varsın!"
            </p>
            <strong className="text-peach text-lg font-quicksand block">
                - Seni Seven Muhammed
            </strong>
            </div>
        </div>
      </section>

      <footer className="bg-peach text-white py-8 text-center font-quicksand text-sm md:text-base">
        <p>❤️ - Özel Olarak Tasarlandı</p>
      </footer>
    </>
  );
};

export default FooterMessage;