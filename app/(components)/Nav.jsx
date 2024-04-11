"use client";

import Link from "next/link";

export default function Nav() {
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
        <Link
          href="/login"
          className="font-semibold cursor-pointer bg-gray-300 hover:bg-gray-200 rounded-md p-2 transition-all duration-300"
        >
          Login &rarr;
        </Link>
      </div>
    </nav>
  );
}
