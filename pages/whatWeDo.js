import React from "react";
import Image from "next/image";
import News from "../public/news.png";
import Group from "../public/group.png";
import Volunteer from "../public/volunteer.png";
import Project from "../public/project.png";
import Projects from "../public/projects.png";
import Partner from "../public/partner.png";

export default function WhatWeDo() {
  return (
    <div>
      <div id="ourworks" className="mt-20">
        <h1 className="uppercase font-semibold mainfont text-lg text-center text-yellow-500">
          what we do
        </h1>
        <p className="text-center text-3xl px-40 mt-2 partnertxt text-gray-800 capitalize font-semibold max-sm:px-2 max-sm:text-xl">
          We are on a Mission to Raise Mental Health Awareness
        </p>
        <div className="grid grid-cols-2 mt-20 gap-10 max-sm:grid-cols-1">
          <Image src={News} className="rounded-2xl " />

          <div>
            <h1 className="text-4xl capitalize font-semibold partnertxt">
              this is Headline
            </h1>
            <div className="w-40 h-1 bg-gray-500 rounded-full mt-2"></div>
            <p className="leading-8 text-sm mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-20 gap-10 max-sm:grid-cols-1">
          <div>
            <h1 className="text-4xl capitalize font-semibold partnertxt">
              this is Headline
            </h1>
            <div className="w-40 h-1 bg-gray-500 rounded-full mt-2"></div>
            <p className="leading-8 text-sm mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <Image src={Group} className="rounded-2xl  h-96" />
        </div>
        <div className="bg-gray-200  partnertxt rounded-lg mt-20 shadow-sm grid grid-cols-4 place-items-center max-sm:grid-cols-1">
          <div className="m-2 p-2">
            <Image src={Volunteer} width={120} className="m-auto block w-20 h-20" />
            <h1 className="text-center text-blue-600 text-xl font-medium partnertxt">
              100+
            </h1>
            <p className="text-center partnertxt text-xl  font-semibold">
              Volunteer
            </p>
          </div>
          <div className="m-2 p-2">
            <Image src={Project} width={120} className="m-auto block w-20 h-20" />
            <h1 className="text-center text-blue-600 text-xl font-medium partnertxt">
              300+
            </h1>
            <p className="text-center partnertxt text-xl  font-semibold">
              Awareness programm
            </p>
          </div>
          <div className="m-2 p-2">
            <Image src={Projects} width={120} className="m-auto block w-20 h-20" />
            <h1 className="text-center text-blue-600 text-xl font-medium partnertxt">
              300+
            </h1>
            <p className="text-center partnertxt text-2xl  font-semibold">
              Awareness projects
            </p>
          </div>
          <div className="m-2 p-2">
            <Image src={Partner} width={120} className="m-auto block w-20 h-20" />
            <h1 className="text-center text-blue-600 text-xl font-medium partnertxt">
              30+
            </h1>
            <p className="text-center partnertxt text-2xl  font-semibold">
              Partner company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
