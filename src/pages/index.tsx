import React from "react";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CounteDown } from "../components/CounteDown";
import { ExperenceBar } from "../components/ExperenceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts/ChallengesContexts";

export default function Home(props) {
  
  return (
    <ChallengesProvider>
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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
 

  const { level, currentExperience, challegesCompleted } = ctx.req.cookies;

  return {
    props: {
      level, 
      currentExperience, 
      challegesCompleted,
    }
  };
};
