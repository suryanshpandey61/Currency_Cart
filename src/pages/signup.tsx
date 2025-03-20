import "../../src/app/globals.css";
import React,{useState}from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Link from "next/link";

const signup: React.FC = () => {

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[confirmPassword,setConfirmPassword] = useState("");
  const[error,setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e:React.FormEvent) => {
     
      e.preventDefault();

      if(password!==confirmPassword){
        setError("Password do not match please again check the pasword");
        return;
      }

  }


  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center flex-grow signup-bg">
        <div className="w-[90%] lg:pt-0 mt-2 max-w-lg p-5 bg-white rounded-lg shadow-md mb-2">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 pt-2 ">Create Account</h2>

          <form className="space-y-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <div className="text-sm text-gray-600">
              Already have an account?{" "}
             <Link href="/login">  Log In
             </Link>
              
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
