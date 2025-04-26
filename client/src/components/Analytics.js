import React from "react";
import { Progress } from "antd";

const Analytics = ({ allTransection }) => {
  //Category
  const categories = [
    "salary",
    "tip",
    "project",
    "food",
    "movie",
    "bills",
    "medical",
    "fee",
    "tax",
  ];

  // total transaction
  const totalTransaction = allTransection.length;
  const totalIncomeTransactions = allTransection.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransactions = allTransection.filter(
    (transaction) => transaction.type === "expense"
  );

  const totalIncomePercent =
    (totalIncomeTransactions.length / totalTransaction) * 100;
  const totalExpensePercent =
    (totalExpenseTransactions.length / totalTransaction) * 100;

  // total turnover
  const totalTurnover = allTransection.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnover = allTransection
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenseTurnover = allTransection
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverPercent =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverPercent =
    (totalExpenseTurnover / totalTurnover) * 100;

  return (
    <>
      <div className="container-fluid my-4">
        {/* Summary Cards */}
        <div className="row g-4">
          {/* Total Transactions */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow border-0 h-100">
              <div className="card-header bg-light fw-bold">
                Total Transactions: {totalTransaction}
              </div>
              <div className="card-body">
                <h6 className="text-success">
                  Income: {totalIncomeTransactions.length}
                </h6>
                <h6 className="text-danger">
                  Expense: {totalExpenseTransactions.length}
                </h6>
                <div className="d-flex justify-content-around align-items-center mt-3">
                  <Progress
                    type="circle"
                    strokeColor="green"
                    percent={totalIncomePercent.toFixed(0)}
                  />
                  <Progress
                    type="circle"
                    strokeColor="red"
                    percent={totalExpensePercent.toFixed(0)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Total Turnover */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow border-0 h-100">
              <div className="card-header bg-light fw-bold">
                Total Turnover: ₹{totalTurnover}
              </div>
              <div className="card-body">
                <h6 className="text-success">Income: ₹{totalIncomeTurnover}</h6>
                <h6 className="text-danger">
                  Expense: ₹{totalExpenseTurnover}
                </h6>
                <div className="d-flex justify-content-around align-items-center mt-3">
                  <Progress
                    type="circle"
                    strokeColor="green"
                    percent={totalIncomeTurnoverPercent.toFixed(0)}
                  />
                  <Progress
                    type="circle"
                    strokeColor="red"
                    percent={totalExpenseTurnoverPercent.toFixed(0)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="row mt-5">
          {/* Income Breakdown */}
          <div className="col-md-6">
            <div className="card border-0 shadow mb-4">
              <div className="card-header bg-success text-white fw-bold">
                Category-wise Income
              </div>
              <div className="card-body">
                {categories.map((category) => {
                  const amount = allTransection
                    .filter(
                      (transaction) =>
                        transaction.type === "income" &&
                        transaction.category === category
                    )
                    .reduce((acc, transaction) => acc + transaction.amount, 0);
                  return (
                    amount > 0 && (
                      <div className="mb-3" key={category}>
                        <div className="d-flex justify-content-between">
                          <span>{category}</span>
                          <span>₹{amount}</span>
                        </div>
                        <Progress
                          percent={(
                            (amount / totalIncomeTurnover) *
                            100
                          ).toFixed(0)}
                          strokeColor="green"
                        />
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="col-md-6">
            <div className="card border-0 shadow mb-4">
              <div className="card-header bg-danger text-white fw-bold">
                Category-wise Expense
              </div>
              <div className="card-body">
                {categories.map((category) => {
                  const amount = allTransection
                    .filter(
                      (transaction) =>
                        transaction.type === "expense" &&
                        transaction.category === category
                    )
                    .reduce((acc, transaction) => acc + transaction.amount, 0);
                  return (
                    amount > 0 && (
                      <div className="mb-3" key={category}>
                        <div className="d-flex justify-content-between">
                          <span>{category}</span>
                          <span>₹{amount}</span>
                        </div>
                        <Progress
                          percent={(
                            (amount / totalExpenseTurnover) *
                            100
                          ).toFixed(0)}
                          strokeColor="red"
                        />
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
