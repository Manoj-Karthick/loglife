"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    setloading(true);
    const toastId = toast.loading("Loading...");
    if (!user.username) {
      setError({ username: "Please enter username" });
      setloading(false);
      toast.dismiss(toastId);
      return;
    }

    if (!user.email) {
      setError({ email: "Please enter email address" });
      setloading(false);
      toast.dismiss(toastId);
      return;
    }
    if (user.password.length < 8 || user.password.length > 15) {
      setError({
        password: "Password length must be between 8 and 15",
      });
      setloading(false);
      toast.dismiss(toastId);
      return;
    }
    if (user.password != user.confirmPassword) {
      setError({ password: "Password doesn't match" });
      setloading(false);
      toast.dismiss(toastId);
      return;
    }
    try {
      setUser({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      const response = await axios.post("/api/auth/signup", user);
      setloading(false);
      toast.dismiss(toastId);
      router.push("/login");
    } catch (err) {
      toast.error(err.message);
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
          <h1 className="text-2xl text-center font-semibold">Signup</h1>
          <form onSubmit={handleSignup} className="space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-emerald-500"
              >
                <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
              </svg>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                value={user.username}
              />
            </label>
            {error.username && (
              <div className="p-2 text-red-500">{error.username}</div>
            )}
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
                placeholder="Email"
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
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
              />
            </label>
            {error.password && (
              <div className="p-2 text-red-500">{error.password}</div>
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
                placeholder="Confirm password"
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                value={user.confirmPassword}
              />
            </label>
            <button className="btn btn-success text-white px-10">Signup</button>
          </form>
          <div>
            <Link
              href="/login"
              className="font-semibold cursor-pointer text-blue-500 hover:bg-blue-100 p-2 rounded-md transition-all duration-300"
            >
              Login instead
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
