import React, { useState } from "react";
import data from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navbarLinks = data.data.navbarLinks;

  return (
    <nav>
      <div className="logo">GUJJAR RESTAURANT </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {navbarLinks.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              spy={true}
              smooth={true}
              duration={500}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Scroll to Menu section */}
        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          className="menuBtn"
        >
          OUR MENU
        </Link>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
