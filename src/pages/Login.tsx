import React from "react";

export const Login: React.FC = () => {
  return (
    <>
      <form className="rounded-lg border-2 border-black p-4">
        <h1 className="text-center">Create your account</h1>
        <div className="text-sm">
          <label>Name</label>
          <input placeholder="Enter name" type="text" />
        </div>
        <div className="text-sm">
          <label>Email</label>
          <input placeholder="Enter email" type="email" />
        </div>
        <div className="text-sm">
          <label>Password</label>
          <input placeholder="Enter password" type="password" />
        </div>
      </form>
    </>
  );
};
