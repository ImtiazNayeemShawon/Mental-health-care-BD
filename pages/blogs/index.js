import React, { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";

const index = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/blog`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="mt-24 mx-16">
      <h2>blogs: {blogs?.length}</h2>

      {blogs?.map((blog) => (
        <BlogsCard key={blog?.id} blogs={blog}></BlogsCard>
      ))}
    </div>
  );
};

export default index;
