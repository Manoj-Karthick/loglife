import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between text-slate-900 p-4 border-b px-10 md:px-40">
      <Link className="font-bold hover:text-emerald-600" href="/">
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
        <Link href="/login" className="font-semibold cursor-pointer">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
