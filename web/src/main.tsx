import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "motion/react";
import "@fontsource/chakra-petch/thai-500.css";
import "@fontsource/chakra-petch/thai-600.css";
import "@fontsource/chakra-petch/thai-700.css";
import "@fontsource/chakra-petch/latin-500.css";
import "@fontsource/chakra-petch/latin-600.css";
import "@fontsource/chakra-petch/latin-700.css";
import "@fontsource/ibm-plex-sans-thai/thai-400.css";
import "@fontsource/ibm-plex-sans-thai/thai-500.css";
import "@fontsource/ibm-plex-sans-thai/latin-400.css";
import "@fontsource/ibm-plex-sans-thai/latin-500.css";
import "./index.css";
import { About, FreeBento, Facts, Footer, Hero, Nav, Roadmap, Tips, Workbench } from "./components/Sections";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Facts />
        <Workbench />
        <Roadmap />
        <FreeBento />
        <Tips />
        <About />
      </main>
      <Footer />
    </MotionConfig>
  </StrictMode>
);
