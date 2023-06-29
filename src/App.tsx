import React from "react";
import { HomePageView } from "./views/HomePageView";
import "./App.styles.scss";

function App() {
  console.log(process.env.MONGO_DB_URL);
  return <HomePageView />;
}

export default App;
