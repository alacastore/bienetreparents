export interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  popular?: boolean;
}