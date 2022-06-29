//* Imports
import { useState } from "react";
import styled from "../../styles/Home.module.scss";
import GetStarted from "./GetStarted";
import Header from "./Header";

function Home() {
  return (
    <div className={styled.home + " backdrop-blur-3xl"}>
      <Header />
      <GetStarted />
    </div>
  );
}

export default Home;
