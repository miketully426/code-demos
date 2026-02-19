import React from "react";
import "./BoardItem.css";

export default function BoardItem(props) {
  return (
    <div>
      <li>
        <div className="item-content">
          <div className="index">{props.index}.</div>
          <div className="person">{props.name}</div>
          <div className="points">{props.points}</div>
        </div>
      </li>
    </div>
  );
}
