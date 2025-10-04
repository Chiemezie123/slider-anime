import React from "react";
import note from "../assets/svg/Note.svg";
import gallon from "../assets/img/um_img_2.png";
import gallon2 from "../assets/img/un_img_1.png";
import gallon4 from "../assets/img/um_img_3.png";

import styledGallon from "../assets/img/img1.png";
import styledGallon2 from "../assets/img/img2.png";
import styledGallon3 from "../assets/img/img3.png";
import styledGallon4 from "../assets/img/img_4.png";
import styledGallon5 from "../assets/img/img5.png";

const MainBody = () => {
  return (
    <div className=" relative max-w-[1440px] w-full h-full  mx-auto  overflow-hidden">
      <div className=" absolute w-[1254.319px] top-[-600px] left-[-900px] h-[1274.894px] -rotate-[31.863deg] shrink-0 rounded-[1274.894px] opacity-[0.13] bg-[linear-gradient(289deg,rgba(202,21,131,0)_24.01%,#CA1583_70.47%)] blur-[60.8128px]" />
      <div className=" absolute w-[1184.836px]  top-[500px] left-[700px] h-[1184.836px] -rotate-[175.34deg] shrink-0 rounded-[1184.836px] opacity-[0.13] bg-[linear-gradient(278deg,rgba(202,21,131,0)_6.12%,#CA1583_72.92%)] blur-[60.8128px]" />
      <div className="w-full max-w-[690px] mx-auto mt-[93px] flex flex-col items-center gap-8">
        <div className="h-[34px] p-[10px] flex items-center gap-2 ">
          <img src={note} alt="note Logo" />
          <p className="text-[16px] font-medium leading-[0.8px] text-black ">
            OEM / ODM SUPPORT
          </p>
        </div>
        <div className="w-full flex flex-col gap-8 items-center">
          <p className="w-full text-[64px] leading-[120%] tracking-[-1.28px] font-medium text-center bg-gradient-to-l from-[#EFB9DA] to-[#E3007F] bg-clip-text text-transparent">
            Start your private label.{" "}
            <span className="text-black"> Expand your line.</span>
          </p>
          <p className="text-[#3B3B3B] text-center text-[20px] font-medium leading-[140%] tracking-[0.4px]">
            Partner with Flamingo for reliable OEM/ODM services from formulation
            to packaging to global delivery.
          </p>
        </div>
        <div>
          <button className="text-white text-[14px] font-medium leading-[100%] bg-[#CA1583]  tracking-[-0.42px] px-[16px] py-[10px] h-11 rounded-[6px]">
            Request OEM Access
          </button>
        </div>
      </div>

      {/* animation */}

      <div className="relative w-full mt-[100px] h-[256px] flex items-center">
        {/* Left container - unbranded bottles */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <img
            src={gallon}
            alt="unbranded bottle 1"
            className="bottle delay-unbranded-0 w-[75px] h-fit object-contain"
          />
          <img
            src={gallon2}
            alt="unbranded bottle 2"
            className="bottle delay-unbranded-1 w-[138px] object-contain"
          />
          <img
            src={gallon2}
            alt="unbranded bottle 3"
            className="bottle delay-unbranded-2 w-[138px] object-contain"
          />
          <img
            src={gallon4}
            alt="unbranded bottle 4"
            className="bottle delay-unbranded-3 w-[280px] h-[249px] object-contain"
          />
          <img
            src={gallon4}
            alt="unbranded bottle 5"
            className="bottle delay-unbranded-4 w-[280px] h-[249px] object-contain"
          />
          <img
            src={gallon}
            alt="unbranded bottle 6"
            className="bottle delay-unbranded-5 w-[75px] h-fit object-contain"
          />
        </div>

        {/* Transformation beam in center */}
        <div style={{ mixBlendMode: 'lighten' }} className="absolute w-[86px] h-[306px] bg-[linear-gradient(270deg,rgba(255,251,253,0)_0%,#FE49BE_50.48%,rgba(255,251,253,0)_100%)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />

        {/* Right container - branded bottles */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <img
            src={styledGallon}
            alt="branded bottle 1"
            className="bottle delay-branded-0 w-[75px] h-fit object-contain"
          />
          <img
            src={styledGallon2}
            alt="branded bottle 2"
            className="bottle delay-branded-1 w-[138px] object-contain"
          />
          <img
            src={styledGallon3}
            alt="branded bottle 3"
            className="bottle delay-branded-2 w-[138px] object-contain"
          />
          <img
            src={styledGallon4}
            alt="branded bottle 4"
            className="bottle delay-branded-3 w-[280px] h-[249px] object-contain"
          />
          <img
            src={styledGallon5}
            alt="branded bottle 5"
            className="bottle delay-branded-4 w-[280px] h-[249px] object-contain"
          />
          <img
            src={styledGallon}
            alt="branded bottle 6"
            className="bottle delay-branded-5 w-[75px] h-fit object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
