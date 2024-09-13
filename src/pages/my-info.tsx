/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
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
import { useQuery } from "@apollo/client";
import { MY_PROFILE_QUERY } from "../graphql/mutations";
import useAuthStore from "../store/useAuthStore";
import { IoMdMenu } from "react-icons/io";

const MyInfo = () => {
  const { data, loading, error } = useQuery(MY_PROFILE_QUERY);
  const { clearTokens } = useAuthStore();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Вы уверены, что хотите выйти?");
    if (confirmLogout) {
      clearTokens();
      window.location.href = "/";
    }
  };

  if (loading) {
    return <p className="text-white">Загрузка...</p>;
  }

  if (error) {
    return (
      <p className="text-red-500">
        Ошибка при выборке данных профиля: {error.message}
      </p>
    );
  }

  const { name, avatar } = data.myProfile;

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between pl-6 pt-6 pr-6 pb-0">
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg font-semibold sm:mb-0">HarmonyHR</p>
          {/* Иконка гамбургер для мобильных экранов */}
          <IoMdMenu
            className="block sm:hidden cursor-pointer text-2xl"
            onClick={handleMenuToggle}
          />
        </div>
        {/* Навигационное меню */}
        <ul
          className={`flex-col sm:flex-row items-center space-x-0 sm:space-x-4  sm:pl-4 ${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex`} // Скрытие/показ меню в зависимости от состояния
        >
          <li className="hover:bg-blue-100 transition-colors duration-200 p-4 cursor-pointer rounded-tl-lg rounded-tr-lg">
            Home
          </li>
          <li className="bg-blue-100 transition-colors duration-200 p-4 cursor-pointer rounded-tl-lg rounded-tr-lg">
            My Info
          </li>
          <li className="hover:bg-blue-100 transition-colors duration-200 p-4 cursor-pointer rounded-tl-lg rounded-tr-lg">
            People
          </li>
          <li className="hover:bg-blue-100 transition-colors duration-200 p-4 cursor-pointer rounded-tl-lg rounded-tr-lg">
            Hiring
          </li>
          <li className="hover:bg-blue-100 transition-colors duration-200 p-4 cursor-pointer rounded-tl-lg rounded-tr-lg">
            Reports
          </li>
          <li className="hover:bg-blue-100 transition-colors duration-200 p-4 cursor-pointer rounded-tl-lg rounded-tr-lg">
            Files
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="flex space-x-4 justify-between pb-6 pr-6 sm:pb-0">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 border border-gray-300 rounded-md w-full sm:w-[200px] md:w-[400px]"
            />
            <div className="flex space-x-4 items-center">
              <VscSettingsGear className="cursor-pointer" />
              <VscQuestion className="cursor-pointer" />
              <FaRegBell className="cursor-pointer" />
            </div>
            <div className="flex items-center space-x-4">
              <img
                src={avatar}
                alt="Avatar"
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <button
                onClick={handleLogout}
                className="px-4 py-1 border border-gray-300 rounded-md hover:bg-blue-100 transition-colors duration-300"
              >
                Выход
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Submenu */}
      <div className="bg-blue-100 ">
        <div className="flex flex-col md:flex-row items-center ml-0 md:ml-20 text-center md:text-left">
          <img
            src={avatar}
            alt="Profile"
            className="rounded-full object-cover w-32 h-32 ml-0 md:ml-10 mt-10"
          />
          <div className="flex flex-col md:flex-row items-center justify-between w-full md:ml-20">
            <p className="mt-4 md:mt-0 text-xl md:text-2xl font-semibold">
              {name}
            </p>
            <div className="flex justify-end space-x-4 pr-6 pl-6 sm:pl-20 sm:pr-20 p-6 items-center">
              <button className="bg-blue-100 border border-gray-400 rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 transition duration-200 h-10">
                Request a Change
                <IoIosArrowDown />
              </button>
              <button className="bg-blue-100 border border-gray-400 rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 transition duration-200 h-10">
                <VscSettingsGear />
                <IoIosArrowDown />
              </button>
              <IoMdMenu
                className="block sm:hidden cursor-pointer text-2xl"
                onClick={handleSubMenuToggle}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <ul
            className={`flex-wrap justify-center md:justify-end md:space-x-10 pr-6 pl-6 sm:pr-20 flex-col sm:flex-row items-center  sm:pl-4 ${
              isSubMenuOpen ? "flex" : "hidden"
            } sm:flex`}
          >
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
            <div className="flex-1 p-0 sm:p-4 text-center">
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
            <div className="flex-1 p-0 sm:p-4 text-center">
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
            <div className="flex-1 p-0 sm:p-4 text-center">
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
                <tbody className="bg-white divide-y divide-gray-700">
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
