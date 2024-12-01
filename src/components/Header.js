import React from "react";

const Header = ({ fontFamily = "'Bebas Neue', sans-serif" }) => {
  return (
    <header className="header text-center py-8 bg-orange-500 text-white">
      <h1
        className="text-6xl font-extrabold"
        style={{ fontFamily: `${fontFamily}`, letterSpacing: "0.1em" }}
      >
        Marathon Prep!
      </h1>
      <p className="text-lg">Get ready, stay focused, and prep for success!</p>
    </header>
  );
};

export default Header;
