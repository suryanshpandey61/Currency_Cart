import React from "react";
import Logo from "../assests/Logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <div className="w-[100%] p-2 bg-[#081052]">
      <div className="lg:w-[70%] w-[100%]      mx-auto flex justify-between">
        {/* logo */}
        <div className="lg:w-[50%] w-[20%] ">
          <Link href="/">
          <Image src={Logo} alt="Currency Cart Logo" />
          </Link>
         
        </div>
        <div className="flex gap-x-[3%] w-[50%]   justify-end items-center ">
          {/* login btn  */}
          <div className="">
            <Link href="/login">
              <button className="login-btn ">Login</button>
            </Link>
          </div>
          {/* Signup btn  */}
          <div className="">
            <Link href="/signup">
              <button className="signup-btn ">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
