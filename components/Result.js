import React from "react";
import NoteCard from "./NoteCard";

const Result = ({ data }) => {
  return (
    <div>
      <h1 className="text-center text-white font-bold text-3xl mb-12">Notes</h1>
      <div className="px-5 my-10 flex sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
        {data.map((note) => {
          return <NoteCard key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default Result;
