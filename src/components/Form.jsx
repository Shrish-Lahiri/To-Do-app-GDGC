// src/components/Form.js
"use client"; // Ensure this is treated as a Client Component

import React, { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", inputValue);
    // Add more form handling logic here
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
