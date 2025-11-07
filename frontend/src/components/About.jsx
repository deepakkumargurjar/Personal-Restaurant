import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Welcome to Deepak Kumar Gurjar’s Restaurant, a place where food,
            flavor, and happiness come together in perfect harmony. Our restaurant
            is built on the belief that good food brings people closer and creates
            memories that last forever. We serve a wide variety of freshly
            prepared dishes made with authentic ingredients, rich spices, and a
            touch of love in every bite. Whether you crave traditional Indian
            meals, spicy street food, or modern favorites, our menu has something
            special for everyone.
          </p>

          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="exploreMenuBtn"
          >
            Explore Menu{" "}
            <span>
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
