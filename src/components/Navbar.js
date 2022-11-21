import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function Navbar() {
  const [nav, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar(!nav);
  };

  return (
    <div className=" flex justify-between items-center max-w-[1240px] h-24 mx-auto  text-white">
      <h1 className="text-[#00df9a] text-3xl w-full">REACT</h1>
      <ul className="hidden md:flex">
        <li className="p-4 ">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        <div
          className={
            !nav
              ? "fixed left-0 top-0  w-[40%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-[#00df9a] font-bold text-3xl w-full m-4">
            REACT.
          </h1>
          <ul className=" p-4 uppercase">
            <li className="p-4 border-b border-gray-600 ">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
