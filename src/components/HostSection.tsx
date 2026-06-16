import React from 'react';
import { 
  MapPin, 
  Camera, 
  Video, 
  Radio, 
  Info, 
  ExternalLink,
  Users,
  Award,
  Sparkles
} from 'lucide-react';

// ==========================================
// 📝 GOOGLE FORM REDIRECT CONFIGURATION
// Replace the URL below with your actual Google Form link when ready!
// ==========================================
const GOOGLE_FORM_URL = "https://docs.google.com/forms/";

export default function HostSection() {
  const crewRoles = [
    {
      id: 'City Coordinator (Host)',
      title: 'City Coordinator / Host',
      icon: <MapPin size={22} className="text-black" />,
      desc: 'The heartbeat of the local chapter. Coordinates event dates and schedules with local independent cafes, handles local logistics, and acts as the lead host on-site to make everyone feel welcome.'
    },
    {
      id: 'Community Photographer',
      title: 'Community Photographer',
      icon: <Camera size={22} className="text-black" />,
      desc: 'Captures the magic of happy people chatting, warm smiles, and interesting machines. Delivers high-quality photos that portray the natural, inclusive, and friendly spirit of our community.'
    },
    {
      id: 'Creative Videographer',
      title: 'Creative Videographer',
      icon: <Video size={22} className="text-black" />,
      desc: 'Documents the movement through moving pictures. Captures the sounds, engines, and laughter, creating short, engaging recap clips and reels that inspire others to join.'
    },
    {
      id: 'Social Media Manager',
      title: 'Social Media Manager',
      icon: <Radio size={22} className="text-black" />,
      desc: 'Runs the local Instagram channel, responds to community messages with warmth, creates upcoming event notices, and coordinates general outreach so riders and walkers are in the loop.'
    }
  ];

  const founders = [
    {
      name: 'Viktor Radics',
      role: 'Co-Founder & General Lead',
      bio: 'Avid vintage motorcycle builder, coffee enthusiast, and community catalyst. Viktor believes in creating low-pressure, open spaces where every person feels welcomed instantly, regardless of what they ride.',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=350&auto=format&fit=crop'
    },
    {
      name: 'Samantha Radics',
      role: 'Co-Founder & Creative Director',
      bio: 'Graphic designer and conceptual visual curator. Samantha establishes the global visual framework and branding standards, assisting local crews worldwide with graphic layouts, labels, and beautiful digital styling.',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=350&auto=format&fit=crop'
    }
  ];

  return (
    <section className="bg-neutral-50 py-20 px-4 sm:px-6 lg:px-8 font-sans border-b border-neutral-100">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Intro Header Section */}
        <div id="intro-join" className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-neutral-400 block">
            Be Part Of The Crew
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif tracking-tight text-neutral-950">
            Join The Team
          </h2>
          <div className="h-0.5 w-12 bg-black mx-auto mt-2"></div>
          <p className="text-neutral-600 text-sm leading-relaxed max-w-xl mx-auto font-light">
            Each city chapter of The Moto Social is managed, coordinated, and run by a fully local team of dedicated volunteers. We build inclusive, warm environments where egos stay home. Learn about the roles below and apply to join our global circle of friends.
          </p>
        </div>

        {/* Global Leadership Section (The Founders) */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] bg-black text-white px-2.5 py-1 font-bold uppercase tracking-widest text-center mx-auto block w-max">
              Global Leadership
            </span>
            <h3 className="text-2xl font-serif text-neutral-900 mt-4">
              Meet The Founders
            </h3>
            <p className="text-neutral-500 text-xs font-light mt-1">
              The curators who launched the first Toronto gathering on a sidewalk curb.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder) => (
              <div 
                key={founder.name} 
                className="bg-white border border-neutral-200 p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start transition-all hover:shadow-md hover:border-neutral-300"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border border-neutral-300 shadow-sm">
                  <img 
                    src={founder.imageUrl} 
                    alt={founder.name} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-neutral-950">{founder.name}</h4>
                    <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">{founder.role}</p>
                  </div>
                  <p className="text-neutral-600 text-xs leading-relaxed font-light">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Crew Roles Info */}
        <div className="space-y-12 bg-white border border-neutral-200/80 p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl text-left space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">
              Who Makes Up A Local Crew?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif tracking-tight text-neutral-950">
              Choose Your Contribution
            </h3>
            <p className="text-neutral-500 text-xs font-light">
              We look for friendly, warm, attitude-free community builders who appreciate coffee and people. Review the roles that keep our monthly circles spinning:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {crewRoles.map((role) => (
              <div key={role.id} className="flex gap-4 items-start p-4 border border-neutral-100 hover:bg-neutral-50 transition-colors">
                <div className="p-3 bg-neutral-100 rounded-none shrink-0 border border-neutral-200 shadow-sm">
                  {role.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-[15px] font-extrabold text-neutral-950">{role.title}</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed font-light">
                    {role.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-neutral-50 p-4 border border-neutral-200 text-xs leading-relaxed flex items-start gap-3">
            <Info size={16} className="text-neutral-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-neutral-700">No Premium Bikes Or Moto Experience Required!</p>
              <p className="text-neutral-500 font-light mt-0.5">
                We believe the motorcycle is simply a creative visual catalyst that parks us on the same public streets. You don’t even need to own or ride a motorbike to coordinate chapters or photograph events, as long as you love people, warmth, and inclusion!
              </p>
            </div>
          </div>
        </div>

        {/* The Simplified Call To Action Section */}
        <div id="join-form-container" className="max-w-2xl mx-auto text-center space-y-8 bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-neutral-800 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
          
          <div className="space-y-4 relative z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-400 inline-flex items-center gap-1.5 justify-center">
              <Sparkles size={11} className="text-neutral-300" />
              JOIN THE CIRCLE
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif tracking-tight">Apply For The Crew</h3>
            <p className="text-xs text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
              We coordinate applications globally using a simple questionnaire. Select your local chapter, highlight your role preferences, and share a bit about your favorite café scene.
            </p>
          </div>

          <div className="pt-2 relative z-10">
            <a 
              href={GOOGLE_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-105 active:scale-95 px-8 py-4 text-xs font-extrabold uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:shadow-xl font-mono"
            >
              Apply via Google Form
              <ExternalLink size={14} className="stroke-[2.5]" />
            </a>
            
            <p className="text-[10.5px] text-neutral-500 font-light mt-4 italic">
              Opens in a new tab • The team reviews candidate profiles weekly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
