
import React from 'react';
import Header from './components/Header';
import DangerCard from './components/DangerCard';
import SafetyTip from './components/SafetyTip';
import Footer from './components/Footer';
import { DANGERS, TIPS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 text-slate-200 overflow-x-hidden">
      <Header />
      
      <main className="container mx-auto px-6 py-12 md:py-20">
        <section id="peligros" className="mb-20 md:mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-cyan-400">
            Los 3 Peligros Clave en Redes Sociales
          </h2>
          <p className="text-center max-w-3xl mx-auto text-slate-400 mb-12">
            Conocer los riesgos es el primer paso para protegerte. Aquí te presentamos los más comunes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DANGERS.map((danger) => (
              <DangerCard key={danger.title} danger={danger} />
            ))}
          </div>
        </section>

        <section id="consejos">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-cyan-400">
            5 Consejos Esenciales de Seguridad
          </h2>
          <p className="text-center max-w-3xl mx-auto text-slate-400 mb-12">
            Adopta estos hábitos para una experiencia online mucho más segura y positiva.
          </p>
          <div className="max-w-2xl mx-auto space-y-4">
            {TIPS.map((tip, index) => (
              <SafetyTip key={tip.title} tip={tip} index={index + 1} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
