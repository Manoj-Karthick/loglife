import React from "react";

const FinanceNewTransaction = () => {
  return (
    <div className="text-center space-y-4">
      <input
        type="text"
        placeholder="Expense Name"
        className="input input-bordered border-primary rounded-box w-full max-w-xs"
      />
      <select className="select select-primary w-full max-w-xs rounded-box">
        <option className="p-4 m-4">Income</option>
        <option className="p-2">Expense</option>
      </select>
      <input
        type="number"
        min={0}
        placeholder="Price"
        className="input input-bordered border-primary rounded-box w-full max-w-xs"
      />
      <textarea
        className="textarea textarea-primary textarea-md rounded-box w-full max-w-xs"
        placeholder="Notes"
      ></textarea>
      <div className="mx-auto">
        <button className="btn btn-primary rounded-box">Add Transaction</button>
      </div>
    </div>
  );
};

export default FinanceNewTransaction;
