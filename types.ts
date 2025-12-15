export interface AboutItem {
  icon: string;
  title: string;
  description: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Pet {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
}

export interface Memory {
  id: number;
  caption: string;
  description: string;
  imageUrl: string; 
  albumImages: string[]; 
}

export interface Outfit {
  id: number;
  title: string;
  note: string;
  imageUrl: string;
}