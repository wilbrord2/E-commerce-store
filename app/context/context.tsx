"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartType, SavedProductType } from "../helpers/arrays";

interface ContextValue {
  openSearch: boolean;
  setOpenSearch: (arg: boolean) => void;
  openCart: boolean;
  setOpenCart: (arg: boolean) => void;
  addedToCart: boolean;
  setaAddedToCart: (arg: boolean) => void;
  saveProduct: SavedProductType;
  setSaveProduct: (arg: SavedProductType) => void;
  addToCart: CartType;
  setAddToCart: (arg: CartType) => void;
}

const AppContext = createContext<ContextValue>({} as ContextValue);

function ContextProvider({ children }: PropsWithChildren) {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [addedToCart, setaAddedToCart] = useState(false);
  const [saveProduct, setSaveProduct] = useState<SavedProductType>({
    id: "",
    name: "",
    price: 0,
    saved: false,
    image: "",
  });
  const [addToCart, setAddToCart] = useState<CartType>({
    id: "",
    name: "",
    price: 0,
    image: "",
  });

  return (
    <AppContext.Provider
      value={{
        openSearch,
        setOpenSearch,
        openCart,
        setOpenCart,
        saveProduct,
        setSaveProduct,
        addedToCart,
        setaAddedToCart,
        addToCart,
        setAddToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
export default ContextProvider;
