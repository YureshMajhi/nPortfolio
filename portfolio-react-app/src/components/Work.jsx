import React from "react";
import form from "../assets/Form.png";
import youtube from "../assets/Youtube.png";
import card from "../assets/card.png";
import calculator from "../assets/calculator.png";
import game from "../assets/RockPaperScissor.png";
import library from "../assets/library.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out my recent work!</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${form})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML CSS Form
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${youtube})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Youtube Clone
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${card})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Invisible Card
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${calculator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Calculator JS
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${game})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Rock Paper Scissor JS
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${library})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Library JS
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center text-gray-700 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
