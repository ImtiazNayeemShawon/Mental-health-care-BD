import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const router = useRouter();
  console.log(router.query.blogid);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/blog/${router.query.blogid}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  console.log(blog);
  return (
    <div className="mt-24">
      single blog
      <Image src={blog?.image} width={500} height={500} alt="img" />
      <p>{blog?.title}</p>
      <p>{blog?.description}</p>
    </div>
  );
};

export default BlogDetails;
