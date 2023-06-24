import React from "react";
import { HeaderSection, ProjectSection } from "./views/HomePageView";
import { FooterSection } from "./views/HomePageView";

function App() {
  console.log(process.env.REACT_APP_MONGO_DB_URL);
  return (
    <>
      <HeaderSection />
      <ProjectSection />
      <FooterSection />
    </>
  );
}

export default App;
