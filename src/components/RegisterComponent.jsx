import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createUser } from "../firebase/authFunctions";
import './RegisterComponent.css'; // Import the CSS file for styling

const RegisterComponent = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      await createUser(email, password);
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}

      <main className="register-main-container">
        <div className="register-form-container">
          <div className="register-form-container-inner">
            <div className="register-title-box">
              <h3 className="register-title">Create a new account</h3>
            </div>
          </div>
          <form onSubmit={onSubmit} className="register-form">
            <div>
              <label className="register-label">Email</label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="register-input"
              />
            </div>

            <div>
              <label className="register-label">Password</label>
              <input
                disabled={isRegistering}
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="register-input"
              />
            </div>

            <div>
              <label className="register-label">Confirm Password</label>
              <input
                disabled={isRegistering}
                type="password"
                autoComplete="off"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
                className="register-input"
              />
            </div>

            {errorMessage && (
              <span className="register-error-message">{errorMessage}</span>
            )}

            <button
              type="submit"
              disabled={isRegistering}
              className={`register-submit-button ${isRegistering ? 'register-disabled' : ''}`}
            >
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="register-text-center">
              Already have an account? {" "}
              <Link to={"/login"} className="register-link">
                Continue
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default RegisterComponent;

