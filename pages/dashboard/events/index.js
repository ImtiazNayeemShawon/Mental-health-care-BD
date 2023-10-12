import { useEffect, useState } from "react";
import { FaEdit, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import AddEvent from "./AddEvent";
import Sidebar from "../sidebar";
import UpdateEvent from "./UpdateEvent";

const events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateOpen, setUpdateOpen] = useState(false);
  const [id, setId] = useState(null);
  const [events, setEvents] = useState([]);

  // get events data
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [events]);

  // handle delete event
  const handleDeleteBlog = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/events/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Event Deleted successfully");
      }
      console.log(res.ok);
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
          Add Event
        </button>
      </div>
      {/* all events */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {events.reverse()?.map((event) => (
            <div className="bg-white p-3 rounded-lg shadow-xl" key={event?.id}>
              <Image
                className="w-full object-cover h-[170px] object-top"
                src={event?.image}
                width={200}
                height={200}
                alt="img"
              ></Image>
              <h3 className="text-base py-5 text-gray-800">{event?.title}</h3>

              <div className="text-2xl flex justify-between items-center pb-2">
                {" "}
                <button
                  onClick={() => {
                    setUpdateOpen(!isUpdateOpen);
                    setId(event?.id);
                  }}
                  className="hover:text-blue-600 duration-200"
                >
                  <FaEdit></FaEdit>
                </button>
                <button
                  className="hover:text-red-500 duration-200"
                  onClick={() => handleDeleteBlog(event?.id)}
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
        <UpdateEvent
          isUpdateOpen={isUpdateOpen}
          setUpdateOpen={setUpdateOpen}
          id={id}
        ></UpdateEvent>
      )}

      {/* Add Modal */}
      {isOpen && <AddEvent isOpen={isOpen} setIsOpen={setIsOpen}></AddEvent>}
    </div>
  );
};

export default events;

events.getLayout = function getLayout(page) {
  return (
    <div className="lg:flex gap-5">
      <aside className="w-1/6">
        <Sidebar />
      </aside>
      <main className="mx-5"> {page}</main>
    </div>
  );
};
