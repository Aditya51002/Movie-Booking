import React, { useState } from "react";

const Expense = () => {
  const [expense, setExpense] = useState({amount: "",category: "food"});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expense Data:", expense);

    setExpense({amount: "",category: "food"});
  };

  return (
    <div
      style={{border: "2px solid gray",marginLeft: "100px",width: "300px",padding: "20px"}}
    >
      <h2>Expense Tracker</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Amount
          <input type="number" name="amount" value={expense.amount}
            onChange={handleChange} style={{ width: "100%", marginTop: "5px" }}/>
        </label>

        <br /><br />

        <select
          name="category"
          value={expense.category}
          onChange={handleChange}
          style={{ width: "100%" }}
        >
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="shopping">Shopping</option>
          <option value="other">Other</option>
        </select>

        <br /><br />

        <button type="submit" style={{ width: "100%" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Expense;
