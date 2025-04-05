import { create } from "zustand";

interface TokenState {
  tokens: Token[];
  setTokens: (tokens: Token[]) => void;
}

export const useTokenStore = create<TokenState>((set) => ({
  tokens: [],
  setTokens: (tokens) => set({ tokens }),
}));
