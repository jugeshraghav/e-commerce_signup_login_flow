import React from "react";

export const Login: React.FC = () => {
  return (
    <>
      <form className="mx-auto mt-12 flex w-[400px] flex-col gap-6 rounded-lg border-2 border-gray-300 p-8">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <div>
          <h2 className="text-center text-xl font-bold">
            Welcome back to ECOMMERCE
          </h2>
          <p className="text-center text-[12px]">
            The next gen business marketplace
          </p>
        </div>

        <div className="flex flex-col text-[12px]">
          <label>Email</label>
          <input
            placeholder="Enter email"
            type="email"
            className="rounded-sm border-2 border-gray-300 p-2"
          />
        </div>
        <div className="flex flex-col text-[12px]">
          <label>Password</label>
          <input
            placeholder="Enter password"
            type="password"
            className="rounded-sm border-2 border-gray-300 p-2"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-black p-2 text-[12px] text-white"
        >
          LOGIN
        </button>
        <p className="text-center">
          <span className="text-[12px] text-gray-600">
            Don't have an account?{" "}
          </span>
          <span className="text-[12px]">SIGNUP</span>
        </p>
      </form>
    </>
  );
};
