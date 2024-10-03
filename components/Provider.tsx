"use client";
import { ViewType } from "@/types";
import React, {
  createContext,
  useContext,
  ReactNode,
  useRef,
  useState,
  FunctionComponent,
} from "react";

type ContextState = {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
};

interface ContextProviderProps {
  children: ReactNode;
}

const Context = createContext<ContextState | undefined>(undefined);

export const ContextProvider: FunctionComponent<ContextProviderProps> = ({
  children,
}: ContextProviderProps) => {
  const [currentView, setCurrentView] = useState<ViewType>("projects");

  return (
    <Context.Provider
      value={{
        currentView,
        setCurrentView,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePortfolioContext = (): ContextState => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Context must be used within a ContextProvider");
  }
  return context;
};
