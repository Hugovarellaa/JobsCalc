import React from "react";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CounteDown } from "../components/CounteDown";
import { ExperenceBar } from "../components/ExperenceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperenceBar />
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CounteDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
