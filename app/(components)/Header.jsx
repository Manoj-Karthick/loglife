import Link from "next/link";

const Header = () => {
  return (
    <div className="pt-14 md:pt-28 text-center">
      <div className="text-3xl md:text-5xl font-black leading-relaxed">
        Log Daily and Miss Nothing.
      </div>
      <div className="text-2xl md:text-4xl font-bold text-gray-600">
        Effortless organization, unlimited possibilities.{" "}
      </div>
      <div className="inline-block">
        <div className="md:flex md:space-x-4 mt-10 space-y-4 md:space-y-0">
          <div className="border-2 border-emerald-600 hover:shadow-xl shadow-lg text-emerald-600 py-1 px-3 md:py-2 md:px-6 font-semibold md:font-bold text-base md:text-lg rounded-md cursor-pointer">
            Try now
          </div>
          <Link
            href="/signup"
            className="text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 shadow-2xl py-1 px-3 md:py-2 md:px-6 font-semibold md:font-bold text-base md:text-lg rounded-md cursor-pointer"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
