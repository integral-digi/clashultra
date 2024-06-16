"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

interface Image {
  id: number;
  url: string;
  alt: string;
  link?: string;
}

interface Content {
  logo: Image;
  hero: Image;
  about: { label: string, title: string, subtitle: string, text: string};
  images: Image[];
  bannerImages: Image[];
}

interface ContentProviderProps {
  children: ReactNode;
}

const ContentContext = createContext<Content | null>(null);

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
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

export const useContent = () => {
  return useContext(ContentContext);
};
