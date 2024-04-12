import React from "react";

const FinanceHeader = () => {
  return (
    <div className="flex justify-center max-h-36">
      <div className="stats bg-accent text-primary-content">
        <div className="stat">
          <div className="stat-title">Income</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Add income</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Expense</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-error">Add expense</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceHeader;
