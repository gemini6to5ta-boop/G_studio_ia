
import React from 'react';
import { Danger, SafetyTip } from './types';

const ShieldExclamationIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const KeyIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 0110.257-4.257M15 7A2 2 0 0117 5" />
  </svg>
);

const BrainIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.96 1.132A10 10 0 002 10.132V20a1 1 0 001 1h18a1 1 0 001-1v-9.868a10 10 0 00-9.96-8.999zM12 18a4 4 0 004-4H8a4 4 0 004 4z" />
  </svg>
);

export const DANGERS: Danger[] = [
  {
    icon: <ShieldExclamationIcon className="w-12 h-12 text-red-400 mb-4" />,
    title: 'Ciberacoso',
    description: 'Es el uso de medios digitales para acosar, intimidar o humillar a una persona. Puede incluir insultos, amenazas, difusión de rumores o publicación de fotos vergonzosas sin consentimiento.',
  },
  {
    icon: <KeyIcon className="w-12 h-12 text-yellow-400 mb-4" />,
    title: 'Phishing',
    description: 'Son intentos de engaño para que reveles información personal y confidencial, como contraseñas o datos de tarjetas de crédito. Suelen llegar como correos, mensajes o enlaces falsos.',
  },
  {
    icon: <BrainIcon className="w-12 h-12 text-blue-400 mb-4" />,
    title: 'Adicción y Salud Mental',
    description: 'El uso excesivo de redes puede generar dependencia, afectar el sueño, la autoestima y aumentar la ansiedad o depresión, especialmente por la comparación constante con los demás.',
  },
];

export const TIPS: SafetyTip[] = [
  {
    title: 'Activa la Autenticación de Dos Factores (2FA)',
    description: 'Añade una capa extra de seguridad a tus cuentas. Incluso si alguien roba tu contraseña, no podrá acceder sin tu segundo factor (como un código en tu móvil).',
  },
  {
    title: 'Configura la Privacidad de tus Cuentas',
    description: 'Revisa quién puede ver lo que publicas. Configura tus perfiles como privados para que solo tus amigos o seguidores aprobados puedan ver tu contenido.',
  },
  {
    title: 'Piensa Dos Veces Antes de Publicar',
    description: 'Lo que subes a internet puede permanecer allí para siempre. Evita compartir información muy personal, tu ubicación en tiempo real o fotos comprometedoras.',
  },
  {
    title: 'No Aceptes Solicitudes de Desconocidos',
    description: 'Sé selectivo con quién forma parte de tu círculo online. Aceptar extraños puede exponerte a perfiles falsos, estafadores o personas con malas intenciones.',
  },
  {
    title: 'Habla con Alguien de Confianza',
    description: 'Si ves algo que te hace sentir mal, te asusta o te incomoda, no lo guardes para ti. Habla con tus padres, un profesor o un amigo de confianza.',
  },
];
