import { Main } from "../components/Main";
import { Common } from "../components/Common";
import { MdEdit } from "react-icons/md";

export default function MyComponent() {
  return (
    <Main>
      <div className="max-w-screen-lg mx-auto bg-white shadow-md rounded-md  flex flex-col p-4">
        <div className="">
          <div className=" font-bold ml-2">Properties</div>
          <div className="flex mt-4 mr-4">
            <div className="">
              <div className="mb-4 inline-flex items-center bg-gray-200 rounded-md p-1 mr-2 text-sm">
                <p className="mr-2 text-gray-500">Job Type:</p>
                <p className="text-sm">Hybrid</p>
              </div>

              <div className="mb-4 inline-flex items-center bg-gray-200 rounded-md p-1 mr-2">
                <p className="mr-2 text-gray-500 text-sm">Date Posted:</p>
                <span>24-04-2024 to 30-04-2024</span>
              </div>

              <div className="mb-4 inline-flex items-center bg-gray-200 rounded-md p-1 mr-2">
                <p className="mr-2 text-gray-500 text-sm">Job Type:</p>
                <span className="text-black">Hybrid</span>
              </div>

              <div className="mb-4 inline-flex items-center bg-gray-200 rounded-md p-1 mr-2">
                <p className="mr-2 text-gray-500 text-sm">Salary Range:</p>
                <span className="text-sm">$1000 - $2,500</span>
              </div>

              <div className="mb-4 inline-flex items-center bg-gray-200 rounded-md p-1 mr-2">
                <p className="mr-2 text-gray-500 text-sm">Locations:</p>
                <span className="text-sm">
                  Pune {">"} Delhi {">"} Hyderabad {">"} Tamil Nadu
                </span>
              </div>

              <div className="mb-4 inline-flex items-center bg-gray-200 rounded-md p-1 mr-2">
                <p className="mr-2 text-gray-500 text-sm">+1</p>
              </div>

              <div className="mb-4 inline-flex items-center bg-orange-300 rounded-md p-1 mr-2">
                <button className="mr-2 text-sm flex items-center">
                  <MdEdit className="text-orange-500" />
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="">
              <div className="">
                <div className="flex-col bg-black rounded-md p-2 justify-center items-center inline-flex max-w-xs">
                  <p className="text-white text-sm text-center leading-snug">
                    Lorem ipsum dolor sit consectetur adipiscing elit
                  </p>
                  <button className="bg-orange-500 text-sm border border-orange-500 font rounded p-1 px-5 text-white mt-2">
                    Refresh Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p
          style={{ position: "static", top: "0px", left: "0px" }}
          className="ml-2 font-bold top-0"
        >
          Jobs (44)
        </p>
        <div className="h-96 overflow-y-auto mt-2">
          <div>
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              // Use `index` as the key if the array elements don't have unique IDs
              return (
                <div key={index} className="bg-white rounded-md shadow-md p-2">
                  <Common></Common>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Main>
  );
}
