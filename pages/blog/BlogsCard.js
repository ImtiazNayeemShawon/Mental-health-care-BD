import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogsCard = ({ blogs }) => {
  return (
    <div>
      <Link href={`/blogs/${blogs?.id}`}>
        <Image src={blogs?.image} width={500} height={500} alt="img" />
        {blogs?.title}
      </Link>
    </div>
  );
};

export default BlogsCard;
