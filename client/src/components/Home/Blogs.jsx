import React from "react";
import { blogs } from "../../data";

const Blogs = () => {
  return (
    <div className="categoreis h-blogs">
      <span>Our Blog</span>
      <h2>Recent Blog</h2>
      <div className="h-blog-main">
        {blogs.map((blog) => (
          <div className="main-blog-cards">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-cards-details">
              <div className="blog-created">
                <p>{blog.created_by}</p>
                <p>{blog.data}</p>
                <span>2 Comments</span>
              </div>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
