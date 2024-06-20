// interfaces for content types
export interface Image {
    id?: number;
    url?: string;
    alt: string;
    link?: string; 
  }
  
  export interface Card {
    id?: number;
    title: string;
    subtitle: string;
    illustration: Image;
    backgroundColor: string;
    textColor: string;
  }
  
  export interface Feature {
    id: number;
    text: string;
  }
  
  export interface Video {
    src: string;
    alt: string;
  }
  
  export interface Link {
    id: number;
    name: string;
    url: string;
  }
  
  export interface Content {
    color?: { backgroundColor: string, textColor: string };
    logo: Image;
    hero?: Image;
    mediaMentions?: { label: string, media: Image[] };
    trailer: { video: Video, image: Image };
    trailerImages: Image[];
    about?: { label: string, title: string, subtitle: string, text: string };
    images?: Image[];
    bannerImages?: Image[];
    features?: { label: string, title: string, card: Card[] };
    subscribe?: { title: string, placeholder: string, buttonText: string, apiKey: string, apiUrl: string };
    cta?: { title: string, buttonText: string, icon?: Image, features: Feature[] };
    footer: { 
      logo: Image, 
      firstDiv: { title: string, links: Link[] }, 
      secondDiv: { id: number, url: string, alt: string, link: string }[], 
      copyright: string 
    };
  }