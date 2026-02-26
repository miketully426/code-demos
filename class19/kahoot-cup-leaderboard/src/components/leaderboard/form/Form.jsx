import React, { useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    points: 0,
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setLeaders(formData.name, formData.points);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInput}
      />
      <input
        type="text"
        name="points"
        value={formData.points}
        onChange={handleInput}
      />
      <input type="submit" value="Update" />
    </form>
  );
}
