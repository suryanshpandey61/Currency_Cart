import React from "react";
import Logo from "../assests/Logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <div className="w-[100%] navbar-bg">
      <div className="w-[70%]  mx-auto flex justify-between">
        {/* logo */}
        <div>
          <Image src={Logo} alt="Currency Cart Logo" />
        </div>
        <div className="flex gap-x-[5%] items-center ">
          {/* login btn  */}
          <div>
            <Link href="/login">
              <button className="bg-blue-700 px-[20px]">Login btn</button>
            </Link>
          </div>
          {/* Signup btn  */}
          <div>
            <Link href="/signup">
              <button className="bg-green-400 px-[20px]">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
