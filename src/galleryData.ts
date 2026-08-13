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
    id: 'mid-season-madness',
    year: '2026',
    dateLabel: 'July 11, 2026',
    title: 'Mid season madness night meet',
    location: '13303 Fort Rd NW, Edmonton, AB T5A 1C3, Canada',
    attendees: '5:00 PM - 9:00 PM',
    description: 'Get ready for our mid-season night meet in Edmonton! Bringing custom moto builders, scooter riders, vintage collectors, and local enthusiast culture together side-by-side. Zero pressure and all smiles.',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop',
    photos: [
      {
        id: 'p6-1',
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop',
        caption: 'Night meet reflections under the lights.',
        photographer: 'Emily S.',
        bikesFeatured: 'Custom Night Builds',
        likes: 289
      },
      {
        id: 'p6-2',
        url: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1000&auto=format&fit=crop',
        caption: 'Parked along StorageMart for group pictures.',
        photographer: 'Tobey M.',
        bikesFeatured: 'Edmonton Community',
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
        caption: 'Founders and community members celebrating the turnout.',
        photographer: 'Emily S.',
        bikesFeatured: 'SSC Community',
        likes: 312
      }
    ]
  },
  {
    id: 'full-send-august',
    year: '2026',
    dateLabel: 'August 15, 2026',
    title: 'Full-send august',
    location: 'Tipsy Moose Pub & Kitchen | 6464 Cartmell Pl SW, Edmonton',
    attendees: '12:00 PM - 4:00 PM',
    description: 'Join us for our high-energy August meet in Edmonton. Meet us by the curb with fresh brews, good vibes, and beautiful builds. Drive, ride, or walk over to connect with local riders.',
    coverImage: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop',
    photos: [
      {
        id: 'p5-1',
        url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop',
        caption: 'Packed street lineup along Whyte Ave for Full-Send August.',
        photographer: 'Emily S.',
        bikesFeatured: 'Full Edmonton Community',
        likes: 210
      },
      {
        id: 'p5-2',
        url: 'https://images.unsplash.com/photo-1558981803-138379f67a21?q=80&w=1000&auto=format&fit=crop',
        caption: 'Bright afternoon sun and sparkling paint on custom rides.',
        photographer: 'Emily S.',
        bikesFeatured: 'Custom Paintjobs',
        likes: 175
      },
      {
        id: 'p5-3',
        url: 'https://images.unsplash.com/photo-1558980664-10e7170b5df9?q=80&w=1000&auto=format&fit=crop',
        caption: 'Riders catching up over cold brews and coffee in Strathcona.',
        photographer: 'Tobey M.',
        bikesFeatured: 'Rider Smiles',
        likes: 148
      },
      {
        id: 'p5-4',
        url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1000&auto=format&fit=crop',
        caption: 'Good music and great vibes as riders admire the builds.',
        photographer: 'Kim N.',
        bikesFeatured: 'Afternoon Social',
        likes: 162
      }
    ]
  }
];
