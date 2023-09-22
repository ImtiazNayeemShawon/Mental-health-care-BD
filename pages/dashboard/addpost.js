"use client";
import React from "react";
import toast from "react-hot-toast";

const AddPost = () => {
  const handleSUbmit = async (e) => {
    e.preventDefault();
    const post = {
      title: e.target.title.value,
      image: e.target.image.value,
      description: e.target.description.value,
    };
    console.log(post);

    try {
      const addpost = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(post),
      });

      if (addpost.ok) {
        e.target.reset();
        toast.success("Post Created");
      }
      console.log(addpost);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center h-screen">
      <div className="w-full bg-white mx-5 py-5 rounded-3xl">
        <div className="flex flex-col  md:p-6 rounded-md w-full">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Add New Post</h1>
          </div>
          <form onSubmit={handleSUbmit} className="space-y-6 w-full p-5">
            <div className="space-y-4">
              <div className="md:flex justify-between gap-5">
                <div className="w-full">
                  <label className="block mb-2 text-sm">Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="title"
                    className="px-3 py-2 border rounded-md border-gray-300 w-full bg-gray-200 text-gray-900"
                  />
                </div>

                <div className="w-full">
                  <label className="block mb-2 text-sm">Picture</label>
                  <input
                    type="file"
                    name="image"
                    className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="block mb-2 text-sm">Description</label>
                <textarea
                  type="textarea"
                  name="description"
                  placeholder="Description"
                  className="w-full h-28 px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-cyan-300 w-full rounded-md py-3 "
              >
                Add Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
