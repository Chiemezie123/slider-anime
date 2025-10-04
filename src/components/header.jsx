import React from "react";
import HeaderLogo from "../assets/svg/Isolation_Mode.svg";
import flag from "../assets/svg/united-states-of-america.svg";
import dropdown from "../assets/svg/arrow_down.svg";
import download from "../assets/svg/download.svg";

const Header = () => {
  return (
    <div className="w-full flex flex-col h-[150px] bg-[#F4F4F4]">
      <div className="flex items-center justify-center gap-2 bg-[#101010]">
        <div className="max-w-[1440px] flex items-center gap-2 mx-auto h-[35px]">
          <button className="py-1 px-3 bg-[#CA1583] rounded-[30px] text-white text-[9px]">
            Read more
          </button>
          <p className="text-white whitespace-nowrap leading-[125%] text-[12px] font-regular">
            A flamingo store has just opened a branch in Awka, Anambra state.
            Check it out!
          </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="h-20 max-w-[1440px] w-full mx-auto px-[30px] flex items-center justify-between bg-white">
          <div className="max-w-[432px] w-full">
            <img
              src={HeaderLogo}
              alt="Header Logo"
              className="h-full w-full "
            />
          </div>
          <div className="max-w-[901px] w-full  flex items-center  h-full">
            <ul className="flex items-center justify-between w-full">
              <li className="text-black text-[14px] font-medium leading-[140%]">
                About Us
              </li>
              <li className="text-black text-[14px] font-medium leading-[140%] flex items-center gap-2">
                Products{" "}
                <span className="text-black text-[14px] font-medium leading-[140%]">
                  <img src={dropdown} alt="dropdown Logo" />
                </span>
              </li>
              <li className="text-black text-[14px] font-medium leading-[140%]">
                Shop
              </li>
              <li className="text-black text-[14px] font-medium leading-[140%]">
                OEM & ODM
              </li>
              <li className="text-black text-[14px] font-medium leading-[140%]">
                Contact
              </li>
              <li className="text-black text-[14px] font-medium leading-[140%] flex items-center gap-2">
                Download 2025 Catalog
                <span className="text-black text-[14px] font-medium leading-[140%]">
                  <img src={download} alt="download Logo" />
                </span>
              </li>
              <button className="text-white text-[14px] font-medium leading-[100%] bg-[#CA1583]  tracking-[-0.42px] px-[16px] py-[10px] h-11 rounded-[6px]">
                Contact Sales
              </button>
              <li className="flex items-center gap-2">
                <span className="flex items-center gap-2">
                  <img src={flag} alt="flag Logo" />
                  <p className="text-black text-[14px] font-medium leading-[140%]">
                    Eng
                  </p>
                </span>
                <span>
                  <img src={dropdown} alt="dropdown Logo" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
