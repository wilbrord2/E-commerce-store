"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ContextValue {
  openSearch: boolean;
  setOpenSearch: (arg: boolean) => void;
  openCart: boolean;
  setOpenCart: (arg: boolean) => void;
}

const AppContext = createContext<ContextValue>({} as ContextValue);

function ContextProvider({ children }: PropsWithChildren) {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <AppContext.Provider
      value={{
        openSearch,
        setOpenSearch,
        openCart,
        setOpenCart,
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
