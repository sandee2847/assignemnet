"use client";

import React, { useState } from "react";
import { PiToolboxLight } from "react-icons/pi";
import { TbSquares } from "react-icons/tb";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { TbSquareRounded } from "react-icons/tb";
import { BsSave2 } from "react-icons/bs";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { TbHelpSquare } from "react-icons/tb";
import { MdOutlineStarOutline } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

export const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("UI/UX Designer");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionClick = (option:any) => {
    setSelectedOption(option);
  };

  return (
    <div style={{height:"90vh"}} className="w-1/6 border border-gray-200 flex flex-col justify-between p-2">
      <div className="my-4">
        <div className="flex items-center">
          <PiToolboxLight />
          <p>Job Recommendation Tool</p>
        </div>

        <div
          className="bg-black text-white p-2 flex items-center justify-between rounded mt-2"
          onClick={toggleMenu}
          
        >
          <div className="flex items-center">
            <TbSquares className="text-orange-500 mr-2 h-6 w-4" />
            <p className="text-md">Job Board</p>
          </div>
          {showMenu ? (
            <MdKeyboardArrowUp className="text-white h-6 w-4" />
          ) : (
            <MdKeyboardArrowDown className="text-white h-6 w-4" />
          )}
        </div>

        {showMenu && (
          <div className="p-2 bg-white border border-gray-200 rounded-b">
            <p
              className={`cursor-pointer ${
                selectedOption === "UI/UX Designer"
                  ? "text-orange-500 border bg-gray-200 p-2 px-2 border-gray-300 rounded"
                  : "text-gray-500"
              }`}
              onClick={() => handleOptionClick("UI/UX Designer")}
            >
              <span className="mr-2">•</span>UI/UX Designer
            </p>
            <p
              className={`cursor-pointer ${
                selectedOption === "Web Developer"
                  ? "text-orange-500 border bg-gray-200 p-2 px-2 border-gray-300 rounded"
                  : "text-gray-500"
              }`}
              onClick={() => handleOptionClick("Web Developer")}
            >
              <span className="mr-2">•</span>Web Developer
            </p>
            <p
              className={`cursor-pointer ${
                selectedOption === "Analyst"
                  ? "text-orange-500 border bg-gray-200 p-2 px-2 border-gray-300 rounded"
                  : "text-gray-500"
              }`}
              onClick={() => handleOptionClick("Analyst")}
            >
              <span className="mr-2">•</span>Analyst
            </p>
          </div>
        )}

        <div className="text-orange-500 mt-2"> + Create a new profile</div>
        <div className="flex items-center mt-2">
          {" "}
          <TbSquareRounded /> <p>History</p>
        </div>
        <div className="flex items-center mt-2">
          <BsSave2 />
          <p>Saved Jobs</p>
        </div>
        <div className="flex items-center mt-2">
          <RiMoneyDollarBoxLine />
          <p>Plans</p>
        </div>
        <div className="flex items-center mt-2">
          <MdOutlineManageAccounts />
          <p>Manage Profiles</p>
        </div>
      </div>

      <div style={{position:"static", bottom:"0px", left:"0px"}}>
        <div className="text-gray-500 mt-2">Help & support</div>
        <div className="flex items-center mt-2">
          <IoMdSettings />
          <p>Setting</p>
        </div>
        <div className="flex items-center mt-2">
          <TbHelpSquare />
          <p>Help Center</p>
        </div>

        <div className="inline-flex items-center bg-gray-200 border  border-gray-700 rounded-md p-2 mr-2 mt-2 text-sm">
          Current Plan : <span className="text-orange-500">Free</span>
        </div>

        <div className="inline-flex bg-orange-200 p-4 rounded-md border border-orange-700 mt-2">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
              <MdOutlineStarOutline className="text-white text-3xl" />
            </div>
            <div className="ml-4">
              <p className="font-bold">Upgrade to Pro</p>
              <p className="text-sm text-gray-500">Get all features</p>
            </div>
            <div className="ml-auto">
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
