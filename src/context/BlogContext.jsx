import { createContext, useState } from "react";

export const BlogContext = createContext();

export const PostProvider = (props) => {
  const [blogs, setBlogs] = useState([
    { id: 1, name: "BlogPost 1" },
    { id: 2, name: "BlogPost 2" },
    { id: 3, name: "BlogPost 3" },
  ]);

  return (
    <BlogContext.Provider value={{ blogs }}>
      {props.children}
    </BlogContext.Provider>
  );
};