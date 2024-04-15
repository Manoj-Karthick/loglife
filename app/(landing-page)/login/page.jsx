"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { logIn } from "@/app/(redux)/features/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    login: "",
  });
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setloading(true);
    const toastId = toast.loading("Loading...");
    if (!user.email) {
      setError({ email: "Please enter email address" });
      setloading(false);
      toast.dismiss(toastId);
      return;
    }
    try {
      setError({
        email: "",
        login: "",
      });
      setUser({ email: "", password: "" });
      const response = await axios.post("/api/auth/login", user);
      console.log(response);
      if (response.data.status == 500) {
        setError({ login: "Email or password is incorrect" });
        setloading(false);
        toast.dismiss(toastId);
        toast.error("Error occurred while login");
      }
      if (response.data.status == 200) {
        dispatch(logIn(response.data));
        router.push("/dashboard");
      }
    } catch (err) {
      toast.error(err.message);
      toast.dismiss(toastId);
    }
  };

  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <div className="container mx-auto space-y-5 m-20">
          <Link
            className=" text-blue-500 hover:bg-blue-100 p-2 rounded-md transition-all duration-300"
            href="/"
          >
            &larr; Go to home
          </Link>
          <h1 className="text-2xl text-center font-semibold">Login</h1>
          <form onSubmit={handleLogin} className="space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 text-emerald-500"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
              />
            </label>
            {error.email && (
              <div className="p-2 text-red-500">{error.email}</div>
            )}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 text-emerald-500"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
              />
            </label>
            {error.login && (
              <div className="p-2 text-red-500">{error.login}</div>
            )}
            <button className="btn btn-success text-white px-10">Login</button>
          </form>
          <div>
            <Link
              className="font-semibold text-blue-500 hover:bg-blue-100 p-2 rounded-md transition-all duration-300"
              href="/signup"
            >
              Signup instead
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
