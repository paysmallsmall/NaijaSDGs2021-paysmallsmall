import React, { useEffect, useState } from "react";

const NavSpacer = () => {
  const [isScrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolled(true);
      return;
    }
    setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div
      style={{
        height: `${isScrolled ? "76px" : "0"}`,
        // backgroundColor: "red",
      }}></div>
  );
};

export default NavSpacer;
