import React, { useContext } from "react";
import "../App.css";
import { UserContext } from "../context/UserContext";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
 
    
  const { userName } = useContext(UserContext);

  return (
    <PageLayout title="Home" headline={`Hello there, ${userName}`}>
      <section className="blog-info">
        <h2>Welcome back!</h2>
        <h3>What is a Blog?</h3>
        <p>
          A blog (short for "weblog") is a regularly updated website or web page, typically run by an individual or small group, that is written in an informal or conversational style. Blogs can cover a wide range of topics, from personal diaries and commentary on news to technical advice and tutorials.
        </p>

        <h3>History of Blogging</h3>
        <p>
          The term "weblog" was coined by Jorn Barger in 1997, and the shorter "blog" was coined by Peter Merholz in 1999. The early 2000s saw a significant rise in the popularity of blogs, with platforms like Blogger and WordPress making it easy for anyone to start a blog without needing extensive technical knowledge.
        </p>

        <h3>Purpose of Blogging</h3>
        <p><strong>Personal Expression:</strong> Many people start blogs to share their thoughts, experiences, and opinions with a broader audience.</p>
        <p><strong>Professional Development:</strong> Blogging can help establish an individual as an expert in their field, enhancing their professional reputation and opening up new career opportunities.</p>
        </section>
    </PageLayout>
  );
};

export default HomePage;
