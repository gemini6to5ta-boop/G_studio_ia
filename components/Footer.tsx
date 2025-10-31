
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8 mt-20 border-t border-slate-800">
      <p className="text-slate-500">
        La seguridad digital es una responsabilidad compartida. ¡Mantente informado y seguro!
      </p>
      <p className="text-slate-600 text-sm mt-2">
        &copy; {new Date().getFullYear()} Guía de Seguridad Digital. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
