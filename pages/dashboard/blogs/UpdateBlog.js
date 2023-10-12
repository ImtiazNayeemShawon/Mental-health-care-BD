import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

const UpdateBlog = ({ isUpdateOpen, setUpdateOpen, id }) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  console.log(blog);

  const [loading, setLoading] = useState(false);
  const CLOUDINARY_API = process.env.NEXT_PUBLIC_CLOUDINARY_API;

  const handleSUbmit = async (e) => {
    e.preventDefault();

    // const image = e.target.image.files[0];
    // const formData = new FormData();
    // formData.append("file", image);
    // formData.append("upload_preset", "blog_img");
    const post = {
      id: id,
      title: e.target.title.value,
      // image: data.secure_url,
      description: e.target.description.value,
    };

    setLoading(true);
    // upload image to cloudinary
    // try {
    // fetch(CLOUDINARY_API, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // main data
    //     const post = {
    //       title: e.target.title.value,
    //       image: data.secure_url,
    //       description: e.target.description.value,
    //     };

    // save data to databse
    try {
      fetch(`${process.env.NEXT_PUBLIC_API}/blog`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            e.target.reset();
            setLoading(false);
            toast.success("Blog Updated");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="h-screen w-full absolute top-0 left-0 bg-[#1111115e] overflow-hidden">
      <div className="absolute w-full  md:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <div className="relative bg-white  py-5 rounded-3xl">
          <div className="flex flex-col  md:p-6 rounded-md w-full">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Update Blog</h1>
              <button
                onClick={() => setUpdateOpen(!isUpdateOpen)}
                className=" font-bold absolute top-5 right-10 hover:bg-gray-200 p-2 rounded-lg duration-200"
              >
                <FaTimes className="text-2xl"></FaTimes>
              </button>
            </div>
            <form
              onSubmit={handleSUbmit}
              className="space-y-6 w-full p-5 text-base"
            >
              <div className="space-y-4">
                <div className="md:flex justify-between gap-5">
                  <div className="w-full">
                    <label className="block mb-2 text-sm">Title</label>
                    <input
                      defaultValue={blog?.title}
                      type="text"
                      name="title"
                      placeholder="title"
                      required
                      className="px-3 py-2 border rounded-md border-gray-300 w-full bg-gray-200 text-gray-900"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block mb-2 text-sm">Picture</label>
                    <input
                      defaultValue={blog?.image}
                      type="file"
                      name="image"
                      className="w-full border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label className="block mb-2 text-sm">Description</label>
                  <textarea
                    defaultValue={blog?.description}
                    type="textarea"
                    name="description"
                    placeholder="Description"
                    required
                    className="w-full h-28 px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-cyan-300 w-full rounded-md py-3 "
                >
                  {loading ? "Updating..." : "Update Blog"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
