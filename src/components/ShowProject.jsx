import React from "react";

const ShowProject = ({ showProject }) => {
  return (
    <div className="container">
      <div className="flex justify-between">
        <h1 className="text-4xl font bold">{showProject[0].title}</h1>
        <button className="text-black/60 font-bold cursor-pointer">
          Delete
        </button>
      </div>
      <p className="text-sm text-black/60">{showProject[0].date}</p>
      <p>{showProject[0].description}</p>
    </div>
  );
};

export default ShowProject;
