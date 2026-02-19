import "./App.css";
import Header from "./components/Header";
import Boardbase from "./components/leaderboard/Boardbase";
import data from "./assets/data";

// Leaderboard, with components for each person
// Sorted data order

function App() {
  return (
    <>
      <Header />
      <Boardbase data={data} />
    </>
  );
}

export default App;
