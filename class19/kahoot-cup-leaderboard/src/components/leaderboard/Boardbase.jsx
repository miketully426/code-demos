import React from "react";
import BoardItem from "./BoardItem";
import "./Boardbase.css";

export default function Boardbase(props) {
  const orderData = () => {
    return props.data.sort((a, b) => b.points - a.points);
  };

  orderData();
  return (
    <div className="board-container">
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
