import { createContext, ReactNode, useState } from "react";


interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challegesCompleted: number;
  levelUp: () => void;
  startNewChallege: () => void;
}
interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challegesCompleted, setChallegesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }
  function startNewChallege() {
    console.log("New challenge");
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challegesCompleted,
        levelUp,
        startNewChallege,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
