import React from "react";

export default function LeftItem({ img, name, role, desc }) {
  return (
    <div className="text-left text-gray-500 ">
      <img className="mx-auto mb-4 w-full" src={img} alt="Bonnie Avatar" />
      <h3 className="sm:pl-10 pl-3 mb-4 text-2xl  tracking-tight text-sea-red-400 uppercase">
        <a href="#">{name}</a>
      </h3>
      <p className="sm:pl-10 pl-3 text-natural-500 mb-2 uppercase">{role}</p>
      <p className="sm:pl-10 pl-3 text-sea-natural-600">{desc}</p>
    </div>
  );
}
