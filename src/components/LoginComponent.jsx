import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signInUser } from "../firebase/authfunc";

const LoginComponent = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await signInUser(email, password);
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={"./HomePage"} replace={true} />}

      <main className="main-container">
        <div className="form-container">
          <div className="form-container-inner">
            <div className="title-box">
              <h3 className="title">Welcome back</h3>
            </div>
          </div>
          <form onSubmit={onSubmit} className="form">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input"
              />
            </div>

            <div>
              <label className="label">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="input"
              />
            </div>

            {errorMessage && (
              <span className="error-message">{errorMessage}</span>
            )}

            <button
              type="submit"
              disabled={isSigningIn}
              className={`submit-button ${isSigningIn ? "disabled" : ""}`}
            >
              {isSigningIn ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="register-box">
            Don't have an account?{" "}
            <Link to={"/register"} className="register-link">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginComponent;
