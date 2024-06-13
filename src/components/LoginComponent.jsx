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
      try {
        await signInUser(email, password);
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={"/HomePage"} replace={true} />}

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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
          <p className="register-box text-center">
            Don't have an account?{" "}
            <Link to="/register" className="register-link">
              Sign up
            </Link>
          </p>
        </div>
      </main>

      <section className="blog-info">
        <h2>What is a Blog?</h2>
        <p>
          A blog (short for "weblog") is a regularly updated website or web page,
          typically run by an individual or small group, that is written in an
          informal or conversational style. Blogs can cover a wide range of
          topics, from personal diaries and commentary on news to technical advice
          and tutorials.
        </p>

        <h2>History of Blogging</h2>
        <p>
          The term "weblog" was coined by Jorn Barger in 1997, and the shorter "blog"
          was coined by Peter Merholz in 1999. The early 2000s saw a significant rise
          in the popularity of blogs, with platforms like Blogger and WordPress
          making it easy for anyone to start a blog without needing extensive
          technical knowledge.
        </p>

        <h2>Purpose of Blogging</h2>
        <p>
          <strong>Personal Expression:</strong> Many people start blogs to share their
          thoughts, experiences, and opinions with a broader audience.
        </p>
        <p>
          <strong>Professional Development:</strong> Blogging can help establish an
          individual as an expert in their field, enhancing their professional
          reputation and opening up new career opportunities.
        </p>
        <p>
          <strong>Business Promotion:</strong> Companies use blogs to promote their
          products, provide updates, and engage with customers. Blogging can drive
          traffic to a business’s website and improve its search engine ranking.
        </p>
        <p>
          <strong>Community Building:</strong> Blogs can bring together people with
          similar interests, fostering a sense of community and facilitating
          discussions.
        </p>
      </section>
    </div>
  );
};

export default LoginComponent;
