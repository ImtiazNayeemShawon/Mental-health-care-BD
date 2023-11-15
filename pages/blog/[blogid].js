import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetch(
      `https://mental-health-care-bd.onrender.com/blog/${router.query.blogid}`
    )
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="mt-24 mx-20 max-sm:mx-4 block">
      <div className="float-left md:mr-5 mb-2">
        <Image
          className="md:w-[500px] md:h-[400px] object-cover object-center"
          src={blog?.image}
          width={500}
          height={500}
          alt="img"
        />
        <span className="text-sm font-semibold text-gray-600">
          {" "}
          {new Date(blog?.createAt).toDateString()}
        </span>
      </div>
      <div className=" space-y-3">
        <h3 className="text-2xl font-bold">{blog?.title}</h3>
        <article className="text-base text-gray-700">
          {blog?.description}
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;
