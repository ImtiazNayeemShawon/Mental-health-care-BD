import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Sidebar from "../sidebar";
import { FaTimes } from "react-icons/fa";

const UpdateEvent = ({ isUpdateOpen, setUpdateOpen, id }) => {
  const [event, setEvent] = useState({});

  useEffect(() => {
    fetch(`https://mental-health-care-bd.onrender.com/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);

  const [loading, setLoading] = useState(false);
  // const CLOUDINARY_API = process.env.NEXT_PUBLIC_CLOUDINARY_API;

  const handleSUbmit = async (e) => {
    e.preventDefault();
    const event = {
      id: id,
      title: e.target.title.value,
      // image: data.secure_url,
      shortDescription: e.target.shortDescription.value,
      address: e.target.address.value,
      date: e.target.date.value,
    };

    // const image = e.target.image.files[0];
    // const formData = new FormData();
    // formData.append("file", image);
    // formData.append("upload_preset", "blog_img");

    // upload image to cloudinary
    setLoading(true);
    // try {
    //   fetch(CLOUDINARY_API, {
    //     method: "POST",
    //     body: formData,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // main data
    //       const event = {
    //         title: e.target.title.value,
    //         image: data.secure_url,
    //         shortDescription: e.target.shortDescription.value,
    //         address: e.target.address.value,
    //         date: e.target.date.value,
    //       };

    // save data to databse
    try {
      fetch(`https://mental-health-care-bd.onrender.com/events`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(event),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            e.target.reset();
            toast.success("Event Updated");
            setLoading(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="h-screen w-full absolute top-0 left-0 bg-[#1111118e] overflow-hidden">
      <div className="absolute w-full h-fit  md:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <div className=" bg-white mx-5 py-1 rounded-3xl">
          <div className="flex flex-col  md:p-6 rounded-md w-full">
            <div className=" text-center">
              <h1 className="my-3 text-3xl font-bold">Update Event</h1>
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
                      defaultValue={event?.title}
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
                      defaultValue={event?.image}
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
                      defaultValue={event?.date}
                      type="date"
                      name="date"
                      className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block mb-2 text-sm">Address</label>
                    <input
                      defaultValue={event?.address}
                      type="text"
                      name="address"
                      placeholder="address"
                      className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label className="block mb-2 text-sm">
                    Short Description
                  </label>
                  <textarea
                    defaultValue={event?.shortDescription}
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
                  {loading ? "Updating..." : " Update Event"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEvent;

UpdateEvent.getLayout = function getLayout(page) {
  return (
    <div className="flex gap-5">
      <aside className="w-1/6">
        <Sidebar />
      </aside>
      {page}
    </div>
  );
};
