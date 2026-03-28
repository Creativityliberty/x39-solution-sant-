'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Link from 'next/link';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-72 md:w-80 mb-4 overflow-hidden origin-bottom-right animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-white border-b border-slate-200 p-4 flex justify-between items-center text-slate-900">
            <div className="font-bold flex items-center gap-2">
              <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
              Support en direct
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-500 hover:text-slate-900 transition-colors p-1"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 bg-slate-50">
            <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none mb-6 shadow-sm">
              <p className="text-slate-700 text-sm leading-relaxed">
                Bonjour ! 👋 <br/><br/>
                Besoin d&apos;aide ou de conseils sur les patchs LifeWave X39 ? Nous répondons rapidement sur WhatsApp.
              </p>
            </div>
            <Link 
              href="https://api.whatsapp.com/send/?phone=33745434264&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-[0_4px_14px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </Link>
          </div>
        </div>
      )}

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#25D366] hover:bg-[#20b858] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 flex items-center justify-center group"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="w-8 h-8 group-hover:animate-bounce" />
        </button>
      )}
    </div>
  );
}
