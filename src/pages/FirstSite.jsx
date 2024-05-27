import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import PageLayout from "../components/PageLayout";

const FirstSite = () =>{
const { userName } = useContext(UserContext);
  return (
    <PageLayout title="Welcome" headline="Hello, welcome to Saras Blog where you can...">
<p>
A blog (short for "weblog") is a regularly updated website or web page, typically run by an individual or small group, that is written in an informal or conversational style. Blogs can cover a wide range of topics, from personal diaries and commentary on news to technical advice and tutorials.

History of Blogging
The term "weblog" was coined by Jorn Barger in 1997, and the shorter "blog" was coined by Peter Merholz in 1999. The early 2000s saw a significant rise in the popularity of blogs, with platforms like Blogger and WordPress making it easy for anyone to start a blog without needing extensive technical knowledge.

Purpose of Blogging
Personal Expression: Many people start blogs to share their thoughts, experiences, and opinions with a broader audience.
Professional Development: Blogging can help establish an individual as an expert in their field, enhancing their professional reputation and opening up new career opportunities.
Business Promotion: Companies use blogs to promote their products, provide updates, and engage with customers. Blogging can drive traffic to a business’s website and improve its search engine ranking.
Community Building: Blogs can bring together people with similar interests, fostering a sense of community and facilitating discussions.

</p>
    </PageLayout>
  );
};
export default FirstSite;