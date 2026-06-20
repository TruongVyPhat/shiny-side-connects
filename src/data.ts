import { City, MerchItem } from './types';

export const CITIES_DATA: City[] = [
  {
    id: 'toronto',
    name: 'Toronto',
    provinceOrState: 'Ontario',
    country: 'Canada',
    status: 'active',
    nextEvent: {
      date: 'Wednesday, July 1, 2026',
      time: '7:00 PM - 9:00 PM',
      venueName: 'Pilot Coffee Roasters',
      venueAddress: '50 Wagstaff Dr, Toronto, ON M4L 3W9',
      venueUrl: 'https://www.pilotcoffeeroasters.com',
      googleMapsEmbedUrl: 'https://maps.google.com/maps?q=50%20Wagstaff%20Dr,%20Toronto&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    hosts: [
      {
        name: 'Viktor Radics',
        role: 'Co-Founder & Host',
        bio: 'Avid vintage motorcycle builder, coffee enthusiast, and community connector who loves making new friends.',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop'
      },
      {
        name: 'Samantha Radics',
        role: 'Co-Founder & Host',
        bio: 'Graphic designer and creative director passionate about community building and inclusive urban spaces.',
        avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&auto=format&fit=crop'
      }
    ],
    partners: [
      { name: 'Triumph Motorcycles' },
      { name: 'Pilot Coffee Roasters' },
      { name: 'Town Moto' }
    ]
  },
  {
    id: 'montreal',
    name: 'Montréal',
    provinceOrState: 'Québec',
    country: 'Canada',
    status: 'active',
    nextEvent: {
      date: 'Wednesday, July 8, 2026',
      time: '7:00 PM - 9:00 PM',
      venueName: 'Dispatch Coffee',
      venueAddress: '267 Rue Saint-Viateur O, Montréal, QC H2V 1Y1',
      venueUrl: 'https://dispatchcoffee.ca',
      googleMapsEmbedUrl: 'https://maps.google.com/maps?q=267%20Saint-Viateur%20O,%20Montreal&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    hosts: [
      {
        name: 'Marc-Antoine',
        role: 'Local Host',
        bio: 'Rides a custom 1982 Yamaha XS650. Knows every hidden gravel road and espresso bar in Quebec.',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop'
      }
    ],
    partners: [
      { name: 'Dime MTL' },
      { name: 'Dispatch Coffee' }
    ]
  },
  {
    id: 'new-york',
    name: 'New York City',
    provinceOrState: 'New York',
    country: 'USA',
    status: 'active',
    nextEvent: {
      date: 'Thursday, July 16, 2026',
      time: '7:00 PM - 9:00 PM',
      venueName: 'Jane Motorcycles',
      venueAddress: '396 Wythe Ave, Brooklyn, NY 11249',
      venueUrl: 'https://janemotorcycles.com',
      googleMapsEmbedUrl: 'https://maps.google.com/maps?q=396%20Wythe%20Ave,%20Brooklyn,%20NY&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    hosts: [
      {
        name: 'Alex & Jess',
        role: 'NYC Core Hosts',
        bio: 'Brooklyn locals on a mission to connect the five boroughs\' diverse rider groups, one coffee cup at a time.',
        avatarUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=250&auto=format&fit=crop'
      }
    ],
    partners: [
      { name: 'Jane Motorcycles' },
      { name: 'Vance & Hines' }
    ]
  },
  {
    id: 'vancouver',
    name: 'Vancouver',
    provinceOrState: 'British Columbia',
    country: 'Canada',
    status: 'active',
    nextEvent: {
      date: 'Wednesday, July 15, 2026',
      time: '7:00 PM - 9:00 PM',
      venueName: 'Matchstick Coffee',
      venueAddress: '4807 Main St, Vancouver, BC V5V 3R9',
      venueUrl: 'https://matchstickcoffee.com',
      googleMapsEmbedUrl: 'https://maps.google.com/maps?q=4807%20Main%20St,%20Vancouver&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    hosts: [
      {
        name: 'Kassandra',
        role: 'Vancouver Lead',
        bio: 'Dirt rider turned street commuter, Kassandra is active in creating friendly inclusive spaces for female riders.',
        avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=250&auto=format&fit=crop'
      }
    ],
    partners: [
      { name: 'Matchstick Coffee' },
      { name: 'Vancouver Dual Sport' }
    ]
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    provinceOrState: 'Western Cape',
    country: 'South Africa',
    status: 'launching',
    hosts: [
      {
        name: 'Zane & Thabo',
        role: 'Cape Town Captains',
        bio: 'Passionate about custom builds, ocean drives, and showcasing the beautiful South African bike culture.',
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop'
      }
    ],
    partners: [
      { name: 'House of Machines' },
      { name: 'Truth Coffee Roasting' }
    ]
  },
  {
    id: 'munich',
    name: 'Munich',
    provinceOrState: 'Bavaria',
    country: 'Germany',
    status: 'hiatus',
    hosts: [
      {
        name: 'Sven',
        role: 'Local Lead',
        bio: 'Restoring old BMW boxers by day, organizing road cruises through the Bavarian Alps by night.',
        avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=250&auto=format&fit=crop'
      }
    ],
    partners: [
      { name: 'BMW Motorrad' },
      { name: 'Man vs Machine Coffee' }
    ]
  }
];

