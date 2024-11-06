import { Product } from "./product";

export interface Cart {
  products?: Product[];
}
export interface CartInfo {
  products: CartProduct[],
  totalPrice: number,
  totalPriceFormatted: string,
  totalItems: number,
}

export interface CartProduct extends Product {
  quantity: number;
 }