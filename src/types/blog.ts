export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}