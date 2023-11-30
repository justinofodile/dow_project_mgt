import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <img
        className="w-16"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Nigerian_Air_Force_emblem.svg/987px-Nigerian_Air_Force_emblem.svg.png"
        alt=""
      />
      <ul className="flex gap-8 text-2xl">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <button className="pr-3 pl-3 pt-1 pb-1 rounded-md cursor-pointer">
          Get Started
        </button>
      </ul>
    </div>
  );
};

export default NavBar;
