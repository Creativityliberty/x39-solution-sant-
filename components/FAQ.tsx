'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Qu'est-ce que la photothérapie ?",
      answer: "La science de la photothérapie utilise la lumière pour améliorer la santé de l'organisme. Nos patchs utilisent cette technologie pour stimuler le processus d'autoguérison du corps."
    },
    {
      question: "Comment utiliser le patch X39 ?",
      answer: "Appliquez un patch le matin sur une peau propre et sèche. Portez-le jusqu'à 12 heures avant de le jeter. Assurez-vous de bien vous hydrater pendant l'utilisation."
    },
    {
      question: "Y a-t-il des substances chimiques dans le patch ?",
      answer: "Non, les patchs LifeWave sont non transdermiques. Rien n'est absorbé par le corps. Ils fonctionnent uniquement en réfléchissant la lumière infrarouge émise par votre corps."
    },
    {
      question: "Quelle est la garantie ?",
      answer: "Nous offrons une garantie satisfait ou remboursé de 90 jours pour les clients au détail et clients privilégiés, et 30 jours pour les Brand Partners."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md">
          <button
            className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
            {openIndex === index ? <ChevronUp className="text-blue-600 flex-shrink-0" /> : <ChevronDown className="text-slate-500 flex-shrink-0" />}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
