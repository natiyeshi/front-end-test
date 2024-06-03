import Top from "./components/Top";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Lawn from "./components/Lawn";
import Slides from "./components/Slides";

const Index = () => {
  return (
    <main className="bg-secondary text-onSecondary">
      <Top />
      <Nav />
      <Hero />
      <Explore />
      <Lawn />
      <Slides />
      <Footer />
      <div className="text-center w-full py-5 text-primary">
        © 2023, RC Stone Inc., All Rights Reserved.
      </div>
    </main>
  );
};

export default Index;
