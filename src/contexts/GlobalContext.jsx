import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleCart = { cart, setCart };

  return (
    <GlobalContext.Provider value={handleCart}>
      {children}
    </GlobalContext.Provider>
  );
}
