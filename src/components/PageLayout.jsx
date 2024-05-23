import { useEffect } from "react";

const PageLayout = ({ title, headline, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <h1 className="headline">{headline}</h1>
      {children}
    </div>
  );
};

export default PageLayout;