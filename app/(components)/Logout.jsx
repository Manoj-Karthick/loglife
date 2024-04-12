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
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <button className="" onClick={handleLogout}>
            Logout &rarr;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Logout;
