import { useState } from "react";
import {useInput} from "../hooks/useInput"

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="form-box">
      <form className="Form">
        <label>Name</label>
        <input type="text"></input>

        <label>Email</label>
        <input type="email"></input>
        <button type="submit">Registrera dig</button>
      </form>
    </div>
    
  );
};
export default Form;
