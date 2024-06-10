import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import MainContent from "@components/MainContent";

export default function Home() {
  return (
    <ContainerBlock
      title="Waqar Saeed - Expert Unity Games Developer"
      description="Good Games designed and developed by an Expert in Unity Games, AR, and VR Games. The Best Game Developer YOU Deserve."
    >
      <MainContent />
    </ContainerBlock>
  );
}
