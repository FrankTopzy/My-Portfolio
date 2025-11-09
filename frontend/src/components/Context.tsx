import { createContext, useState, type Context, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface PortfolioContextType {
  isTop: boolean;
  setIsTop: Dispatch<SetStateAction<boolean>>;
}

export const PortfolioContext: Context<PortfolioContextType | null> = createContext<PortfolioContextType | null>(null);

type PortfolioContextProps = {
  children: ReactNode;
}

const PortfolioContextProvider = ({children}: PortfolioContextProps) => {
  const [isTop, setIsTop] = useState<boolean>(false);

  const value = {
    isTop,
    setIsTop
  }

  return (<PortfolioContext.Provider value={value}>
    {children}
  </PortfolioContext.Provider>)
}

export default PortfolioContextProvider;