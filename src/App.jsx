import "./App.css";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About";
import Experience from "./Components/experience/Experience";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

import { useState } from "react";

function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      <Header setActive={setActive} />
      <Nav active={active} />
      <About setActive={setActive} />
      <Experience setActive={setActive} />
      <Portfolio setActive={setActive} />
      <Contact setActive={setActive} />
      <Footer />
    </>
  );
}

export default App;
