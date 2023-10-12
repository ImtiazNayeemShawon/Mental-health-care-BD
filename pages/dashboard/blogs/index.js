import { useEffect, useState } from "react";
import Sidebar from "../sidebar";

import { FaEdit, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import AddBlog from "./AddBlog";
import UpdateBlog from "./UpdateBlog";

const blogs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateOpen, setUpdateOpen] = useState(false);
  const [id, setId] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`https://mental-health-care-bd.onrender.com/blog`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [blogs]);

  // handle delete blog
  const handleDeleteBlog = async (id) => {
    try {
      const res = await fetch(
        `https://mental-health-care-bd.onrender.com/blog/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        toast.success("Blog Deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full lg:w-11/12 mx-auto">
      <Toaster />
      <div className="my-5">
        <button
          className="bg-[#20419a] text-white flex items-center gap-2 px-7 py-2 rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaPlusCircle className="text-xl" />
          Add Blog
        </button>
      </div>
      {/* all blogs */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {blogs.reverse()?.map((blog) => (
            <div className="bg-white p-3 rounded-lg shadow-xl " key={blog?.id}>
              <Image
                className="w-full object-cover h-[170px] object-top"
                src={blog?.image}
                width={200}
                height={200}
                alt="img"
              ></Image>
              <h3 className="text-base py-5 text-gray-800">{blog?.title}</h3>

              <div className="text-2xl flex justify-between items-center pb-2">
                <button
                  onClick={() => {
                    setUpdateOpen(!isUpdateOpen);
                    setId(blog?.id);
                  }}
                  className="hover:text-blue-600 duration-200"
                >
                  <FaEdit></FaEdit>
                </button>

                <button
                  className="hover:text-red-500 duration-200"
                  onClick={() => handleDeleteBlog(blog?.id)}
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Update Modal */}
      {isUpdateOpen && (
        <UpdateBlog
          isUpdateOpen={isUpdateOpen}
          setUpdateOpen={setUpdateOpen}
          id={id}
        ></UpdateBlog>
      )}

      {/* Add Modal */}
      {isOpen && <AddBlog isOpen={isOpen} setIsOpen={setIsOpen}></AddBlog>}
    </div>
  );
};

export default blogs;

blogs.getLayout = function getLayout(page) {
  return (
    <div className="lg:flex gap-5">
      <aside className="w-1/6">
        <Sidebar />
      </aside>
      <main className="mx-5"> {page}</main>
    </div>
  );
};
