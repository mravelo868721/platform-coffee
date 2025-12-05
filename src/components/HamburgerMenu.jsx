import { useState } from "react";

export default function HamburgerMenu({ closeMenu }) {
  return (
    <div
      className="
      fixed top-0 right-0 flex flex-col
      hamburger-menu w-[40%] h-lvh z-10 p-[60px]
      border border-gray-500 bg-white
      "
    >
      <button
        className="
        flex px-8 py-6 mb-8 justify-center
        text-xl font-semibold tracking-wider uppercase
        bg-gray-900 text-white rounded
        cursor-pointer"
        onClick={closeMenu}
      >
        Close ✖
      </button>
      <img
        className="
        w-[320px] h-auto mx-auto mb-12
        "
        src="images/coffee/platform-coffee-co-logo.png"
        alt="Platform Coffee Logo"
      ></img>
      <ul
        className="
        flex flex-col text-center w-full h-full justify-between
        uppercase text-3xl font-semibold
        "
      >
        <li className="cursor-pointer hover:text-gray-500">Menu</li>
        <li className="cursor-pointer hover:text-gray-500">Featured</li>
        <li className="cursor-pointer hover:text-gray-500">Previous Orders</li>
        <li className="cursor-pointer hover:text-gray-500">Your Favorites</li>
        <li className="cursor-pointer hover:text-gray-500">Order Online</li>
        <li className="cursor-pointer hover:text-gray-500">Gift Cards</li>
        <li className="cursor-pointer hover:text-gray-500">Contact Us</li>
      </ul>
    </div>
  );
}
