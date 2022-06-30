//* Imports
import styled from "../../styles/Home.module.scss";
import Footer from "../common/Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";

function Home() {
  return (
    <div className={styled.home + " backdrop-blur-3xl"}>
      <Header />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Home;
