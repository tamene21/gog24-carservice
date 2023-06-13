import React from "react";
import Booking from "../Assets/booking.jpg";

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-20">
      <div className="background-color:rgb(255, 255, 255)">
        <div className="pt-10 flex items-center justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#ffd73f]">
            How It Works
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-30 lg:pb-20 cursor-auto">
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="mb-5">
              <svg
                className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                ></path>
              </svg>
            </div>

            <h3 className="text-lg font-bold mb-2">1. Book A Drive</h3>

            <p className="text-sm leading-6 text-gray-600">
              Metus potenti velit sollicitudin porttitor magnis elit lacinia
              tempor varius, ut cras orci vitae parturient id nisi vulputate
              consectetur, primis venenatis cursus tristique malesuada viverra
              congue risus.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg">
            <div className="mb-5">
              <svg
                className="hi-outline hi-cube inline-block w-12 h-12 text-indigo-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                ></path>
              </svg>
            </div>

            <h3 className="text-lg font-bold mb-2">2. Get A Driver</h3>

            <p className="text-sm leading-6 text-gray-600">
              Metus potenti velit sollicitudin porttitor magnis elit lacinia
              tempor varius, ut cras orci vitae parturient id nisi vulputate
              consectetur, primis venenatis cursus tristique malesuada viverra
              congue risus.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg cursor-auto">
            <div className="mb-5 cursor-auto">
              <svg
                className="hi-outline hi-cog inline-block w-12 h-12 text-indigo-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>

            <h3 className="text-lg font-bold mb-2">3. Track Your Driver</h3>

            <p className="text-sm leading-6 text-gray-600">
              Metus potenti velit sollicitudin porttitor magnis elit lacinia
              tempor varius, ut cras orci vitae parturient id nisi vulputate
              consectetur, primis venenatis cursus tristique malesuada viverra
              congue risus.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg">
            <div className="mb-5">
              <svg
                className="hi-outline hi-sparkles inline-block w-12 h-12 text-indigo-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                ></path>
              </svg>
            </div>

            <h3 className="text-lg font-bold mb-2">4. Arive Safely</h3>

            <p className="text-sm leading-6 text-gray-600">
              Metus potenti velit sollicitudin porttitor magnis elit lacinia
              tempor varius, ut cras orci vitae parturient id nisi vulputate
              consectetur, primis venenatis cursus tristique malesuada viverra
              congue risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
