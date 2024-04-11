"use client";
import Link from "next/link";

const Expiry = () => {
  return (
    <div>
      Expiry Page
      <div>
        <Link href="add">Add Expiry</Link>
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
