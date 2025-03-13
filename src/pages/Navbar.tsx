import React from "react";
import Logo from "../assests/Logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <div className="w-[100%] p-2 bg-[#081052]">
      <div className="w-[70%]  mx-auto flex justify-between">
        {/* logo */}
        <div className="w-[50%]">
          <Link href="/">
          <Image src={Logo} alt="Currency Cart Logo" />
          </Link>
         
        </div>
        <div className="flex gap-x-[3%] w-[50%] justify-end items-center ">
          {/* login btn  */}
          <div>
            <Link href="/login">
              <button className="login-btn">Login btn</button>
            </Link>
          </div>
          {/* Signup btn  */}
          <div>
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
