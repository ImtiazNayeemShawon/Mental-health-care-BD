import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`https://mental-health-care-bd.onrender.com/blog`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div id="blogs" className="my-24">
      <div className="mb-10">
        <h1 className="text-4xl uppercase font-semibold partnertxt">Blogs</h1>
        <div className="w-40 h-1 bg-gray-500 rounded-full mt-2"></div>
      </div>
    </div>
  );
};

export default HomeBlogs;
