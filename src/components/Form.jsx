import { useContext } from "react";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";

const Form = () => {
  const { setUserName } = useContext(UserContext);
  const nameInput = useInput();
  const emailInput = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserName(nameInput.value);
    nameInput.reset();
    emailInput.reset();
  };

  return (
    <div className="form-box">
      <form className="Form" onSubmit={handleSubmit}>
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
