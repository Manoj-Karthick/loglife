"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Nav = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/auth/me");
        console.log(response.data.data);
        setData(response.data.data.username);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="flex justify-between text-slate-900 p-4 border-b px-10 md:px-10 lg:px-20">
      <Link
        className="font-bold text-emerald-500 hover:text-emerald-700"
        href="/"
      >
        LogLife
      </Link>
      <div className="items-center font-medium space-x-6 hidden md:flex">
        <Link href="/expiry">Expiry</Link>
        <Link href="/expiry">Habit</Link>
        <Link href="/expiry">Finance</Link>
        <Link href="/expiry">Gym</Link>
        <Link href="/expiry">Todo</Link>
        <Link href="/expiry">Goal</Link>
      </div>
      <div>
        {data ? (
          data
        ) : (
          <Link href="/login" className="font-semibold cursor-pointer">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
