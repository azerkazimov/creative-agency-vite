import type { PortfolioProps } from "@/types/portfolio-data/portfolio-types";
import { create } from "zustand";

interface ProductsState {
  products: PortfolioProps[];
  addProduct: (app: PortfolioProps) => void;
}

export const useProducts = create<ProductsState>((set) => ({
  products: [],
  addProduct: (app: PortfolioProps) =>
    set((state) => ({ products: [...state.products, app] })),
}));
