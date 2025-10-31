
import React from 'react';
import { SafetyTip as SafetyTipType } from '../types';

interface SafetyTipProps {
  tip: SafetyTipType;
  index: number;
}

const SafetyTip: React.FC<SafetyTipProps> = ({ tip, index }) => {
  return (
    <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 flex items-start space-x-4 transition-transform duration-300 hover:scale-105">
      <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center font-bold text-lg">
        {index}
      </div>
      <div>
        <h4 className="font-bold text-lg text-white">{tip.title}</h4>
        <p className="text-slate-400">{tip.description}</p>
      </div>
    </div>
  );
};

export default SafetyTip;
