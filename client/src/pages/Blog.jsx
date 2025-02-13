import React from "react";
import Navbar from "../components/Navbar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { blogs } from "../data";
import { usePagination } from "../hooks/pagination";
import Pagination from "@mui/material/Pagination";

const Blog = () => {
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ] = usePagination(8, blogs.length);
  return (
    <>
      <div className="page-main abouts">
        <Navbar />
        <div className="about-us">
          <p>
            Home
            <MdKeyboardArrowRight className="i" /> Our Blogs
            <MdKeyboardArrowRight className="i" />
          </p>
          <h4>Our Blogs</h4>
        </div>
      </div>
      <div className="Agent-main blog-main-page">
        {(() => {
          const displayPosts = [];
          for (let i = startPageIndex; i <= endPageIndex; i++) {
            displayPosts.push(
              <div className="main-blog-cards">
                <img src={blogs[i].image} alt={blogs[i].title} />
                <div className="blog-cards-details">
                  <div className="blog-created">
                    <p>{blogs[i].created_by}</p>
                    <p>{blogs[i].data}</p>
                    <span>2 Comments</span>
                  </div>
                  <h2>{blogs[i].title}</h2>
                  <p>{blogs[i].description}</p>
                </div>
              </div>
            );
          }
          return displayPosts;
        })()}
        <Pagination
          style={{ marginTop: "2rem" }}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#5ea51d", // Text color
              borderColor: "#5ea51d", // Border color (if outlined)
            },
            "& .Mui-selected": {
              backgroundColor: "#5ea51d !important",
              color: "#fff !important",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#4d8f1a",
            },
          }}
          count={totalPages}
          onChange={(event, value) => displayPage(value)}
        />
      </div>
    </>
  );
};

export default Blog;
