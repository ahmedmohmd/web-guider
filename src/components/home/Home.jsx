//* Imports
import { useEffect } from "react";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";

//* Home JSX
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"home backdrop-blur-3xl"}>
      <Header />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Home;
