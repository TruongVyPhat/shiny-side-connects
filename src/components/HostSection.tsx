import React from 'react';
import { 
  MapPin, 
  ExternalLink,
  Sparkles,
  Heart,
  MessageSquare,
  Camera,
  Layers,
  Award
} from 'lucide-react';

// ==========================================
// 📝 GOOGLE FORM REDIRECT CONFIGURATION
// Replace the URL below with your actual Google Form link when ready!
// ==========================================
const GOOGLE_FORM_URL = "https://docs.google.com/forms/";

interface CollaboratorProfile {
  name: string;
  role: string;
  city: string;
  country: string;
  bio: string;
  imageUrl: string;
}

export default function HostSection() {
  const collaborators: CollaboratorProfile[] = [
    {
      name: 'Viktor Radics',
      role: 'Co-Founder & Host',
      city: 'Toronto',
      country: 'Canada',
      bio: 'Avid custom vintage motorcycle builder and coffee enthusiast. Viktor believes in zero-pressure environments where egos stay home.',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop'
    },
    {
      name: 'Samantha Radics',
      role: 'Co-Founder & Creative Director',
      city: 'Toronto',
      country: 'Canada',
      bio: 'Establishes the worldwide visual identity and design standards, helping local crews customize their promotional flyers.',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop'
    },
    {
      name: 'Marc-Antoine',
      role: 'Local Host & Coordinator',
      city: 'Montréal',
      country: 'Canada',
      bio: 'Rides a vintage 1982 Yamaha XS650 and coordinates cozy curb-side gatherings across independent espresso bars in Québec.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop'
    },
    {
      name: 'Kassandra Miller',
      role: 'Chapter Coordinator',
      city: 'Vancouver',
      country: 'Canada',
      bio: 'Dual-sport commuter dedicated to fostering friendly, zero-ego community spaces for new riders on the West Coast.',
      imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=250&auto=format&fit=crop'
    },
    {
      name: 'Zane Hendricks',
      role: 'Community Captain',
      city: 'Cape Town',
      country: 'South Africa',
      bio: 'Vintage scrambler fan, ocean driver, and dedicated advocate for showcasing local South African coffee culture.',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop'
    },
    {
      name: 'Alex Mercer',
      role: 'Co-Host & Logistics',
      city: 'New York City',
      country: 'USA',
      bio: 'Brooklyn local on a mission to connect the five boroughs\' diverse rider groups, one coffee cup and conversation at a time.',
      imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=250&auto=format&fit=crop'
    },
    {
      name: 'Jess Harper',
      role: 'Community Photographer',
      city: 'New York City',
      country: 'USA',
      bio: 'Professional lifestyle photographer capturing candid laughter, engine details, and warm sidewalk smiles at NYC socials.',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&auto=format&fit=crop'
    },
    {
      name: 'Sven Lindner',
      role: 'Lead Coordinator',
      city: 'Munich',
      country: 'Germany',
      bio: 'Restores retro boxer-twin engines and organizes local midweek sidewalk meetings down quiet Bavarian streets.',
      imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=250&auto=format&fit=crop'
    },
    {
      name: 'Chloe Bennett',
      role: 'Melbourne Ambassador & Host',
      city: 'Melbourne',
      country: 'Australia',
      bio: 'Excitedly curating local digital outreach and establishing our newest upcoming international sidewalk chapter.',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&auto=format&fit=crop'
    }
  ];

  return (
    <section className="bg-neutral-50 py-24 px-4 sm:px-6 lg:px-8 font-sans border-b border-neutral-100">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Simplified Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-semibold font-mono uppercase tracking-[0.25em] text-neutral-400 block">
            Our Global Circle
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-neutral-950">
            Meet The Collaborators
          </h2>
          <div className="h-0.5 w-16 bg-black mx-auto mt-3"></div>
          <p className="text-neutral-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Shiny Side Connects is made possible by welcoming coordinators, photographers, and hospitable minds worldwide. Meet the 9 central collaborators who host monthly sidewalk espresso gatherings, build warm spaces, and keep egos out of the loop.
          </p>
        </div>

        {/* Collaborators Grid (Exactly 9 People) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborators.map((person) => (
            <div 
              key={person.name} 
              className="bg-white border border-neutral-200 p-6 flex flex-col justify-between transition-all hover:shadow-md hover:border-neutral-300"
            >
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-neutral-200 shadow-sm bg-neutral-100">
                    <img 
                      src={person.imageUrl} 
                      alt={person.name} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-[16px] font-bold text-neutral-950 leading-tight">
                      {person.name}
                    </h3>
                    <p className="text-[11px] font-extrabold text-neutral-400 uppercase tracking-wider mt-0.5">
                      {person.role}
                    </p>
                    <div className="flex items-center gap-1 text-neutral-500 text-[11px] font-light mt-1">
                      <MapPin size={10} className="text-neutral-400" />
                      <span>{person.city}, {person.country}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-neutral-600 text-xs leading-relaxed font-light pt-2">
                  {person.bio}
                </p>
              </div>

              {/* Tag style indicator */}
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[9px] font-semibold text-neutral-400 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles size={9} />
                  Active Coordinator
                </span>
                <span className="text-[9px] text-neutral-400 italic">
                  Since launch
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section (Become a Collaborator) */}
        <div className="max-w-2xl mx-auto text-center space-y-8 bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-neutral-800 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
          
          <div className="space-y-4 relative z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-400 inline-flex items-center gap-1.5 justify-center">
              <Heart size={11} className="text-neutral-300" />
              JOIN THE CIRCLE
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif tracking-tight">Become a Collaborator</h3>
            <p className="text-xs text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
              Want to co-host, photograph local events, or run social media outreach for your city? Submit your questionnaire and help us build friendly sidewalk circles.
            </p>
          </div>

          <div className="pt-2 relative z-10">
            <a 
              href={GOOGLE_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-100 active:scale-95 px-8 py-4 text-xs font-extrabold uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:shadow-xl font-mono"
            >
              Apply via Google Form
              <ExternalLink size={14} className="stroke-[2.5]" />
            </a>
            
            <p className="text-[10.5px] text-neutral-500 font-light mt-4 italic">
              Opens in a new tab • Our international coordination team reviews queries weekly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
