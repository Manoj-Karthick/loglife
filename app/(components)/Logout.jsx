"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import { logOut } from "@/app/(redux)/features/authSlice";

const Logout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/auth/logout");
      dispatch(logOut());
      router.push("/login");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div>
      <button
        className="cursor-pointer bg-blue-200 p-2 rounded-lg bg-auto mt-40 hover:bg-blue-300 transition-all duration-300"
        onClick={handleLogout}
      >
        Logout &rarr;
      </button>
    </div>
  );
};

export default Logout;
