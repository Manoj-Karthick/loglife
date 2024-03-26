const Header = () => {
  return (
    <div className="pt-28 text-center">
      <div className="text-5xl font-black leading-relaxed">
        Log Daily and Miss Nothing.
      </div>
      <div className="text-4xl font-bold text-gray-600">
        Effortless organization, unlimited possibilities.{" "}
      </div>
      <div className="inline-block">
        <div className="flex space-x-4 mt-10">
          <div className="border-2 border-emerald-600 hover:shadow-xl shadow-lg text-emerald-600 py-2 px-6 font-bold text-lg rounded-md cursor-pointer">
            Try now
          </div>
          <div className="text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 shadow-2xl py-2 px-6 font-bold text-lg rounded-md cursor-pointer">
            Create Account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
