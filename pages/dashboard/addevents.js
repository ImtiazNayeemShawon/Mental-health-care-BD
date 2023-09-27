import { useState } from "react";
import toast from "react-hot-toast";

const addevents = () => {
  const [loading, setLoading] = useState(false);
  const CLOUDINARY_API = process.env.NEXT_PUBLIC_CLOUDINARY_API;
  const API_URL = process.env.NEXT_PUBLIC_API;

  const handleSUbmit = async (e) => {
    e.preventDefault();

    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "blog_img");

    // upload image to cloudinary
    setLoading(true);
    try {
      fetch(CLOUDINARY_API, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          // main data
          const event = {
            title: e.target.title.value,
            image: data.secure_url,
            shortDescription: e.target.shortDescription.value,
            address: e.target.address.value,
            date: e.target.date.value,
          };

          // save data to databse
          try {
            fetch(`${API_URL}/events`, {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(event),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  e.target.reset();
                  toast.success("Event Created");
                  setLoading(false);
                }
              });
          } catch (error) {
            console.log(error);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center h-screen mt-20">
      <div className="w-full bg-white mx-5 py-5 rounded-3xl">
        <div className="flex flex-col  md:p-6 rounded-md w-full">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Add New Event</h1>
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
                    required
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
              <div className="md:flex justify-between gap-5">
                <div className="w-full">
                  <label className="block mb-2 text-sm">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="address"
                    className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="block mb-2 text-sm">Short Description</label>
                <textarea
                  type="textarea"
                  name="shortDescription"
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
                {loading ? "Creating..." : " Add Event"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addevents;
