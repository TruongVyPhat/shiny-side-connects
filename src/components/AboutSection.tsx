import { Star, Heart, ShieldAlert } from 'lucide-react';
import siteText from '../siteText.json';
import communityImageUrl from '../assets/images/community_laughing_1781624034619.jpg';

export default function AboutSection() {

  const manifestos = [
    {
      icon: <Heart size={20} className="text-black" />,
      titleName: "Bicycles, Scooters, Choppers, or Foot",
      textDetail: "We don't care what you ride, or if you ride at all. The motorcycle is simply the catalyst that brings us together. Egos stay home. Bring whatever gets you moving."
    },
    {
      icon: <Star size={20} className="text-black" />,
      titleName: "No Attitudes, Ever",
      textDetail: "The motorcycle world can sometimes feel exclusionary. Shiny Side Connects is the absolute opposite. It is designed from day one to be warm, safe, simple, and incredibly welcoming."
    },
    {
      icon: <ShieldAlert size={20} className="text-black" />,
      titleName: "Supporting Small Business",
      textDetail: "By connecting our network with local bike shops, neighborhood restaurants, and independent photographers, musicians, and artists, we drive immediate vitality and support right back into our local economy."
    }
  ];

  return (
    <section className="bg-neutral-50 py-24 px-4 sm:px-6 lg:px-8 font-sans border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs sm:text-sm font-semibold font-mono uppercase tracking-[0.25em] text-neutral-400 block">
            {siteText.about.badgeText}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-neutral-950">
            {siteText.about.headingText}
          </h2>
          <div className="h-0.5 w-16 bg-black mx-auto mt-3"></div>
          <p className="text-neutral-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            {siteText.about.subheadingText}
          </p>
        </div>

        {/* Narrative & Photo Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          
          {/* Photo frame */}
          <div className="relative">
            <div className="absolute -inset-3 border-4 border-black/5 -translate-x-4 -translate-y-4 select-none pointer-events-none"></div>
            <div className="relative border border-neutral-200 shadow-xl overflow-hidden aspect-[4/3] bg-neutral-200">
              <img
                src={communityImageUrl}
                alt={siteText.about.imageAlt}
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-5 left-5 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 shadow-md">
                {siteText.about.imageLabel}
              </div>
            </div>
          </div>

          {/* Narrative copy */}
          <div className="space-y-8">
            <h3 className="font-serif text-3xl sm:text-4xl text-neutral-950 leading-tight">
              "{siteText.about.quoteText}"
            </h3>
            
            <p className="text-neutral-600 text-base sm:text-[17px] leading-relaxed font-light">
              {siteText.about.narrativeP1}
            </p>
            
            <p className="text-neutral-600 text-base sm:text-[17px] leading-relaxed font-light">
              {siteText.about.narrativeP2}
            </p>

            {/* Core values cards list */}
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-neutral-400">{siteText.about.pillarsHeader}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {siteText.about.pillars.map((pillar, idx) => (
                  <div key={idx} className="bg-white p-5 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm font-bold text-neutral-950 uppercase tracking-wider mb-1.5">{pillar.title}</p>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Detailed creed items */}
        <div className="space-y-8">
          <h3 className="font-serif text-center text-3xl tracking-tight text-neutral-950 mt-16 mb-10">{siteText.about.whatWeStandForHeader}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {manifestos.map((man, i) => (
              <div key={i} className="bg-white p-8 border border-neutral-200 space-y-4 hover:border-black/20 transition-colors shadow-sm">
                <div className="inline-flex p-3 bg-neutral-50 border border-neutral-100">
                  {man.icon}
                </div>
                <h4 className="font-serif text-lg text-neutral-950 font-semibold">{man.titleName}</h4>
                <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed font-light">{man.textDetail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
