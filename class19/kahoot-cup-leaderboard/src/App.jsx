import "./App.css";
import Header from "./components/Header";
import Boardbase from "./components/leaderboard/Boardbase";
import data from "./assets/data";
import { useState } from "react";

// Leaderboard, with components for each person
// Sorted data order

function App() {
  const [leaders, setLeaders] = useState(data);

  return (
    <>
      <Header />
      <Boardbase data={leaders} setLeaders={setLeaders} />
    </>
  );
}

export default App;