export const MERCH_DATA: MerchItem[] = [
  {
    id: 'tms-tee-black',
    name: 'Shiny Side Connects Signature Tee',
    price: 36,
    description: 'Our iconic signature t-shirt. Premium weight vintage wash black cotton with crisp white screen-printed chest block typography. Proudly built for comfort on long rides.',
    imageUrl: '/src/assets/images/merch_tee_1781624051226.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Apparel',
    inStock: true
  },
  {
    id: 'tms-cap-black',
    name: 'Script Dad Hat',
    price: 30,
    description: 'Unstructured vintage washed cotton cap with custom cursive script chain-stitch embroidery on the front panel. Antique brass slide buckle closure.',
    imageUrl: '/src/assets/images/merch_cap_1781624065776.jpg',
    sizes: ['One Size Fits All'],
    category: 'Headwear',
    inStock: true
  },
  {
    id: 'tms-sticker-pack',
    name: 'Community Die-Cut Sticker Pack',
    price: 12,
    description: 'Set of 5 heavy-duty vinyl weather-resistant stickers. Perfect for your cycle helmet, gas tank, laptop, or local coffee shop shopfront.',
    imageUrl: 'https://images.unsplash.com/photo-1572375995301-401894e82 c55?q=80&w=400&auto=format&fit=crop', // clean vinyl stickers mock
    sizes: ['Standard'],
    category: 'Accessories',
    inStock: true
  },
  {
    id: 'tms-keychain-leather',
    name: 'Tan Leather Riding fob',
    price: 18,
    description: 'Genuine cowhide oil-tanned leather strip with solid brass split-ring. Embossed with the Shiny Side Connects insignia. Handcrafted in Toronto.',
    imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop', // leather fob
    sizes: ['One Size'],
    category: 'Accessories',
    inStock: true
  }
];

export const GALLERY_MOCKS = [
  {
    id: 'snap-1',
    caption: 'Classic bikes, epic friends. Toronto was a blast yesterday! ☕🏍️',
    city: 'Toronto',
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600&auto=format&fit=crop',
    userName: '@classic_rider',
    timestamp: '2 hours ago',
    likes: 42
  },
  {
    id: 'snap-2',
    caption: 'Best turnout ever in Montreal. Sunshine, cafe racers & sweet vibes.',
    city: 'Montréal',
    imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=600&auto=format&fit=crop',
    userName: '@mtl_moto_boy',
    timestamp: '1 day ago',
    likes: 85
  },
  {
    id: 'snap-3',
    caption: 'Nothing beats good coffee and old iron under Brooklyn twilight.',
    city: 'New York City',
    imageUrl: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=600&auto=format&fit=crop',
    userName: '@brooklyn_customs',
    timestamp: '3 days ago',
    likes: 110
  },
  {
    id: 'snap-4',
    caption: 'Great to meet everyone, so many riders came down in Vancouver today!',
    city: 'Vancouver',
    imageUrl: 'https://images.unsplash.com/photo-1449426468159-d96dbf18f19f?q=80&w=600&auto=format&fit=crop',
    userName: '@kass_rides_west',
    timestamp: '4 days ago',
    likes: 67
  }
];

export const TIMELINE_STORIES = [
  {
    year: '2013',
    title: 'The First Spark',
    description: 'Viktor & Samantha Radics gathered a small group of 15 motorcycle enthusiasts at standard sidewalk spots in Toronto. No hype, just folks sharing coffee, laughter, and stories.'
  },
  {
    year: '2015',
    title: 'Spreading the Vibe',
    description: 'Word of mouth spread. Riders in Montréal, Vancouver, and Ottawa reached out wanting the same open-concept platform. Shiny Side Connects officially expanded beyond local borders.'
  },
  {
    year: '2018',
    title: 'Going Global',
    description: 'First international chapters launched in Cape Town, New York, and Munich. The simple belief that "It\'s about the people, not the bikes" proved to resonate universally.'
  },
  {
    year: '2026',
    title: 'Stronger Than Ever',
    description: 'Dozens of cities host monthly, gathering thousands of friendly faces, supporting local independent coffee shops, and generating hundreds of authentic friendships worldwide.'
  }
];
