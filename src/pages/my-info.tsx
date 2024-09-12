/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { CiMedicalCross } from "react-icons/ci";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { GoHistory } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosArrowRoundDown } from "react-icons/io";
import { GrDocumentTime } from "react-icons/gr";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { PiMountains } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { FaHashtag } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { VscSettingsGear } from "react-icons/vsc";
import { VscQuestion } from "react-icons/vsc";
import { FaRegBell } from "react-icons/fa";

const MyInfo = () => {
  return (
    <>
      {/* Menu */}
      <div>
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 ">
          <p className="text-lg font-semibold mb-4 sm:mb-0">HarmonyHR</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 border border-gray-300 rounded-md w-full mr-0 sm:mr-10 sm:w-[200px] md:w-[400px]"
            />
            <div className="flex space-x-4">
              <VscSettingsGear className="cursor-pointer" />
              <VscQuestion className="cursor-pointer" />
              <FaRegBell className="cursor-pointer" />
            </div>
            <button className="px-4 py-1 border border-gray-300 rounded-md hover:bg-blue-100 transition-colors duration-300">
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <ul className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 sm:pl-60">
          <li className="flex-shrink-0 hover:bg-blue-100 transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
            Home
          </li>
          <li className="flex-shrink-0 bg-blue-100 transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
            My Info
          </li>
          <li className="flex-shrink-0 hover:bg-blue-100 transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
            People
          </li>
          <li className="flex-shrink-0 hover:bg-blue-100 transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
            Hiring
          </li>
          <li className="flex-shrink-0 hover:bg-blue-100 transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
            Reports
          </li>
          <li className="flex-shrink-0 hover:bg-blue-100 transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
            Files
          </li>
        </ul>
      </div>

      {/* Submenu */}
      <div className="bg-blue-100">
        <div className="flex flex-col md:flex-row items-center p-6 ml-0 md:ml-20 text-center md:text-left">
          <img
            src=""
            alt="Profile"
            className="rounded-full object-cover w-16 h-16 ml-0 md:ml-10"
          />
          <div className="ml-0 md:ml-20">
            <p className="mt-4 md:mt-0 ml-0 md:ml-10 text-xl md:text-2xl font-semibold">
              Alexandra Kuibyshevskaya
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-10 pr-6 pl-6 sm:pl-20 sm:pr-20">
            <li className="flex-shrink-0 hover:bg-white transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
              Personal
            </li>
            <li className="flex-shrink-0 hover:bg-white transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
              Job
            </li>
            <li className="flex-shrink-0 bg-white transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
              Time Off
            </li>
            <li className="flex-shrink-0 hover:bg-white transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
              Emergency
            </li>
            <li className="flex-shrink-0 hover:bg-white transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
              Documents
            </li>
            <li className="flex-shrink-0 hover:bg-white transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
              Notes
            </li>
            <li className="flex-shrink-0 hover:bg-white transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
              Benefits
            </li>
            <li className="flex-shrink-0 hover:bg-white transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
              Training
            </li>
            <li className="flex-shrink-0 hover:bg-white transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
              Assets
            </li>
            <li className="flex items-center space-x-2 flex-shrink-0 hover:bg-white transition-colors duration-200 p-2 cursor-pointer rounded-tl-lg rounded-tr-lg">
              More
              <IoIosArrowDown />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-auto sm:pl-20 sm:pr-20 sm:pb-20 pl-6 pr-6 pb-6 bg-gray-100">
        {/* Sidebar */}
        <div className="w-full md:w-1/6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <ul className="text-sm text-gray-600 list-none space-y-1">
              <li className="flex items-center">
                <FiPhone className="mr-2" />
                07911 654321
              </li>
              <li className="flex items-center w-auto">
                <MdOutlineEmail className="mr-2" />
                avd.yana@videorollnet
              </li>
              <div className="flex space-x-4 mt-4">
                <FiLinkedin className="text-xl" />
                <FiTwitter className="text-xl" />
                <LuFacebook className="text-xl" />
              </div>
            </ul>
          </div>

          <div className="mt-6">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-sm font-semibold pb-2">Hire Date</h3>
              <ul className="text-sm text-gray-600 list-none space-y-1">
                <li className="flex items-center">Sep. 3, 2020</li>
                <li className="flex items-center">3y - 9m - 20d</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <div className="mt-4 bg-white shadow-md rounded-lg p-4">
              <ul className="text-sm text-gray-600 list-none space-y-1">
                <li className="flex items-center">
                  <FaHashtag className="mr-2" />5
                </li>
                <li className="flex items-center">
                  <IoTimeOutline className="mr-2" />
                  Full-Time
                </li>
                <li className="flex items-center">
                  <IoIosPeople className="mr-2" />
                  Operations
                </li>
                <li className="flex items-center">
                  <IoGlobeOutline className="mr-2" />
                  Europe
                </li>
                <li className="flex items-center">
                  <MdOutlinePlace className="mr-2" />
                  London, UK
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 mb-6">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-sm font-semibold pb-2">Direct Reports</h3>
              <ul className="text-sm text-gray-600 list-none space-y-1">
                <li className="flex items-center">
                  <CgProfile className="mr-2" />
                  Shane
                </li>
                <li className="flex items-center">
                  <CgProfile className="mr-2" />
                  Nathan
                </li>
                <li className="flex items-center">
                  <CgProfile className="mr-2" />
                  Mitchell
                </li>
                <li className="flex items-center">
                  <CgProfile className="mr-2" />
                  Philip
                </li>
                <li className="flex items-center">
                  <IoIosPeople className="mr-2" />4 More...
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white shadow-md p-4 md:ml-6 max-w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-gray-500 py-2">
            <div className="flex items-center space-x-2">
              <GrDocumentTime className="text-xl" />
              <h3 className="font-semibold text-gray-600 text-base md:text-lg">
                Time Off
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
              <span className="text-sm text-gray-700">
                Accrual Level Start Date 03/09-2020
              </span>
              <button className="px-4 py-2 text-sm bg-white text-black border border-gray-300 rounded-md  hover:bg-blue-100">
                Add Time Off Policy
              </button>
            </div>
          </div>

          {/* Time Off Summary */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
            <div className="flex-1 p-4 text-center">
              <div className="bg-gray-50 rounded-lg p-4 text-center shadow-md h-40">
                <h2 className="text-lg font-semibold">Sick</h2>
                <div className="flex items-center justify-center space-x-2 p-2">
                  <CiMedicalCross className="text-4xl" />
                  <div>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                </div>
                <p className="text-sm text-black">Days Available</p>
                <p className="text-sm text-blue-400">1 day scheduled</p>
              </div>
              <p className="pt-2 text-blue-400">Sick Full-Time</p>
            </div>
            <div className="flex-1 p-4 text-center">
              <div className="bg-gray-50 rounded-lg p-4 text-center shadow-md h-40">
                <h2 className="text-lg font-semibold">Annual Leave</h2>
                <div className="flex items-center justify-center space-x-2 p-2">
                  <PiMountains className="text-4xl" />
                  <div>
                    <p className="text-3xl font-bold">10.3</p>
                  </div>
                </div>
                <p className="text-sm text-black">Days Available</p>
              </div>
              <p className="pt-2 text-blue-400">Holiday Full-Time</p>
            </div>
            <div className="flex-1 p-4 text-center">
              <div className="bg-gray-50 rounded-lg p-4 text-center shadow-md h-40">
                <h2 className="text-lg font-semibold">Comp/In Lieu Time</h2>
                <div className="flex items-center justify-center space-x-2 p-2">
                  <GrDocumentTime className="text-4xl" />
                  <div>
                    <p className="text-3xl font-bold">0</p>
                  </div>
                </div>
                <p className="text-sm text-black">Human Used (YTD)</p>
              </div>
              <p className="pt-2 text-blue-400">
                Comp/in Lieu Time Flexible Policy
              </p>
            </div>
          </div>

          {/* Upcoming Time Off */}
          <div className="mt-6">
            <div className="flex items-center space-x-2 border-b-2 border-gray-500 py-2">
              <IoTimeOutline className="text-xl" />
              <h3 className="font-semibold text-gray-600">Upcoming Time Off</h3>
            </div>
            <ul className="space-y-2 mt-2">
              <li className="flex items-center border-b-2 border-gray-500 py-2">
                <CiMedicalCross className="text-xl mr-2" />
                <div>
                  <span>Jan 27</span>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>1 day of Sick</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-center border-b-2 border-gray-500 py-2">
                <LiaPiggyBankSolid className="text-xl mr-2" />
                <div>
                  <span>Jul 4</span>
                  <span className="block text-gray-500">Independence Day</span>
                </div>
              </li>
            </ul>
          </div>

          {/* History */}
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <GoHistory className="text-xl" />
              <h3 className="font-semibold text-gray-600">History</h3>
            </div>

            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-blue-100">
                  <tr>
                    <div className="flex items-center space-x-2">
                      <th className="text-left p-2 text-sm font-semibold">
                        Date
                      </th>
                      <IoIosArrowRoundDown />
                    </div>
                    <th className="text-left p-2 text-sm font-semibold">
                      Description
                    </th>
                    <th className="text-left p-2 text-sm font-semibold">
                      Used Days (-)
                    </th>
                    <th className="text-left p-2 text-sm font-semibold">
                      Earned Days (+)
                    </th>
                    <th className="text-left p-2 text-sm font-semibold">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-blue-400">
                  <tr className="hover:bg-blue-100 cursor-pointer">
                    <td className="p-2 text-sm">23/05/2024</td>
                    <td className="p-2 text-sm">
                      Accrual for 23/05/2024 to 20/11/2024
                    </td>
                    <td className="p-2 text-sm"></td>
                    <td className="p-2 text-sm">3.00</td>
                    <td className="p-2 text-sm">3.00</td>
                  </tr>
                  <tr className="hover:bg-blue-100 cursor-pointer">
                    <td className="p-2 text-sm">23/05/2024</td>
                    <td className="p-2 text-sm">
                      Accrual for 23/05/2024 to 20/11/2024
                    </td>
                    <td className="p-2 text-sm">-6</td>
                    <td className="p-2 text-sm"></td>
                    <td className="p-2 text-sm">3.00</td>
                  </tr>
                  <tr className="hover:bg-blue-100 cursor-pointer">
                    <td className="p-2 text-sm">23/05/2024</td>
                    <td className="p-2 text-sm">
                      Accrual for 23/05/2024 to 20/11/2024
                    </td>
                    <td className="p-2 text-sm"></td>
                    <td className="p-2 text-sm">3.00</td>
                    <td className="p-2 text-sm">3.00</td>
                  </tr>
                  <tr className="hover:bg-blue-100 cursor-pointer">
                    <td className="p-2 text-sm">23/05/2024</td>
                    <td className="p-2 text-sm">
                      Accrual for 23/05/2024 to 20/11/2024
                    </td>
                    <td className="p-2 text-sm"></td>
                    <td className="p-2 text-sm">3.00</td>
                    <td className="p-2 text-sm">3.00</td>
                  </tr>
                  <tr className="hover:bg-blue-100 cursor-pointer">
                    <td className="p-2 text-sm">23/05/2024</td>
                    <td className="p-2 text-sm">
                      Accrual for 23/05/2024 to 20/11/2024
                    </td>
                    <td className="p-2 text-sm">-6</td>
                    <td className="p-2 text-sm"></td>
                    <td className="p-2 text-sm">3.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyInfo;
