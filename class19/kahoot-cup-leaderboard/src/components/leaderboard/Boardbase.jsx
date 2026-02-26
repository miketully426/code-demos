import React, { useState } from "react";
import BoardItem from "./BoardItem";
import "./Boardbase.css";
import Button from "../button/Button";
import Form from "./form/Form";

export default function Boardbase(props) {
  const [showForm, setShowForm] = useState(false);
  const orderData = () => {
    return props.data.sort((a, b) => b.points - a.points);
  };
  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleLeadersUpdate = (name, points) => {
    let newPerson = true;
    const newLeaders = props.data.map((item) => {
      if (item.name === name) {
        item.points = points;
        newPerson = false;
        return item;
      } else {
        return item;
      }
    });

    if (newPerson) {
      newLeaders.push({ name: name, points: points });
    }
    props.setLeaders(newLeaders);
    handleButtonClick();
  };

  orderData();
  return (
    <div className="board-container">
      {showForm ? (
        <Form leaders={props.data} setLeaders={handleLeadersUpdate} />
      ) : (
        <Button onClick={handleButtonClick} displayValue="Update Leaderboard" />
      )}
      <h1>Kahoot Cup Leaderboard</h1>
      <ol className="list-box">
        {props.data.map((item, index) => (
          <BoardItem
            index={index + 1}
            name={item.name}
            points={item.points}
            key={index}
          />
        ))}
      </ol>
    </div>
  );
}
