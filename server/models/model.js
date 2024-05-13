const mongoose = require("mongoose");
const schema = mongoose.Schema;
// categories schema => Field => ['type', 'color']
const categories_model = new schema({
  type: { type: String, default: "Investment" },
  color: { type: String, defalut: "#FCBE44" },
});
// transaction schema => Field => ['type', 'color', 'amount' , 'date]
const transaction_model = new schema({
  name: { type: String, default: "Anonymous" },
  type: { type: String, default: "Investment" },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
});
const Categories = mongoose.model("categories", categories_model);
const Transaction = mongoose.model("transaction", transaction_model);

exports.default = Transaction;
module.exports = {
  Categories,
  Transaction,
};
