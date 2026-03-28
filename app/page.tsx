import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Star, ArrowRight, ShieldCheck, Zap, Activity, Truck, Users, PlayCircle, BookOpen, HeartPulse } from 'lucide-react';
import FAQ from '@/components/FAQ';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-200 selection:text-black">
      {/* Top Banner */}
      <div className="bg-blue-50 border-b border-blue-100 text-slate-700 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-blue-600" /> Garantie 90 jours</span>
          <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-blue-600" /> Livraison offerte dès 99 €</span>
          <span className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-600" /> 15,000+ clients satisfaits</span>
          <a href="mailto:support@yourbrand.com" className="hover:text-blue-600 transition-colors">support@yourbrand.com</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight uppercase font-bayon tracking-wide text-slate-900">
              Et si ton corps ne fonctionnait pas à 100%… <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">sans que tu t’en rendes compte ?</span>
            </h1>
            
            <p className="text-slate-700 text-lg md:text-xl">
              Retrouvez votre énergie et votre vitalité avec une technologie brevetée, sans drogue ni stimulant.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium">Favorise le flux d&apos;énergie naturel</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium">Soutient les performances physiques</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium">Technologie non transdermique (rien n&apos;est absorbé)</span>
              </li>
            </ul>

            <div className="space-y-4">
              <Link href="https://lifewave.com/ltagne/store/product/39000.009.009" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 items-center justify-center gap-2 shadow-lg shadow-red-600/30">
                COMMANDER MAINTENANT - 170,40 € <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-slate-600 text-sm font-medium">Ou économisez jusqu&apos;à 35% avec l&apos;abonnement mensuel (114,00 €)</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
                alt="Femme souriante avec LifeWave X39" 
                fill 
                className="object-cover"
                priority
                unoptimized
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg">
                <div className="flex text-amber-500 mb-2">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-slate-900 font-medium italic mb-2">&quot;Comme le jour et la nuit dès la première semaine !&quot;</p>
                <p className="text-blue-600 font-bold text-sm">- Sophie, 42 ans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Milestones Banner */}
      <section className="bg-blue-600 py-12 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4 flex items-center justify-center gap-3">
            <HeartPulse className="w-8 h-8" /> Étapes de Guérison
          </h2>
          <p className="text-blue-100 text-lg mb-8 font-medium">Conditions traitées et gérées avec succès par notre communauté</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Arthrose Vertébrale", "Neuropathie Sévère", "Fasciite Plantaire", 
              "Douleurs Chroniques Cou & Dos", "Douleurs de Fibromyalgie", "Gonflement Sévère", 
              "Digestion & Constipation", "Inconfort lié à l'Ostéoporose"
            ].map((disease, idx) => (
              <span key={idx} className="bg-white text-blue-700 px-6 py-2 rounded-full font-bold shadow-md">
                {disease}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen On */}
      <section className="border-y border-slate-200 bg-slate-50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 uppercase tracking-widest text-sm font-bold mb-6">Technologie reconnue</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            <div className="text-xl font-bold font-bayon tracking-wider text-slate-800">SCIENCE</div>
            <div className="text-xl font-bold font-bayon tracking-wider text-slate-800">INNOVATION</div>
            <div className="text-xl font-bold font-bayon tracking-wider text-slate-800">WELLNESS</div>
            <div className="text-xl font-bold font-bayon tracking-wider text-slate-800">HEALTH</div>
          </div>
        </div>
      </section>

      {/* The Science (Video & Educational) */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 uppercase tracking-widest text-sm font-bold mb-2">Découvrez le secret</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase font-bayon mb-6">La science de la photothérapie</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative bg-slate-100">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/i_Wib0XYDjI" 
              title="LifeWave Phototherapy" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>

          <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
            <div className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-xl">
              <h4 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Comment ça marche ?
              </h4>
              <ul className="space-y-3 text-slate-700">
                <li><strong className="text-slate-900">Non-Transdermique:</strong> Rien n&apos;entre dans votre corps. Pas de drogues, pas de produits chimiques.</li>
                <li><strong className="text-slate-900">Réflexion Infrarouge:</strong> Votre corps émet naturellement de la chaleur sous forme de lumière infrarouge. Les patchs piègent et reflètent des longueurs d&apos;onde spécifiques.</li>
                <li><strong className="text-slate-900">Activation Cellulaire:</strong> Cette stimulation lumineuse ciblée active les processus naturels de guérison du corps.</li>
              </ul>
            </div>
            <p>
              La photothérapie, une science vieille d&apos;environ 100 ans, utilise la lumière pour améliorer la santé du corps. Il y a deux mille ans, les Grecs anciens avaient un centre pour étudier les effets des différentes couleurs de lumière.
            </p>
            <p>
              Les patchs LifeWave utilisent la lumière pour stimuler le processus d&apos;autoguérison. Le principe est simple : le patch est appliqué sur la peau, la lumière infrarouge émise par l&apos;organisme est réfléchie dans les tissus.
            </p>
          </div>
        </div>
      </section>

      {/* Molecule / Cellular Level */}
      <section className="bg-slate-50 py-20 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 text-slate-700 text-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase font-bayon mb-6">Au niveau cellulaire</h3>
            <p>
              Certains de nos patchs permettent de lutter contre les radicaux libres, des molécules d&apos;oxygène qui endommagent les protéines des cellules et contribuent au vieillissement.
            </p>
            <p>
              L&apos;organisme stimulé par la photothérapie produit ses propres antioxydants qui neutralisent naturellement ces radicaux libres.
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
                <span className="font-medium">Optimise le pouvoir de régénération du corps</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
                <span className="font-medium">Apporte des bénéfices spécifiques pour la santé</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
                <span className="font-medium">Sans recours aux substances chimiques nocives</span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <Image 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=400&auto=format&fit=crop" 
                alt="Copper Peptide GHK-Cu" 
                fill 
                className="object-cover rounded-2xl"
                unoptimized
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-blue-600 uppercase tracking-widest text-sm font-bold mb-2">Pourquoi nous sommes différents</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase font-bayon mb-12">Une approche unique du bien-être</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">100% Sûr & Non Invasif</h4>
            <p className="text-slate-600">Rien n&apos;est absorbé par le corps. Aucune drogue, aucun stimulant, aucune substance chimique.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Activation Naturelle</h4>
            <p className="text-slate-600">Utilise la propre lumière infrarouge de votre corps pour stimuler les processus naturels de guérison.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Technologie Brevetée</h4>
            <p className="text-slate-600">Une science de la photothérapie prouvée et soutenue par des décennies de recherche.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 uppercase tracking-widest text-sm font-bold mb-2">Voices of Healing</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase font-bayon">Ce qu&apos;ils en pensent</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "John", condition: "Arthrose Vertébrale", text: "J'ai de l'ARTHROSE dans la colonne vertébrale depuis des années et je prends BEAUCOUP d'analgésiques... J'ai commencé à mettre des patchs en novembre 2024 et j'utilise 3 jeux de patchs ! En quelques minutes, ma douleur a disparu." },
              { name: "Lisa Fisch", condition: "Neuropathie & Digestion", text: "J'ai eu un grave accident de quad... électrocutée et brûlée. J'étais sous morphine et gabapentine pour la douleur et la neuropathie. En 2 semaines d'utilisation du X39, la neuropathie avait pratiquement disparu. Cela a aussi énormément aidé ma digestion." },
              { name: "Lisa Collins", condition: "Fasciite Plantaire", text: "Pour ma mère de 84 ans : fasciite plantaire douloureuse depuis plus de 10 ans. Les médecins ne donnaient aucun espoir. Elle a mis le patch X39... et la douleur au pied a disparu après 2 mois. Elle a toute sa tête et déborde d'énergie !" },
              { name: "Dana B Henderson", condition: "Douleur au cou", text: "J'ai des douleurs au cou depuis quelques semaines. J'ai commencé à porter les patchs X39 et Aeon... et je suis enfin soulagée, je peux tourner mon cou dans tous les sens." },
              { name: "Nicole Morley", condition: "Fibromyalgie", text: "Diagnostiquée avec la fibromyalgie, la maladie du foie gras, la NASH, le syndrome de POTS... Je suis sous X39 depuis presque 2 mois. Je remarque une diminution significative de mes douleurs." },
              { name: "Brenda Kukuk Price", condition: "Disques Dégénératifs", text: "J'ai des disques dégénératifs sévères dans le dos et de l'ostéoporose. J'avais des douleurs chroniques avant les patchs. Maintenant, c'est teeeellement mieux !! X39, X49 et Aeon ont changé ma vie." },
              { name: "Lynnette Smith", condition: "Douleur au bas du dos", text: "J'ai eu de fortes douleurs au bas du dos pendant des années après un accident... Pas de chirurgie pour moi ! Ils commencent à agir dès que vous les mettez sur votre corps ! Je suis ravie !" },
              { name: "D.j. Tillman", condition: "Gonflement Sévère", text: "Mon amie pouvait à peine marcher, je lui ai mis les patchs X39 et Aeon sur la zone affectée. En 24 heures, la douleur et le gonflement avaient disparu." },
              { name: "Sophie", condition: "Fatigue", text: "J’étais sceptique au début, mais j’ai senti une différence sur mon énergie dès la première semaine." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-md flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex text-amber-500 mb-3">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-slate-700 italic mb-6 flex-grow text-sm leading-relaxed">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 font-bold text-lg rounded-full flex items-center justify-center flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">{t.name}</p>
                    <p className="text-blue-600 font-semibold text-xs">{t.condition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie des Cas - Avant / Après */}
      <section className="py-20 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-blue-600 uppercase tracking-widest text-sm font-bold mb-2">Résultats Visuels</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase font-bayon mb-12">Galerie des Cas : Avant / Après</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col">
              <div className="relative aspect-square">
                <Image 
                  src="https://scontent.fcdg3-1.fna.fbcdn.net/v/t39.30808-6/489757255_2870538706450530_5739715753588907290_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=gsejL-sU3iwQ7kNvwH674Gk&_nc_oc=AdpJ17sppATAouXQhp97DPFM-IPy5_5MbtvkBI9QTffO51hikOXLmwVFVi0BgBZSJVkjtIciiuh_H1QlUQ5XKe2b&_nc_zt=23&_nc_ht=scontent.fcdg3-1.fna&_nc_gid=1_cKUW5_NODmmXO3FFzTAg&_nc_ss=7a32e&oh=00_AfwB3wQp8eLSwngcYI7BlxGDfXwLILOkDAYQdUa7hIlVzg&oe=69CE1363" 
                  alt="Avant" 
                  fill 
                  className="object-cover"
                  unoptimized
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-slate-100 border-t border-slate-200">
                <h4 className="font-bold text-slate-800 text-xl uppercase">Avant</h4>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col">
              <div className="relative aspect-square">
                <Image 
                  src="https://scontent.fcdg3-1.fna.fbcdn.net/v/t39.30808-6/489017790_2870538679783866_957018704579278757_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=E9NY0J34UtsQ7kNvwFy4v9c&_nc_oc=Adr-z6tP5fMBPuBYkwyKEEwktd71w5MQx6tPHWaa6JJ9xA2OUatqOTFnHFmkLfoqKpOlkEp-zHzHxtqayTNK2CYS&_nc_zt=23&_nc_ht=scontent.fcdg3-1.fna&_nc_gid=chEG0yTGWyqAdBD_flpY5g&_nc_ss=7a32e&oh=00_AfzW63guFaKEiTi_SstBXMrujuF-16A2RH7NhzFnX5fHJA&oe=69CE0A48" 
                  alt="Après" 
                  fill 
                  className="object-cover"
                  unoptimized
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-blue-50 border-t border-blue-100">
                <h4 className="font-bold text-blue-700 text-xl uppercase">Après</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Kit */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/2] bg-slate-50 rounded-2xl overflow-hidden shadow-xl border border-slate-200 flex items-center justify-center p-8">
            <Image 
              src="https://scontent.fcdg3-1.fna.fbcdn.net/v/t39.30808-6/639559109_10173788367980697_2468497065829578163_n.jpg?stp=cp6_dst-jpg_s280x280_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=WOW3aT_xaOgQ7kNvwE-WIOb&_nc_oc=AdonhPR2dIOEyI1tPuEdygePeObDFSxJ2NzErcMME_NKu9PpS4iqb8s5mZfjIn7vMLDcp64gmzPnJcluvvqCcOzl&_nc_zt=23&_nc_ht=scontent.fcdg3-1.fna&_nc_gid=kZCAga2kRHAKIOwVROzl7Q&_nc_ss=7a32e&oh=00_Afw02hyhovooZGFHIyKzRj1gWRSjG0Jdyj4srK3UIWQhjQ&oe=69CE0D7E" 
              alt="LifeWave X39 Box" 
              fill 
              className="object-cover"
              unoptimized
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase font-bayon">Le Kit LifeWave X39®</h2>
            <p className="text-slate-700 text-lg">
              30 patchs pour un mois complet de bien-être et de régénération.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium text-slate-800">Résultats rapides prouvés par des milliers de personnes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium text-slate-800">Basé sur la science avec des données à l&apos;appui</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium text-slate-800">Sain à utiliser, contrairement aux autres alternatives</span>
              </li>
            </ul>
            <div className="pt-6">
              <Link href="https://lifewave.com/ltagne/store/product/39000.009.009" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 items-center justify-center gap-2 shadow-lg shadow-red-600/30">
                COMMANDER LE KIT - 170,40 € <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Bonus */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <BookOpen className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h2 className="text-amber-400 uppercase tracking-widest text-sm font-bold">Bonus Gratuit Aujourd&apos;hui</h2>
          <h3 className="text-3xl md:text-5xl font-bold uppercase font-bayon">Guide d&apos;optimisation inclus</h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-medium">
            Recevez notre guide exclusif pour maximiser les effets de la photothérapie au quotidien. Hydratation, nutrition et routines pour des résultats optimaux.
          </p>
        </div>
      </section>

      {/* Super Simple to Use */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-blue-600 uppercase tracking-widest text-sm font-bold mb-2">Super simple à utiliser</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase font-bayon mb-16">Aucune routine compliquée</h3>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Appliquer", desc: "Le matin au réveil" },
            { step: "2", title: "Préparer", desc: "Sur peau propre et sèche" },
            { step: "3", title: "Porter", desc: "Jusqu&apos;à 12 heures" },
            { step: "4", title: "Hydrater", desc: "Boire beaucoup d&apos;eau" }
          ].map((s, i) => (
            <div key={i} className="relative">
              <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-blue-600 relative z-10 shadow-lg">
                {s.step}
              </div>
              {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-1 bg-blue-100 -z-0"></div>}
              <h4 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h4>
              <p className="text-slate-600 font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Free */}
      <section className="bg-slate-50 py-20 px-4 border-y border-slate-200 text-center">
        <div className="max-w-3xl mx-auto">
          <ShieldCheck className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase font-bayon mb-6">Essayez sans risque</h2>
          <p className="text-slate-700 text-lg mb-8 font-medium">
            Garantie satisfait ou remboursé de 90 jours pour les clients au détail. Si vous ne ressentez pas les bienfaits, nous vous remboursons. C&apos;est aussi simple que ça.
          </p>
          <Link href="https://lifewave.com/ltagne/store/product/39000.009.009" target="_blank" rel="noopener noreferrer" className="inline-flex bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 items-center gap-2 shadow-lg shadow-red-600/30">
            COMMANDER MAINTENANT <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 uppercase tracking-widest text-sm font-bold mb-2">Encore des questions ?</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase font-bayon">Foire aux questions</h3>
        </div>
        <FAQ />
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 text-center text-slate-400 text-xs md:text-sm">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="uppercase tracking-widest text-blue-400 font-bold mb-4">Disclaimer</p>
          <p>
            Les produits LifeWave sont destinés au bien-être général et ne remplacent pas un avis médical. Consultez un professionnel de santé avant utilisation si nécessaire.
          </p>
          <p>
            Les produits LifeWave sont destinés au bien-être général et visent uniquement à maintenir ou à encourager un état de santé général ou une activité saine. Le contenu fourni est présenté sous forme de résumé, est de nature générale et n’est fourni qu’à titre d’information.
          </p>
          <div className="pt-8 border-t border-slate-800 mt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <span>© {new Date().getFullYear()} Tous droits réservés</span>
            <a href="#" className="hover:text-white transition-colors">Conditions générales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}

