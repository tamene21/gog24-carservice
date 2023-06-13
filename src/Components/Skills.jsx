import React from "react";
import Ford from "../Assets/Ford.png";
import Mercedes from "../Assets/Mercedes.png";
import Honda from "../Assets/Honda.png";
import Hyundai from "../Assets/Hyundai.png";
import Rava from "../Assets/Rava_4.png";
import Chevy from "../Assets/Chevy.png";
import Audi from "../Assets/Audi.png";
import Toyota from "../Assets/ToyotaSienna.png";
import Tailwind from "../Assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#f3f1d8] text-black">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#ffd73f] ">
            Our Cars
          </p>
          <p className="py-4">
            {" "}
            These are some of Our luxurious car collections
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow.md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mercedes} alt="Html icon"></img>
            <p className="my-4">Mercedes</p>
          </div>
          <div className="shadow.md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Ford} alt="React icon"></img>
            <p className="my-4">Ford</p>
          </div>
          <div className="shadow.md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Toyota} alt="Node icon"></img>
            <p className="my-4">Toyota</p>
          </div>
          <div className="shadow.md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Hyundai} alt="Css icon"></img>
            <p className="my-4">Hyundai</p>
          </div>
          <div className="shadow.md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Rava} alt="Firebase icon"></img>
            <p className="my-4">Rava-4</p>
          </div>
          <div className="shadow.md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Chevy} alt="Tailwind icon"></img>
            <p className="my-4">Chevy</p>
          </div>
          <div className="shadow.md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Audi} alt="Github icon"></img>
            <p className="my-4">Audi</p>
          </div>
          <div className="shadow.md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Honda} alt="Aws icon"></img>
            <p className="my-4">Honda</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
