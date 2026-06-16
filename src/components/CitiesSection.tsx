import { useState } from 'react';
import { CITIES_DATA } from '../data';
import { City } from '../types';
import { Search, Calendar, MapPin, Coffee, Users, ChevronRight, X, Copy, Check, ExternalLink } from 'lucide-react';

export default function CitiesSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'hiatus' | 'launching'>('all');
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredCities = CITIES_DATA.filter((city) => {
    const matchesSearch = 
      city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.provinceOrState.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.country.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'all') return matchesSearch;
    return matchesSearch && city.status === statusFilter;
  });

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const statusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">Active Chapter</span>;
      case 'hiatus':
        return <span className="bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">On Hiatus</span>;
      case 'launching':
        return <span className="bg-sky-50 text-sky-700 border border-sky-100 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">Launching Soon</span>;
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-neutral-400 block">
            Where We Meet
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-neutral-950">
            Find Your Local Chapter
          </h2>
          <div className="h-0.5 w-12 bg-black mx-auto mt-2"></div>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-lg mx-auto font-light">
            Each city meets once a month on a midweek evening to share coffee, conversation, and bikes. Filter or search to discover active meets.
          </p>
        </div>

        {/* Dashboard Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 pb-6 border-b border-neutral-100">
          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
            <input
              type="text"
              placeholder="Search by city, state, or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 hover:border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none px-10 py-3 text-xs tracking-wider transition-all placeholder:text-neutral-400"
            />
          </div>

          {/* Status Buttons */}
          <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
            {(['all', 'active', 'launching', 'hiatus'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setStatusFilter(filter)}
                className={`text-[11px] uppercase tracking-wider font-extrabold px-4 py-2 border transition-all ${
                  statusFilter === filter
                    ? 'bg-black border-black text-white'
                    : 'bg-white border-neutral-200 text-neutral-500 hover:text-black hover:border-neutral-400'
                }`}
              >
                {filter === 'all' ? 'All Cities' : `${filter} Chapters`}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredCities.length === 0 && (
          <div className="text-center py-16 bg-neutral-50 border border-dashed border-neutral-200 rounded-none max-w-lg mx-auto">
            <Users className="mx-auto text-neutral-300 mb-3" size={32} />
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-widest">No Chapters Found</h3>
            <p className="text-neutral-500 text-xs max-w-xs mx-auto mt-2 leading-relaxed">
              We couldn't find any chapters matching "{searchTerm}". Think your town is ready for a meet? Check out the "Host a Social" page above!
            </p>
          </div>
        )}

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city) => (
            <div 
              key={city.id}
              className="group border border-neutral-100 hover:border-neutral-300 bg-white p-6 transition-all duration-300 relative flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl text-neutral-950 group-hover:text-black transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-light mt-0.5">
                      {city.provinceOrState}, {city.country}
                    </p>
                  </div>
                  {statusLabel(city.status)}
                </div>

                {city.nextEvent ? (
                  <div className="bg-neutral-50 p-4 border border-neutral-100 space-y-2">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar size={12} className="text-neutral-400" />
                      Next Social
                    </p>
                    <p className="text-xs font-bold text-neutral-900">
                      {city.nextEvent.date.split(',')[1]}
                    </p>
                    <p className="text-[11px] text-neutral-600 flex items-center gap-1">
                      <Coffee size={10} className="text-neutral-500" />
                      {city.nextEvent.venueName}
                    </p>
                  </div>
                ) : (
                  <div className="bg-neutral-50 p-4 border border-neutral-100 flex items-center text-center justify-center min-h-[90px]">
                    <p className="text-xs text-neutral-500 font-light italic">
                      {city.status === 'hiatus' 
                        ? 'Temporarily resting for winter/breaks.' 
                        : 'Currently scouting cafe locations.'}
                    </p>
                  </div>
                )}

                {/* Local Hosts Avatars */}
                <div className="flex items-center space-x-2 pt-2">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider mr-1">Hosts:</span>
                  <div className="flex -space-x-2 overflow-hidden">
                    {city.hosts.map((host, i) => (
                      <img
                        key={i}
                        src={host.avatarUrl}
                        alt={host.name}
                        title={`${host.name} - ${host.role}`}
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-600 font-medium">
                    {city.hosts.map(h => h.name.split(' ')[0]).join(' & ')}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="border-t border-neutral-100 pt-4 mt-6">
                <button
                  onClick={() => setSelectedCity(city)}
                  className="w-full text-center flex items-center justify-center space-x-1 py-2 text-[11px] font-bold text-black border border-neutral-200 hover:border-black uppercase tracking-widest transition-colors bg-white hover:bg-neutral-50"
                >
                  <span>{city.status === 'active' ? 'See Meet Details' : 'View Core Team'}</span>
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected City Drawer/Modal Detail Dialog */}
        {selectedCity && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div 
              className="bg-white border text-black w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200 border-neutral-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top */}
              <div className="sticky top-0 bg-white border-b border-neutral-100 px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-baseline space-x-2">
                  <h3 className="font-serif text-2xl text-neutral-950 font-medium">{selectedCity.name}</h3>
                  <span className="text-xs text-neutral-500 font-light">({selectedCity.provinceOrState}, {selectedCity.country})</span>
                </div>
                <button 
                  onClick={() => setSelectedCity(null)}
                  className="p-1 text-neutral-400 hover:text-black border border-transparent hover:border-neutral-200 transition-colors"
                  aria-label="Close details"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Event Schedule Display */}
                {selectedCity.status === 'active' && selectedCity.nextEvent ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Event summary info */}
                    <div className="space-y-4">
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest">
                        <Calendar size={12} />
                        <span>Official Social Info</span>
                      </div>

                      <div className="space-y-1">
                        <p className="text-xs text-neutral-400 uppercase font-extrabold tracking-wider">Date & Time</p>
                        <p className="text-base font-bold text-black">{selectedCity.nextEvent.date}</p>
                        <p className="text-xs text-neutral-600 italic">{selectedCity.nextEvent.time}</p>
                      </div>

                      <div className="space-y-1 pt-2">
                        <p className="text-xs text-neutral-400 uppercase font-extrabold tracking-wider">Local Coffee Venue</p>
                        <p className="text-base font-bold text-black">{selectedCity.nextEvent.venueName}</p>
                        <p className="text-xs text-neutral-500">{selectedCity.nextEvent.venueAddress}</p>
                      </div>

                      {/* Utility Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => handleCopyAddress(selectedCity.nextEvent!.venueAddress)}
                          className="flex items-center space-x-1.5 px-4 py-2 border border-neutral-200 hover:border-black text-[11px] font-bold uppercase tracking-wider text-neutral-700 hover:text-black bg-white transition-colors"
                        >
                          {copied ? (
                            <>
                              <Check size={12} className="text-emerald-600" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>Copy Address</span>
                            </>
                          )}
                        </button>

                        {selectedCity.nextEvent.venueUrl && (
                          <a
                            href={selectedCity.nextEvent.venueUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1.5 px-4 py-2 border border-neutral-200 hover:border-black text-[11px] font-bold uppercase tracking-wider text-neutral-700 hover:text-black bg-white transition-colors"
                          >
                            <ExternalLink size={12} />
                            <span>Cafe Site</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Google Maps Embed iframe */}
                    <div className="bg-neutral-100 border border-neutral-200 h-[220px] overflow-hidden relative">
                      {selectedCity.nextEvent.googleMapsEmbedUrl ? (
                        <iframe
                          title="Venue location map"
                          src={selectedCity.nextEvent.googleMapsEmbedUrl}
                          className="w-full h-full border-0 absolute inset-0"
                          allowFullScreen={false}
                          loading="lazy"
                        ></iframe>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center p-4">
                          <MapPin size={28} className="text-neutral-400 mb-1" />
                          <p className="text-xs text-neutral-500 italic">Precompiled static neighborhood map is being processed.</p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-neutral-50 p-6 text-center border">
                    <Calendar size={24} className="mx-auto text-neutral-400 mb-2" />
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-neutral-950">Next Ride Postponed</h4>
                    <p className="text-xs text-neutral-500 max-w-sm mx-auto mt-2 leading-relaxed">
                      This chapter is currently on {selectedCity.status}. Core team leads are actively arranging coordinates for future midweek evening routes. Stay tuned.
                    </p>
                  </div>
                )}

                {/* Local Hosts Team Block */}
                <div className="space-y-4 border-t border-neutral-100 pt-6">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-neutral-100 text-neutral-800 text-[10px] font-bold uppercase tracking-widest">
                    <Users size={12} />
                    <span>Meet Your Hosting Team</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selectedCity.hosts.map((host, key) => (
                      <div key={key} className="flex space-x-4 items-start bg-neutral-50/50 p-4 border border-neutral-100">
                        <img
                          src={host.avatarUrl}
                          alt={host.name}
                          className="w-12 h-12 rounded-full object-cover border flex-shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="space-y-1">
                          <p className="text-xs font-extrabold tracking-wide text-neutral-900">{host.name}</p>
                          <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">{host.role}</p>
                          <p className="text-[12px] text-neutral-500 leading-relaxed font-light">{host.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local Partners */}
                {selectedCity.partners && selectedCity.partners.length > 0 && (
                  <div className="space-y-3 border-t border-neutral-100 pt-6">
                    <p className="text-xs text-neutral-400 uppercase font-extrabold tracking-wider">Local Chapter Supporters</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCity.partners.map((partner, key) => (
                        <span 
                          key={key} 
                          className="bg-neutral-50 text-neutral-700 border border-neutral-200 text-[11px] font-semibold tracking-wider px-3 py-1 bg-white"
                        >
                          {partner.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
