"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logOut } from "../(redux)/features/authSlice";

const Expiry = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/auth/logout");
      dispatch(logOut());
      console.log(response);
      router.push("/login");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      Expiry Page
      <div>
        <Link href="add">Add Expiry</Link>
      </div>
      <div>
        <button
          onClick={handleLogout}
          className="p-2 text-blue-500 bg-slate-200 my-2 rounded"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-between">
        <div>
          <div>Fruits & Vegetables - 21 items</div>
          <div>Groceries - 12 items</div>
          <div>Medicines - 5 items</div>
          <div>Services - 34 items</div>
        </div>
        <div>
          Display all reminders here in decending order - Expiry items first
          <div>
            <div>images - Expiry Name - Days Left</div>
            <div>Expiry Date</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expiry;
