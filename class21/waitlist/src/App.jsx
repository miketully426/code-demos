import { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import ListItem from "./components/ListItem";

function App() {
  const [list, setList] = useState([]);

  const handleFormUpdate = (nameOfParty, numberInParty) => {
    setList((prevData) => [...prevData, { nameOfParty, numberInParty }]);
  };

  return (
    <>
      <Form handleFormUpdate={handleFormUpdate} />
      {list.map((item, index) => (
        <ListItem party={item} key={index} />
      ))}
    </>
  );
}

export default App;
