'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Combien de temps dois-je porter le patch ?",
      answer: "Portez-le jusqu'à 12 heures maximum, puis jetez-le. Attendez ensuite 12 heures avant d'en appliquer un nouveau pour permettre à votre corps de se reposer."
    },
    {
      question: "Où dois-je l'appliquer ?",
      answer: "Vous pouvez l'appliquer n'importe où sur le corps. Cependant, les points recommandés pour des résultats optimaux sont à la base de la nuque ou juste sous le nombril."
    },
    {
      question: "Puis-je me doucher avec le patch ?",
      answer: "Oui, tout à fait ! Les patchs LifeWave sont dotés d'un adhésif hypoallergénique de qualité médicale et sont résistants à l'eau. Vous pouvez vous doucher ou nager avec."
    },
    {
      question: "Au bout de combien de temps verrai-je des résultats ?",
      answer: "Certaines personnes ressentent un soulagement immédiat de la douleur ou un regain d'énergie dès le premier jour. Pour d'autres, les bienfaits profonds (comme la régénération cellulaire) peuvent prendre quelques semaines ou mois. La constance et l'hydratation sont les clés de la réussite."
    },
    {
      question: "Faut-il boire beaucoup d'eau ?",
      answer: "Oui, c'est crucial ! La photothérapie fonctionne de manière optimale lorsque votre corps est bien hydraté. Nous recommandons de boire au moins 1,5 à 2 litres d'eau par jour."
    },
    {
      question: "Y a-t-il des substances chimiques dans le patch ?",
      answer: "Non, les patchs LifeWave sont non transdermiques. Absolument rien n'est absorbé par le corps. Ils fonctionnent uniquement en réfléchissant la lumière infrarouge émise par votre corps."
    },
    {
      question: "Quelle est la garantie ?",
      answer: "Nous offrons une garantie satisfait ou remboursé de 90 jours pour les clients au détail et les clients privilégiés. Vous pouvez essayer sans aucun risque."
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
