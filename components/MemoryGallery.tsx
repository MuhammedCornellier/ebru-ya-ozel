import React, { useState } from 'react';
import { MEMORIES } from '../constants';
import { Memory } from '../types';

const MemoryGallery: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const currentAlbumImages = selectedMemory 
    ? [selectedMemory.imageUrl, ...selectedMemory.albumImages] 
    : [];

  const handleOpenMemory = (memory: Memory) => {
      setSelectedMemory(memory);
      setActiveImage(memory.imageUrl); 
  };

  const handleClose = () => {
      setSelectedMemory(null);
      setActiveImage(null);
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto text-center relative z-20">
      <h2 className="font-pacifico text-3xl md:text-4xl text-peach mb-6 md:mb-8">
        Güzel Anılarımız
      </h2>
      
      
      <div className="flex flex-wrap justify-center gap-8 mt-4 md:mt-8">
        {MEMORIES.map((memory) => (
          <div 
            key={memory.id} 
            onClick={() => handleOpenMemory(memory)}
            className="bg-white p-[10px_10px_30px_10px] md:p-[10px_10px_40px_10px] shadow-md -rotate-2 w-full max-w-[220px] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-10 hover:shadow-xl cursor-pointer mx-auto"
          >
            <img 
              src={memory.imageUrl} 
              alt={memory.caption} 
              className="w-full rounded h-[180px] md:h-[200px] object-cover"
            />
            <div className="font-pacifico text-gray-400 text-lg mt-4">
              {memory.caption}
            </div>
          </div>
        ))}
      </div>

      
      {selectedMemory && activeImage && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 md:p-8 animate-[fadeIn_0.3s_ease-out]">
            
            
            <div className="absolute inset-0" onClick={handleClose}></div>

            <div className="bg-cream w-full max-w-6xl h-[90vh] md:h-[70vh] rounded-[20px] md:rounded-[30px] shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10 border-4 md:border-8 border-white">
                
                
                <button 
                    onClick={handleClose}
                    className="absolute top-2 right-2 md:top-4 md:right-4 z-50 w-8 h-8 md:w-10 md:h-10 bg-peach text-white rounded-full font-bold flex items-center justify-center hover:bg-darkGray transition-colors shadow-lg"
                >
                    ✕
                </button>

                
                <div className="hidden md:flex flex-col w-28 bg-peach/10 border-r border-peach/20 overflow-y-auto p-4 gap-4 items-center">
                    <span className="text-sm font-quicksand font-bold text-peach mb-2">Albüm</span>
                    {currentAlbumImages.map((imgUrl, index) => (
                        <button 
                            key={index}
                            onClick={() => setActiveImage(imgUrl)}
                            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${activeImage === imgUrl ? 'border-peach scale-105 shadow-md ring-2 ring-peach/30' : 'border-transparent opacity-70 hover:opacity-100 hover:border-white'}`}
                        >
                            <img src={imgUrl} alt="Album thumbnail" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>

                
                <div className="flex-[4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4 md:p-8 relative overflow-hidden h-[40vh] md:h-auto">
                     
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    
                    <div className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-300">
                         <img 
                            src={activeImage} 
                            alt="Active memory" 
                            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border-4 border-white"
                        />
                    </div>
                </div>

                
                <div className="flex-[3] w-full md:w-[35%] bg-white p-6 md:p-12 flex flex-col text-left border-l border-gray-100 overflow-y-auto h-[50vh] md:h-auto">
                    <div className="flex-1">
                        <span className="text-4xl md:text-6xl mb-2 md:mb-4 block animate-bounce">📸</span>
                        <h3 className="font-pacifico text-2xl md:text-4xl text-peach mb-4 md:mb-6 leading-tight">
                            {selectedMemory.caption}
                        </h3>
                        <div className="w-16 h-1 bg-gold mb-4 md:mb-6 rounded-full"></div>
                        <p className="font-quicksand text-darkGray text-base md:text-xl leading-relaxed whitespace-pre-line">
                            {selectedMemory.description}
                        </p>
                    </div>
                    
                    
                     <div className="flex md:hidden mt-6 gap-3 overflow-x-auto pb-4 pt-2 px-1 min-h-[80px]">
                        {currentAlbumImages.map((imgUrl, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveImage(imgUrl)}
                                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 shadow-sm ${activeImage === imgUrl ? 'border-peach ring-2 ring-peach/30' : 'border-white opacity-70'}`}
                            >
                                <img src={imgUrl} alt="thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      )}
    </section>
  );
};

export default MemoryGallery;