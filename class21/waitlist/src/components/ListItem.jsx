import React from "react";

export default function ListItem(props) {
  return (
    <div>
      {props.party.nameOfParty}, Party of {props.party.numberInParty}
    </div>
  );
}
