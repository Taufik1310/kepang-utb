export type ProductType = {
  id: string;
  name: string;
  price: number;
  description?: string;
  thumbnail?: string;
  pics?: string[];
  sizes?: string[];
  availability?: string;
  disabled?: boolean;
};
