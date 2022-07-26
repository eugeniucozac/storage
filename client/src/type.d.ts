import { ChangeEvent } from "react";
export interface ProductType {
  id: number;
  image: string;
  title: string;
  price: number;
  description?: string;
  category?: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface ProductsSelectorType {
  products: {
    products: ProductType[];
    loading?: boolean;
    hasErrors?: boolean;
  };
}

export interface ReactChildren {
  children: ReactNode;
}

export interface SearchType {
  query: string;
  handleSearch(event: ChangeEvent<HTMLInputElement>): void;
}
