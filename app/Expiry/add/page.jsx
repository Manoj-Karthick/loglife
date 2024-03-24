import React from "react";

const AddExpiry = () => {
  return (
    <form>
      <label>Expiry Name</label>
      <input type="text" />
      <br></br>
      <label>Expiry Date</label>
      <input type="date" />
      <br></br>
      <label>Reminder</label>
      <select name="" id="">
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
      <br></br>
      <label>Group</label>
      <select name="" id="">
        <option value="Fruits & Vegetables">Fruits & Vegetables</option>
        <option value="Groceries">Groceries</option>
        <option value="Services">Services</option>
        <option value="Medicines">Medicines</option>
      </select>
      <br></br>
      <label>Notes</label>
      <input type="text" />
      <br></br>
    </form>
  );
};

export default AddExpiry;
