import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./ChallengesContexts";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
}
interface CountdownProviderProps {
  children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData);
let countcouwnTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallege } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    setIsActive(true);
  }
  function resetCountDown() {
    clearTimeout(countcouwnTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countcouwnTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallege();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider value={{}}>
      minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown,
    </CountdownContext.Provider>
  );
}
