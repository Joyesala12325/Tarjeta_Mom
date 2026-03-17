import React, { useState, useEffect } from 'react';
import { Heart, Stars, Gift, Music, Sparkles } from 'lucide-react';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

  // Simulación de confeti simple con SVGs
    const Confetti = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
        <div
            key={i}
            className="absolute animate-bounce"
            style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.6
            }}
        >
          <Sparkles className="text-yellow-400" size={Math.random() * 20 + 10} />
        </div>
        ))}
    </div>
    );

    return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4 font-sans">
        {!isOpen ? (
        // Sobre Cerrado
        <div 
            onClick={() => {setIsOpen(true); setShowConfetti(true);}}
            className="cursor-pointer group relative bg-white p-8 rounded-2xl shadow-2xl border-2 border-rose-200 transform transition-all hover:scale-105 hover:rotate-1"
        >
            <div className="flex flex-col items-center gap-4">
            <div className="bg-rose-100 p-6 rounded-full group-hover:bg-rose-200 transition-colors">
                <Gift className="text-rose-500 w-12 h-12" />
            </div>
            <h2 className="text-2xl font-serif text-rose-800 font-bold text-center">
                Para la mejor mamá del mundo
            </h2>
            <p className="text-rose-600 animate-pulse">Toca para abrir tu sorpresa ✨</p>
            </div>
        </div>
        ) : (
        // Tarjeta Abierta
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-rose-100 animate-in fade-in zoom-in duration-700">
            {showConfetti && <Confetti />}
            
          {/* Cabecera con la foto */}
            <div className="relative h-80 overflow-hidden">
            <img 
              src="https://api.screenshotmachine.com/?key=YOUR_KEY&url=YOUR_URL&device=desktop&dimension=1024x768&format=jpg" // Nota: Aquí iría el procesamiento de la imagen original
                alt="Mamá e hijo sonriendo"
                className="w-full h-full object-cover"
                onError={(e) => {
                // Fallback visual en caso de que no se cargue la imagen directamente
                e.target.src = "https://images.unsplash.com/photo-1544333346-64e4fe1820af?q=80&w=1000&auto=format&fit=crop";
                }}
            />
            {/* Superposición para que se vea mejor la foto (Simulada para el canvas) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h1 className="text-white text-3xl font-serif font-bold italic">
                ¡Feliz Cumpleaños, Mamá!
                </h1>
            </div>
            </div>

          {/* Cuerpo del mensaje */}
            <div className="p-8 space-y-6 text-center">
            <div className="flex justify-center gap-2">
                <Heart className="text-rose-500 fill-rose-500" size={20} />
                <Heart className="text-rose-400 fill-rose-400" size={20} />
                <Heart className="text-rose-300 fill-rose-300" size={20} />
            </div>

            <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                Gracias por ser mi guía, mi apoyo incondicional y por celebrar conmigo cada logro.
                </p>
                <p className="text-rose-700 font-medium text-xl italic font-serif">
                "Tu amor es el regalo más grande que la vida me ha dado."
                </p>
                <p className="text-gray-600 italic">
                Hoy celebro tu vida y agradezco tenerte a mi lado en momentos tan especiales como este.
                </p>
            </div>

            <div className="pt-6 border-t border-rose-50 flex flex-col items-center">
                <div className="bg-rose-50 px-6 py-2 rounded-full inline-flex items-center gap-2 mb-4">
                <Stars className="text-yellow-500" size={18} />
                <span className="text-rose-800 font-semibold uppercase tracking-widest text-sm">Te quiero mucho</span>
                <Stars className="text-yellow-500" size={18} />
                </div>

                <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-rose-500 transition-colors text-xs underline"
                >
                Cerrar tarjeta
                </button>
            </div>
            </div>

          {/* Decoración lateral */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/30">
            <Music className="text-white animate-spin-slow" size={20} />
            </div>
        </div>
        )}
    </div>
    );
};

export default App;
