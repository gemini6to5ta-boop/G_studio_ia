
import React from 'react';
import { Danger } from '../types';

interface DangerCardProps {
  danger: Danger;
}

const DangerCard: React.FC<DangerCardProps> = ({ danger }) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex justify-center md:justify-start">
        {danger.icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white text-center md:text-left">{danger.title}</h3>
      <p className="text-slate-400 text-center md:text-left">{danger.description}</p>
    </div>
  );
};

export default DangerCard;
