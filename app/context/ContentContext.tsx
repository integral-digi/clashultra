"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

// Interfaces for content types
interface Image {
  id?: number;
  url?: string;
  alt: string;
  link?: string; 
}

interface Card {
  id?: number;
  title: string;
  subtitle: string;
  illustration: Image;
}

interface Feature {
  id: number;
  text: string;
}

interface Video {
  src: string;
  alt: string;
}

interface Link {
  id: number;
  name: string;
  url: string;
}

interface Content {
  logo: Image;
  hero?: Image;
  mediaMentions?: { label: string, media: Image[] };
  trailer: Video;
  trailerImages: Image[];
  about?: { label: string, title: string, subtitle: string, text: string };
  images?: Image[];
  bannerImages?: Image[];
  features?: { label: string, title: string, card: Card[] };
  subscribe?: { title: string, placeholder: string, buttonText: string };
  cta?: { title: string, buttonText: string, icon?: Image, features: Feature[] };
  footer: { 
    logo: Image, 
    firstDiv: { title: string, links: Link[] }, 
    secondDiv: { id: number, url: string, alt: string, link: string }[], 
    copyright: string 
  };
}

interface ContentProviderProps {
  children: ReactNode;
}

// Creating a context for content with default value as null
const ContentContext = createContext<Content | null>(null);

// ContentProvider component to fetch and provide content to the application
export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Fetch content from the API
        const res = await axios.get('/api/content');
        const data: Content = res.data;
        setContent(data);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};

// Custom hook to use the content context
export const useContent = () => {
  return useContext(ContentContext);
};
