import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import IntroBar from "./components/IntroBar";
import CasIntro from "./components/CasIntro";
import { FooterWithSitemap } from "./components/Footer";
import ViewProjectBar from "./components/ViewProjectBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <IntroBar />
      <CasIntro />
      <ViewProjectBar />
      <FooterWithSitemap />
    </>
  );
}

export default App;
