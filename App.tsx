
import React, { useState, useEffect, useCallback } from 'react';
import RosePetals from './components/RosePetals';
import HeartBurst from './components/HeartBurst';
import { Sparkles, Heart } from 'lucide-react';

const App: React.FC = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSurpriseClick = () => {
    setShowSurprise(true);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-rose-50 flex flex-col items-center justify-center p-4">
      {/* Background Rose Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop" 
          alt="Rose background" 
          className="absolute -top-20 -left-20 w-80 h-80 rotate-12"
        />
        <img 
          src="https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=1000&auto=format&fit=crop" 
          alt="Rose background" 
          className="absolute -bottom-20 -right-20 w-96 h-96 -rotate-12"
        />
      </div>

      {/* Main Container */}
      <div className={`transition-all duration-1000 transform ${showSurprise ? 'scale-110 opacity-0 pointer-events-none absolute' : 'scale-100 opacity-100'}`}>
        <div className="text-center space-y-8 z-10 relative">
          <div className="relative inline-block">
             <div className="flex justify-center mb-4">
                <Heart className="text-red-500 animate-pulse" size={48} fill="currentColor" />
             </div>
             <h1 className="font-romantic text-6xl md:text-8xl text-red-600 drop-shadow-lg mb-2">
                Happy Valentine
             </h1>
             <h2 className="font-cursive text-3xl md:text-5xl text-rose-500 italic">
                My Happiness
             </h2>
          </div>

          <div className="max-w-md mx-auto p-8 rounded-3xl bg-white/60 backdrop-blur-md shadow-2xl border border-rose-100 flex flex-col items-center">
            <p className="font-sans text-rose-800 text-lg mb-8 leading-relaxed">
              Every moment with you is like a beautiful dream. I have a small wish to share with you today...
            </p>
            
            <button
              onClick={handleSurpriseClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-10 py-4 bg-red-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-red-700 active:scale-95 shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 text-xl font-cursive">
                Click for your wish <Sparkles className="animate-spin-slow" size={20} />
              </span>
              <div className={`absolute inset-0 bg-rose-400 transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`} />
            </button>
          </div>
          
          {/* Rose Flowers Surround */}
          <div className="flex justify-center gap-4 mt-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <img 
                key={i}
                src="https://images.unsplash.com/photo-1548546738-8509cb246ed3?q=80&w=200&auto=format&fit=crop" 
                alt="Rose" 
                className={`w-16 h-16 md:w-24 md:h-24 rounded-full object-cover shadow-md border-2 border-white transform hover:rotate-12 transition-transform duration-300 ${i % 2 === 0 ? 'mt-4' : '-mt-4'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Surprise Content */}
      {showSurprise && (
        <>
          <RosePetals />
          <HeartBurst />
          <div className="z-50 text-center animate-fade-in px-4">
            <h2 className="font-romantic text-6xl md:text-9xl text-red-600 mb-6 drop-shadow-[0_5px_15px_rgba(220,38,38,0.4)] animate-bounce">
              I Love You Babe
            </h2>
            <p className="font-cursive text-3xl md:text-5xl text-rose-600 drop-shadow-sm mb-12">
              You Are my Forever.
            </p>
            
            <button 
              onClick={() => setShowSurprise(false)}
              className="mt-8 px-6 py-2 bg-white/80 backdrop-blur-sm text-red-500 font-sans text-sm rounded-full border border-red-200 hover:bg-white transition-colors"
            >
              Back to heart
            </button>
          </div>
        </>
      )}

      {/* Styles for animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default App;
