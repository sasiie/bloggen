const blogPosts = [
    { id: 1, title: "First Post", author: "Jane Doe", text: "This is the first blog post by Jane Doe." },
    { id: 2, title: "Second Post", author: "Jane Doe", text: "This is the second blog post by Jane Doe." }
  ];  


  const Landningssida = () => {
    return (
      <div>
        <h2>Blog</h2>
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p><strong>Author:</strong> {post.author}</p>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    );
  }

  export default Landningssida;