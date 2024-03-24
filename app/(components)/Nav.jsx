import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between text-slate-200 bg-slate-900 p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/Expiry">Expiry</Link>
      </div>
      <div>
        <p className="font-bold">Login</p>
      </div>
    </nav>
  );
};

export default Nav;
