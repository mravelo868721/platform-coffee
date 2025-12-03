import { useState } from "react";

export default function Navigation() {
  return (
    <div
      className="
    navigation-bar
    flex justify-between w-full 
    px-[10%] py-4 bg-white border-b border-gray-300"
    >
      <div className="logo-container">
        <img
          className="
            logo
            w-full h-auto"
          src="images/coffee/platform-coffee-co-logo.png"
          alt="Platform Coffee Logo"
        ></img>
      </div>
      <div className="navigation-menu flex justify-end items-center w-full">
        <ul
          className="
          flex gap-8
          text-xl font-semibold tracking-wider uppercase
        "
        >
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <button
          className="
            flex
            px-8 py-6 ml-8
            text-xl font-semibold tracking-wider uppercase
            bg-gray-900 text-white rounded
            cursor-pointer"
          onClick=""
        >
          Menu -
        </button>
      </div>
    </div>
  );
}
