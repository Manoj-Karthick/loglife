import React from "react";

const AddExpiry = () => {
  return (
    <div className="container mx-auto">
      <form className="space-y-4">
        <div className="">
          <label>Expiry Name</label>
          <input
            type="text"
            placeholder="Expiry Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label>Expiry Date</label>
          <input type="date" className="" />
        </div>
        <div>
          <label>Reminder</label>
          <select name="" id="">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <div>
          <label>Group</label>
          <select name="" id="">
            <option value="Fruits & Vegetables">Fruits & Vegetables</option>
            <option value="Groceries">Groceries</option>
            <option value="Services">Services</option>
            <option value="Medicines">Medicines</option>
          </select>
        </div>
        <div>
          <label>Notes</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default AddExpiry;
