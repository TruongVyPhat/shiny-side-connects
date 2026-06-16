export interface City {
  id: string;
  name: string;
  provinceOrState: string;
  country: string;
  status: 'active' | 'hiatus' | 'launching';
  nextEvent?: {
    date: string;
    time: string;
    venueName: string;
    venueAddress: string;
    venueUrl?: string;
    googleMapsEmbedUrl?: string;
  };
  hosts: {
    name: string;
    role: string;
    bio: string;
    avatarUrl: string;
  }[];
  partners: {
    name: string;
    logoUrl?: string;
    url?: string;
  }[];
}

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  sizes: string[];
  category: 'Apparel' | 'Accessories' | 'Headwear';
  inStock: boolean;
}

export interface CartItem {
  id: string; // combining item ID + size
  item: MerchItem;
  size: string;
  quantity: number;
}

export interface HostApplication {
  city: string;
  country: string;
  applicantName: string;
  applicantEmail: string;
  instagram: string;
  aboutYou: string;
  whyYourCity: string;
  localCoffeeScene: string;
}

export interface CommunitySnap {
  id: string;
  caption: string;
  city: string;
  imageUrl: string;
  userName: string;
  timestamp: string;
  likes: number;
}
