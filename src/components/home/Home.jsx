//* Imports
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";

//* Home JSX
function Home() {
  return (
    <div className={"home backdrop-blur-3xl"}>
      <Header />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Home;
