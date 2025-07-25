import type { PortfolioProps } from "@/types/portfolio-data/portfolio-types";
import { create } from "zustand";

interface ProductsState {
  products: PortfolioProps[];
  addProduct: (app: PortfolioProps) => void;
  removeProduct: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

export const useProducts = create<ProductsState>((set) => ({
  products: [],
  addProduct: (app: PortfolioProps) =>
    set((state) => {
      const currentProduct = state.products.find(
        (product) => product.id === app.id
      );

      if (currentProduct) {
        return {
          products: state.products.map((product) =>
            product.id === app.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return {
          products: [
            ...state.products,
            { ...app, quantity: app.quantity || 1 },
          ],
        };
      }
    }),
  removeProduct: (id: number) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),

  increaseQuantity: (id: number) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    })),
  decreaseQuantity: (id: number) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    })),
}));
