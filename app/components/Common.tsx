import ApexCharts from "./Chart";
import { FcGoogle } from "react-icons/fc";
import { TbCalendarTime } from "react-icons/tb";

export function Common() {
  return (
    <div className=" max-w-screen-lg mx-auto bg-white shadow-md rounded-md overflow-hidden flex ">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="bg-gray-200 h-12 w-12 px-2 pb-2 rounded-md inline-flex items-center">
              <FcGoogle style={{ fontSize: "30px" }} />
            </div>
            <div className="">
              <p className="text-sm">UI/UX Designer</p>
              <div className="gap-2">
                <p className="mb-2 mr-1 inline-flex items-center bg-gray-200 rounded-md p-1 text-sm">
                  Google
                </p>
                <p className="mb-4 mr-1 inline-flex items-center bg-orange-200 rounded-md p-1 text-sm text-orange-900">
                  Figma
                </p>
                <p className="mb-4 mr-1 inline-flex items-center bg-pink-200 rounded-md p-1 text-sm text-pink-900">
                  Prototyping
                </p>
                <p className="mb-4 mr-1 inline-flex items-center bg-blue-200 rounded-md p-1 text-sm text-blue-900">
                  User Interface
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-1">
            <div className="flex gap-1">
              <p className="flex items-baseline">
                <TbCalendarTime className="text-gray-500" />
                <span className="ml-1 text-sm">0-3 Years</span>
              </p>
              <div className=" border-gray-300 h-4 border-l-2"></div>
            </div>
            <div className="flex gap-1">
              <p className="ml-1 text-sm">Full Time</p>
              <div className="border-gray-300 h-4 border-l-2"></div>
            </div>
            <div className="flex">
              <p className="ml-1 text-sm text-gray-500">Posted on:</p>
              <p className="ml-1 text-sm">02 April 2024</p>
            </div>
          </div>

          <div>
            <ul className="list-disc list-inside text-gray-500">
              <li className="border-r border-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </li>
              <li className="border-r border-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <button className="bg-orange-500 text-white p-2 rounded-md text-sm m-2">
            Apply Now
          </button>
          <button className="bg-gray-200 p-2 rounded-md text-sm">Save</button>
        </div>

        <div>
          <ApexCharts></ApexCharts>
        </div>
      </div>

    </div>
  );
}
