import { useState } from "react";

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import IntroCards from "./components/IntroCards/IntroCards";
import IntroInfo from "./components/IntroInfo/IntroInfo";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroCards />
      <IntroInfo />
      <Footer />
    </>
  );
}

export default App;
