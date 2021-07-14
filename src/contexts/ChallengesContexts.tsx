import { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

interface challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}
interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challegesCompleted: number;
  levelUp: () => void;
  startNewChallege: () => void;
  activeChallenge: challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
}
interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challegesCompleted, setChallegesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level +1) * 4 ,2)

  function levelUp() {
    setLevel(level + 1);
  }
  function startNewChallege() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengesIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        experienceToNextLevel,
        currentExperience,
        challegesCompleted,
        levelUp,
        startNewChallege,
        activeChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
