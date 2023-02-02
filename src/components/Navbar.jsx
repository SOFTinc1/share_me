import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 p-3">
      <div className="flex justify-start items-center w-full rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate("/search")}
          className="p-2 w-full bg-white outline-none"
        />
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Link to={`user-profile/${user._id}`} className="hidden md:block">
          <img src={user.image} alt="user" className="w-11 h-9 rounded-full" />
        </Link>
        <Link
          to="create-pin"
          className="bg-black text-white rounded-full w-12 h-9 md:w-11 h-9  flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
