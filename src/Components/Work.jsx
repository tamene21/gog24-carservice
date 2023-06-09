import React from "react";
import Blog1 from "../Assets/Blog-Image1.jpg";
import Blog2 from "../Assets/car-sharing2.jpg";

const Work = () => {
  return (
    <div name="work" className="text-[black] bg-[#e9eef3]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-[#ffd73f]">
            Blogs
          </p>
          <p className="py-6">
            Try to have a feel about our lexturious vehicles
          </p>
        </div>

        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div
              style={{ backgroundImage: `url(${Blog1})` }}
              className="shadow-lg shadow-[#040c16] group container round-md flex justify-center items-center mx-auto content-div"
            >
              {/*Hover effect*/}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Share Your Car And Enjoy Your Journey
                </span>
                <div>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Read
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Share
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${Blog2})` }}
              className="shadow-lg shadow-[040c16] group container round-md flex justify-center items-center mx-auto content-div"
            >
              {/*Hover effect*/}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Share Your Car And Increase Your Income
                </span>
                <div>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Read
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Share
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${Blog1})` }}
              className="shadow-lg shadow-[040c16] group container round-md flex justify-center items-center mx-auto content-div"
            >
              {/*Hover effect*/}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Time Is preciouse. Use It Wisely.
                </span>
                <div>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Read
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Share
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${Blog2})` }}
              className="shadow-lg shadow-[040c16] group container round-md flex justify-center items-center mx-auto content-div"
            >
              {/*Hover effect*/}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  We Care For Environmental Sustainability.
                </span>
                <div>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Read
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Share
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${Blog1})` }}
              className="shadow-lg shadow-[040c16] group container round-md flex justify-center items-center mx-auto content-div"
            >
              {/*Hover effect*/}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Do You Know About the Current National Road Infrustructure?
                </span>
                <div>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Read
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Share
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${Blog2})` }}
              className="shadow-lg shadow-[040c16] group container round-md flex justify-center items-center mx-auto content-div"
            >
              {/*Hover effect*/}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  WOW! Delivering a Service Sets You At The Top.
                </span>
                <div>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Read
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Share
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
