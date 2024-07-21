export interface CartType {
  id: string;
  image: string;
  name: string;
  price: number;
}
export interface SavedProductType {
  id: string;
  name: string;
  price: number;
  saved: boolean;
  image: string;
}
export const savedProduct: SavedProductType[] = [];
export const cartList: CartType[] = [];
