import React, { useEffect, useState } from 'react';
export const SplashScreen = () => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(1);
  }, []);
  return <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="relative w-full h-full overflow-hidden">
        {/* Stars background */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => <div key={i} className="absolute bg-white rounded-full" style={{
          width: Math.random() * 3 + 'px',
          height: Math.random() * 3 + 'px',
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          opacity: Math.random() * 0.8 + 0.2,
          animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
        }} />)}
        </div>
        {/* Planet */}
        <div className="absolute w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-700 rounded-full" style={{
        top: 'calc(50% - 80px)',
        left: 'calc(50% - 80px)',
        boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.5)',
        animation: 'rotate 20s linear infinite'
      }}>
          <div className="absolute w-full h-full rounded-full opacity-20" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 70%)'
        }} />
        </div>
        {/* Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-opacity duration-1000" style={{
        opacity
      }}>
          <h1 className="text-4xl font-bold text-white mb-2 font-poppins">
            FinTech
            <span className="bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] bg-clip-text text-transparent">
              Admin
            </span>
          </h1>
          <p className="text-white text-lg font-light">
            Financial Management System
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>;
};