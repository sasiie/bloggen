import React, { useState } from "react";

const Form = () => {
  const [nameInput] = useInput("");
  const [emailInput] = useInput("");

  console.log(nameInput.value, emailInput.value);

  return (
    <div className="form-box">
      <form className="Form">
        <label>Name</label>
        <input type="text" {...nameInput}></input>

        <label>Email</label>
        <input type="email" {...emailInput}></input>
        <button type="submit">Registrera dig</button>
      </form>
    </div>
    
  );
};
export default Form;
