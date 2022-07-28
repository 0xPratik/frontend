import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Product } from "@prisma/client";

type CartState = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
};

export const useCart = create<CartState>()(
  devtools((set) => ({
    cart: [],
    addToCart: (product: Product) =>
      set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (id: string) =>
      set((state) => {
        const newCartItems = state.cart.filter((item) => item.id !== id);
        console.log(newCartItems);
        return { cart: newCartItems };
      }),
  }))
);
