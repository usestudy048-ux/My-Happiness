
import React from 'react';

const HeartBurst: React.FC = () => {
  const heartSymbols = ['❤️', '💖', '🌹', '✨', '💗', '🥰'];

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
      {[...Array(20)].map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 4;
        const size = 20 + Math.random() * 30;
        const symbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        return (
          <div
            key={i}
            className="absolute bottom-[-50px] animate-float"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              fontSize: `${size}px`,
              opacity: 0,
            }}
          >
            {symbol}
          </div>
        );
      })}

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-110vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeartBurst;
