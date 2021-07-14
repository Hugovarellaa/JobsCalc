import { createContext, ReactNode } from "react";

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  return (
    <ChallengesContext.Provider value={{ level: 1 }}>
      {children}
    </ChallengesContext.Provider>
  );
}
