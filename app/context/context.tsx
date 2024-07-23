"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartType} from "../helpers/arrays";

interface ContextValue {
  openSearch: boolean;
  setOpenSearch: (arg: boolean) => void;
  openCart: boolean;
  setOpenCart: (arg: boolean) => void;
  addedToCart: boolean;
  setaAddedToCart: (arg: boolean) => void;
  filterCategory: string;
  setFilterCategory: (arg: string) => void;
}

const AppContext = createContext<ContextValue>({} as ContextValue);

function ContextProvider({ children }: PropsWithChildren) {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [addedToCart, setaAddedToCart] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");


  return (
    <AppContext.Provider
      value={{
        openSearch,
        setOpenSearch,
        openCart,
        setOpenCart,
        filterCategory,
        setFilterCategory,
        addedToCart,
        setaAddedToCart,
        
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
