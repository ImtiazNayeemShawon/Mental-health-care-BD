import React from "react";
import Sidebar from "./sidebar";

const Dashbaord = () => {
  return <div className="text-4xl">Welcome</div>;
};

export default Dashbaord;

Dashbaord.getLayout = function getLayout(page) {
  return (
    <div className="flex gap-5">
      <aside className="w-1/6">
        <Sidebar />
      </aside>
      {page}
    </div>
  );
};
