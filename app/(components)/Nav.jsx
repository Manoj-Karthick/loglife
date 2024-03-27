import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between text-slate-900 p-4 border-b px-10 md:px-40">
      <Link className="font-bold hover:text-emerald-600" href="/">
        LogLife
      </Link>
      <div className="items-center font-medium space-x-6 hidden md:flex">
        <Link href="/Expiry">Expiry</Link>
        <Link href="/Expiry">Habit</Link>
        <Link href="/Expiry">Finance</Link>
        <Link href="/Expiry">Gym</Link>
        <Link href="/Expiry">Todo</Link>
        <Link href="/Expiry">Goal</Link>
      </div>
      <div>
        <p className="font-semibold cursor-pointer">Login</p>
      </div>
    </nav>
  );
};

export default Nav;
