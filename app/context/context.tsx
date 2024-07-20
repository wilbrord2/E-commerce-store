"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SavedProductType } from "../types/savedProduct";

interface ContextValue {
  openSearch: boolean;
  setOpenSearch: (arg: boolean) => void;
  openCart: boolean;
  setOpenCart: (arg: boolean) => void;
  savedProduct: SavedProductType;
  setSavedProduct: (arg: SavedProductType) => void;
}

const AppContext = createContext<ContextValue>({} as ContextValue);

function ContextProvider({ children }: PropsWithChildren) {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [savedProduct, setSavedProduct] = useState<SavedProductType>({
    id: "",
    name: "",
    price: 0,
    saved: false,
    image: "",
  });

  return (
    <AppContext.Provider
      value={{
        openSearch,
        setOpenSearch,
        openCart,
        setOpenCart,
        savedProduct,
        setSavedProduct,
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
