"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between text-slate-900 p-4 border-b px-10 md:px-10 lg:px-20">
      <Link
        className="font-bold text-emerald-700 bg-emerald-100 rounded-lg py-1.5 px-4 text-lg -m-2"
        href="/"
      >
        LogLife
      </Link>
      <div className="items-center font-medium hidden md:flex">
        <Link
          href="/expiry"
          className="hover:bg-emerald-100 hover:px-3 hover:py-2 hover:-my-2 rounded-lg px-3"
        >
          Expiry
        </Link>
        <Link
          href="/expiry"
          className="hover:bg-emerald-100 hover:px-3 hover:py-2 hover:-my-2 rounded-lg px-3"
        >
          Habit
        </Link>
        <Link
          href="/expiry"
          className="hover:bg-emerald-100 hover:px-3 hover:py-2 hover:-my-2 rounded-lg px-3"
        >
          Finance
        </Link>
        <Link
          href="/expiry"
          className="hover:bg-emerald-100 hover:px-3 hover:py-2 hover:-my-2 rounded-lg px-3"
        >
          Gym
        </Link>
        <Link
          href="/expiry"
          className="hover:bg-emerald-100 hover:px-3 hover:py-2 hover:-my-2 rounded-lg px-3"
        >
          Todo
        </Link>
        <Link
          href="/expiry"
          className="hover:bg-emerald-100 hover:px-3 hover:py-2 hover:-my-2 rounded-lg px-3"
        >
          Goal
        </Link>
      </div>
      <div>
        <Link
          href="/login"
          className="font-semibold cursor-pointer bg-blue-100 hover:bg-blue-200 rounded-md p-2 transition-all duration-300"
        >
          Login &rarr;
        </Link>
      </div>
    </nav>
  );
}
