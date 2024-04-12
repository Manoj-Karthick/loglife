import FinanceHeader from "@/app/(components)/FinanceHeader";
import FinanceNewTransaction from "@/app/(components)/FinanceNewTransaction";
import FinanceTransaction from "@/app/(components)/FinanceTransaction";
import React from "react";

const FinancePage = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="space-y-5 col-span-2">
        <FinanceHeader></FinanceHeader>
        <FinanceTransaction></FinanceTransaction>
      </div>
      <div className="col-span-1">
        <div className="stats bg-primary text-primary-content w-full min-h-36">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
          </div>
        </div>
        <h1 className="text-lg p-4 font-bold text-center">Add Transaction</h1>
        <FinanceNewTransaction></FinanceNewTransaction>
      </div>
    </div>
  );
};

export default FinancePage;
