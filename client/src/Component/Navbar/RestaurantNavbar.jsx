import React, { useState } from "react";
import {Link} from 'react-router-dom' 

//Icons
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { IoChevronBackSharp } from "react-icons/io5";

//component
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../Redux/Reducer/Auth/auth.action";

function MobileNav({ user, setIsDropdownOpen, isDropdownOpen, signIn, signUp }) {
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signOut());
  };
  return (
    <>
      <div className="flex w-full items-center justify-between lg:hidden">
        <IoChevronBackSharp />
        <div className="w-28">
          <Link to={`/delivery`} >
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="Zomato Logo"
            className=" w-full h-full"
          /></Link>
        </div>
        <div className="flex items-center gap-3 relative">
          <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
            Use App
          </button>
          {user ?.user?.fullName ? (
            <>
              <div
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="border p-1 border-gray-300 text-zomato-400 w-14 h-14 rounded-full"
              >
                <img
                  src="https://e7.pngegg.com/pngimages/312/283/png-clipart-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face.png"
                  className="w-full h-full rounded-full object-cover"
                  alt="UserImage"
                />
              </div>
              {isDropdownOpen && (
                <div className="absolute top-20 right-1 shadow-lg py-3 pl-3 bg-white w-32 z-30 flex-col gap-2 border-2 border-gray-100 rounded-md">
                  <button onClick={signOutHandler}>Sign Out</button>
                </div>
              )}
            </>
          ) : (
            <>
              <span
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className=" border p-3 border-gray-300 text-zomato-400  rounded-full"
              >
                <FaUserAlt />
              </span>
              {isDropdownOpen && (
                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white flex flex-col gap-2 ">
                  <button onClick={signIn} >SignIn</button>
                  <button onClick={signUp} >SignUp</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

function LargeNav({ user, setIsDropdownOpen, isDropdownOpen, signIn, signUp }) {
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signOut());
  };
  return (
    <>
      <div className="hidden lg:inline container px-32 mx-auto">
        <div className="hidden gap-4 w-full items-center justify-around lg:flex">
          <div className="w-28">
          <Link to={`/delivery`} >
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="Zomato logo"
              className="w-full h-full"
            /></Link> 
          </div>
          <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className=" text-zomato-300">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Chennai NCR"
                className="focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2 text-gray-500">
              <RiSearchLine />
              <input
                type="text"
                placeholder="Search fro restaurant cusine or a dish"
                className=" w-full focus:outline-none"
              />
            </div>
          </div>
          {user ?.user?.fullName ? (
            <div className=" relative w-16">
              <div
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className=" border p-1 border-gray-300 text-zomato-400 w-full h-16 rounded-full"
              >
                <img
                  src="https://e7.pngegg.com/pngimages/312/283/png-clipart-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face.png"
                  className="w-full h-full rounded-full object-cover"
                  alt="UserImage"
                />
              </div>
              {isDropdownOpen && (
                <div className="absolute top-20 shadow-lg py-3 pl-3 bg-white w-32 z-30 flex-col gap-2 border-2 border-gray-100 rounded-md">
                  <button onClick={signOutHandler}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className=" ml-28 flex gap-6">
              <button onClick={signIn}  className="text-gray-500 text-lg hover:text-gray-800">
                Login
              </button>
              <button onClick={signUp} className="text-gray-500 text-lg hover:text-gray-800">
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function RestaurantNavbar() {
  const reduxState = useSelector((globalStore) => globalStore.user.user);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);
  const openSignInModal = () => {
    setOpenSignin(true);
  };

  const openSignUpModal = () => {
    setOpenSignup(true);
  };

  return (
    <>
      <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
      <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
      <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <MobileNav
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          signIn={openSignInModal}
          signUp={openSignUpModal}
          user={reduxState}
        />
        <LargeNav
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          signIn={openSignInModal}
          signUp={openSignUpModal}
          user={reduxState}
        />
      </nav>
    </>
  );
}

export default RestaurantNavbar;
