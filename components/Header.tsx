
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-20 md:py-32 px-6 bg-gray-900 relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-slate-800/10 to-indigo-500/10 animate-pulse"></div>
       <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-4">
          Navega con Conciencia, Conecta con Cuidado
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
          Tu guía esencial para una experiencia segura y positiva en el mundo digital.
        </p>
       </div>
    </header>
  );
};

export default Header;
