import React from "react";

export const Signup: React.FC = () => {
  return (
    <>
      <form className="mx-auto mt-12 flex w-[400px] flex-col gap-6 rounded-lg border-2 border-gray-300 p-8">
        <h1 className="text-center text-2xl font-bold">Create your account</h1>
        <div className="flex flex-col text-[12px]">
          <label>Name</label>
          <input
            placeholder="Enter name"
            type="text"
            className="rounded-sm border-2 border-gray-300 p-2"
          />
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
          CREATE ACCOUNT
        </button>
        <p className="text-center">
          <span className="text-[12px] text-gray-600">Have an account? </span>
          <span className="text-[12px]">LOGIN</span>
        </p>
      </form>
    </>
  );
};
