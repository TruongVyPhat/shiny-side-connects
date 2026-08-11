export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  photographer?: string;
  bikesFeatured?: string;
  likes: number;
}

export interface TimelineEvent {
  id: string;
  year: string;
  dateLabel: string;
  title: string;
  location: string;
  attendees: string;
  description: string;
  coverImage: string;
  photos: GalleryPhoto[];
}

export const EVENT_TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 'event-2025-may',
    year: '2025',
    dateLabel: 'May 2025',
    title: 'The First Meet @ Off-Campus',
    location: 'Off-Campus Restaurant, Edmonton',
    attendees: '25+ Bikes',
    description: 'Where it all started. Tang and the founding crew gathered a small group of Edmonton riders at Off-Campus. Warm coffee, park-side chats, and a shared passion.',
    coverImage: '/src/assets/images/community_laughing_1781624034619.jpg',
    photos: [
      {
        id: 'p1-1',
        url: '/src/assets/images/community_laughing_1781624034619.jpg',
        caption: 'Founding crew sharing laughs outside Off-Campus restaurant.',
        photographer: 'Emily S.',
        bikesFeatured: 'Custom Cafe Racers & Sportbikes',
        likes: 64
      },
      {
        id: 'p1-2',
        url: '/src/assets/images/hero_motorcycles_1781624019427.jpg',
        caption: 'Lineup of bikes parked along the curb on opening day.',
        photographer: 'Emily S.',
        bikesFeatured: 'Yamaha, Honda, Triumph',
        likes: 52
      },
      {
        id: 'p1-3',
        url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop',
        caption: 'Golden hour reflections on classic chrome engines.',
        photographer: 'Justin K.',
        bikesFeatured: 'Vintage Air-cooled',
        likes: 48
      },
      {
        id: 'p1-4',
        url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1000&auto=format&fit=crop',
        caption: 'First coffee & helmet stack of the 2025 season.',
        photographer: 'Tobey M.',
        bikesFeatured: 'Helmet Lineup',
        likes: 71
      }
    ]
  },
  {
    id: 'event-2025-july',
    year: '2025',
    dateLabel: 'July 2025',
    title: 'River Valley Mid-Season Cruise',
    location: 'Edmonton River Valley & Victoria Park',
    attendees: '80+ Bikes',
    description: 'Word spread fast across the city. Over 80 riders joined for a scenic sunset cruise winding through the Edmonton River Valley.',
    coverImage: '/src/assets/banner/moto_banner_1.jpg',
    photos: [
      {
        id: 'p2-1',
        url: '/src/assets/banner/moto_banner_1.jpg',
        caption: 'Group cruise through the River Valley canopy.',
        photographer: 'Emily S.',
        bikesFeatured: 'All Makes & Models',
        likes: 124
      },
      {
        id: 'p2-2',
        url: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=1000&auto=format&fit=crop',
        caption: 'Sunset regroup at Victoria Park overlooking the bridge.',
        photographer: 'Devin T.',
        bikesFeatured: 'Cruisers & Supermotos',
        likes: 98
      },
      {
        id: 'p2-3',
        url: 'https://images.unsplash.com/photo-1449426468159-d96dbf18f19f?q=80&w=1000&auto=format&fit=crop',
        caption: 'Catching up after the cruise as dusk falls.',
        photographer: 'Tobey M.',
        bikesFeatured: 'Ducati & BMW',
        likes: 83
      },
      {
        id: 'p2-4',
        url: 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?q=80&w=1000&auto=format&fit=crop',
        caption: 'Detailed shot of a custom hand-built exhaust tank.',
        photographer: 'Emily S.',
        bikesFeatured: 'Custom Chopper',
        likes: 110
      }
    ]
  },
  {
    id: 'event-2025-sept',
    year: '2025',
    dateLabel: 'Sept 2025',
    title: 'Whyte Ave End of Season Sunset',
    location: 'Whyte Avenue & Strathcona',
    attendees: '120+ Bikes',
    description: 'Wrapping up an unforgettable first summer with over 120 riders taking over Whyte Ave. Crisp Alberta autumn air and glowing neon lights.',
    coverImage: '/src/assets/banner/moto_banner_2.jpg',
    photos: [
      {
        id: 'p3-1',
        url: '/src/assets/banner/moto_banner_2.jpg',
        caption: 'Riders lining up on Whyte Ave as dusk turns to night.',
        photographer: 'Tobey M.',
        bikesFeatured: 'Streetfighters & Nakeds',
        likes: 156
      },
      {
        id: 'p3-2',
        url: 'https://images.unsplash.com/photo-1515777315837-282b92050a20?q=80&w=1000&auto=format&fit=crop',
        caption: 'Glowing tail lights reflecting on wet tarmac after autumn drizzle.',
        photographer: 'Emily S.',
        bikesFeatured: 'Night Cruisers',
        likes: 142
      },
      {
        id: 'p3-3',
        url: 'https://images.unsplash.com/photo-1525160354320-d8e92641c563?q=80&w=1000&auto=format&fit=crop',
        caption: 'Close-up on custom hand-painted helmet visor art.',
        photographer: 'Emily S.',
        bikesFeatured: 'Custom Gear',
        likes: 95
      },
      {
        id: 'p3-4',
        url: '/src/assets/images/merch_tee_1781624051226.jpg',
        caption: 'First batch of Shiny Side Connects signature tees handed out.',
        photographer: 'Kim N.',
        bikesFeatured: 'SSC Apparel',
        likes: 88
      }
    ]
  },
  {
    id: 'event-2025-dec',
    year: '2025',
    dateLabel: 'Dec 2025',
    title: 'Winter Off-Season Garage Social',
    location: 'Tulu Workshop, Edmonton',
    attendees: '60+ Members',
    description: 'Bikes were parked for the snow, but the community stayed connected. Indoor garage gathering with hot cocoa, project bike builds, and 2026 season planning.',
    coverImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop',
    photos: [
      {
        id: 'p4-1',
        url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop',
        caption: 'Indoor winter social at Tulu Workshop.',
        photographer: 'Kim N.',
        bikesFeatured: 'Garage Projects',
        likes: 91
      },
      {
        id: 'p4-2',
        url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1000&auto=format&fit=crop',
        caption: 'Winter tear-down and rebuild discussion.',
        photographer: 'Justin K.',
        bikesFeatured: 'Engine Rebuilds',
        likes: 77
      },
      {
        id: 'p4-3',
        url: '/src/assets/images/merch_cap_1781624065776.jpg',
        caption: 'Unveiling the new SSC Script Dad Hat during winter meet.',
        photographer: 'Tobey M.',
        bikesFeatured: 'Headwear Gear',
        likes: 104
      }
    ]
  },
  {
    id: 'event-2026-may',
    year: '2026',
    dateLabel: 'May 2026',
    title: 'Season Opener @ Tippsy Moose',
    location: 'Tippsy Moose, Edmonton',
    attendees: '150+ Bikes',
    description: 'Kicking off 2026 in style! Over 150 bikes packed the parking lot at Tippsy Moose with live music, local food, and old friends re-uniting.',
    coverImage: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop',
    photos: [
      {
        id: 'p5-1',
        url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop',
        caption: 'Packed lot at Tippsy Moose for 2026 Season Opener.',
        photographer: 'Emily S.',
        bikesFeatured: 'Full Edmonton Community',
        likes: 210
      },
      {
        id: 'p5-2',
        url: 'https://images.unsplash.com/photo-1558981803-138379f67a21?q=80&w=1000&auto=format&fit=crop',
        caption: 'Bright sunshine and sparkling paint on opening morning.',
        photographer: 'Emily S.',
        bikesFeatured: 'Custom Paintjobs',
        likes: 175
      },
      {
        id: 'p5-3',
        url: 'https://images.unsplash.com/photo-1558980664-10e7170b5df9?q=80&w=1000&auto=format&fit=crop',
        caption: 'Riders catching up over breakfast at Tippsy Moose.',
        photographer: 'Tobey M.',
        bikesFeatured: 'Rider Smiles',
        likes: 148
      },
      {
        id: 'p5-4',
        url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1000&auto=format&fit=crop',
        caption: 'Local DJ pumping tunes while riders admire the builds.',
        photographer: 'Kim N.',
        bikesFeatured: 'DJ & Sound Setup',
        likes: 162
      }
    ]
  },
  {
    id: 'event-2026-july',
    year: '2026',
    dateLabel: 'July 2026',
    title: 'High Level Bridge Mid-Summer Night Ride',
    location: 'High Level Bridge & Downtown Edmonton',
    attendees: '200+ Bikes',
    description: 'Our biggest meet to date! 200+ motorcycles crossing the High Level Bridge under twilight lights in a show of Edmonton riding unity.',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop',
    photos: [
      {
        id: 'p6-1',
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop',
        caption: 'Crossing High Level Bridge at sunset with 200+ riders.',
        photographer: 'Emily S.',
        bikesFeatured: 'Edmonton Skyline Cruise',
        likes: 289
      },
      {
        id: 'p6-2',
        url: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1000&auto=format&fit=crop',
        caption: 'Parked along the downtown overlook for group pictures.',
        photographer: 'Tobey M.',
        bikesFeatured: 'Downtown View',
        likes: 245
      },
      {
        id: 'p6-3',
        url: 'https://images.unsplash.com/photo-1558980335-8e0c25f7f670?q=80&w=1000&auto=format&fit=crop',
        caption: 'Detail of custom LED lights glowing as night sets in.',
        photographer: 'Devin T.',
        bikesFeatured: 'Custom Lighting',
        likes: 198
      },
      {
        id: 'p6-4',
        url: 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?q=80&w=1000&auto=format&fit=crop',
        caption: 'Founders Tang & Justin celebrating the record turnout.',
        photographer: 'Emily S.',
        bikesFeatured: 'SSC Founders',
        likes: 312
      }
    ]
  }
];
