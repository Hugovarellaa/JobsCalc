import { ChallengesProvider } from "../contexts/ChallengesContexts";
import { CountdownProvider } from "../contexts/CountdownContext";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      
        <Component {...pageProps} />
    
    </ChallengesProvider>
  );
}
