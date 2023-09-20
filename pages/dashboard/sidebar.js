import Link from "next/link";
import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import {
  FaCertificate,
  FaHome,
  FaImages,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";
const Sidebar = () => {
  return (
    <div>
      <div className="h-screen bg-white text-black w-1/6 fixed">
        <div className="justify-start p-5">
          <h3 className="text-3xl font-bold  border-b py-5 text-center">
            <Image src={logo} alt="logo"></Image>
          </h3>
        </div>
        <div>
          <ul className="text-md font-semibold ">
            <Link href={"/dashboard"}>
              <li className=" p-5">
                <FaHome className="inline-block mr-2"></FaHome>
                Dashboard
              </li>
            </Link>{" "}
            <Link href={"/dashboard/projects"}>
              <li className=" p-5">
                <FaProjectDiagram className="inline-block mr-2"></FaProjectDiagram>
                Projects
              </li>
            </Link>
            <Link href={"/dashboard/ourgallery"}>
              <li className="p-5">
                <FaImages className="inline-block mr-2" />
                Our Gallery
              </li>
            </Link>{" "}
            <Link href={"/dashboard/addpost"}>
              <li className="p-5">
                <FaImages className="inline-block mr-2" />
                Add Post
              </li>
            </Link>
            <Link href={"/dashboard/members"}>
              <li className=" p-5">
                <FaUsers className="inline-block mr-2" />
                Member Applications
              </li>
            </Link>
            <Link href={"/dashboard/achivements"}>
              <li className="p-5">
                <FaCertificate className="inline-block mr-2" />
                Achivements
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
