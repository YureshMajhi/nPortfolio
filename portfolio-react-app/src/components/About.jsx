import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] text-gray-300 "
    >
      <div className="w-full max-w-[1000px] px-4 grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
            About
          </p>
        </div>
        <div></div>
      </div>
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-4xl font-bold">
          <p>
            Hi, I'm Yuresh. Nice to meet you. Take a look around, if you'd like.
          </p>
        </div>
        <div>
          <p>
            I love building great websites that make a positive impact. My
            specialty is front-end development, serving everyone from
            individuals to big companies. Imagine having a front-end expert
            right at your fingertips. What would you do with that kind of skill?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
