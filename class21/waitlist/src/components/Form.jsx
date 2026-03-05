import React from "react";
import { useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({
    nameOfParty: "",
    numberInParty: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleFormUpdate(formData.nameOfParty, formData.numberInParty);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nameOfParty"
        value={formData.nameOfParty}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="numberInParty"
        value={formData.numberInParty}
        onChange={handleChange}
      ></input>
      <input type="submit" value="Add" />
    </form>
  );
}
