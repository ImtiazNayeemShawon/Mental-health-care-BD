import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="my-24">
      <div className="mb-10">
        <h1 className="text-4xl uppercase font-semibold partnertxt">Blogs</h1>
        <div className="w-40 h-1 bg-gray-500 rounded-full mt-2"></div>
      </div>
      <div className="grid grid-cols-2 gap-10 items-start">
        {/* left big blog card */}
        <div>
          <article className="overflow-hidden  shadow transition hover:shadow-lg ">
            <Image
              className="w-full h-[360px] object-cover"
              src={blogs?.reverse()[0]?.image}
              width={500}
              height={300}
              alt="img"
            />

            <div className="line text-white p-4 sm:p-6">
              <div className="py-5">
                <p className="block text-base ">
                  {new Date(blogs?.reverse()[0]?.createAt).toDateString()}
                </p>

                <Link href="#">
                  <h3 className="text-2xl font-bold mt-3 ">
                    {blogs?.reverse()[0]?.title}
                  </h3>
                </Link>
              </div>
            </div>
          </article>
        </div>
        {/* right blogs */}
        <div className="flex flex-col gap-5">
          {blogs?.slice(1, 4)?.map((blog) => (
            <div>
              <div className="flex gap-5 items-start">
                <Image
                  className="h-[150px] object-cover"
                  src={blog?.image}
                  width={300}
                  height={150}
                  alt="img"
                />
                <div>
                  <p className="block text-base font-semibold text-gray-500">
                    {new Date(blog?.createAt).toDateString()}
                  </p>

                  <Link href="#">
                    <h3 className="text-xl font-bold mt-3 text-gray-900">
                      {blog?.title}
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;