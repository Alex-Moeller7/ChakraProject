import { useState } from "react";

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import IntroCards from "./components/IntroCards/IntroCards";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroCards />
      <Footer />
    </>
  );
}

export default App;
