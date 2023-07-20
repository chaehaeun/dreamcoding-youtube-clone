import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useNavigate, Link, useParams } from "react-router-dom";

const SearchHeader = () => {
  const { keyword } = useParams();
  const navigaet = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigaet(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header className="flex items-center w-full p-4 text-2xl gap-2 border-b border-zinc-600 mb-4">
      <h1 className="">
        <Link to="/" className="flex items-center gap-1 font-bold text-3xl">
          <BsYoutube className=" text-brand" /> YouTube
        </Link>
      </h1>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-7/12 py-1 px-3 outline-none bg-black text-gray-50 text-xl"
          type="search"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          aria-label="search icon"
          className=" bg-zinc-600 px-4 text-xl"
        >
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
