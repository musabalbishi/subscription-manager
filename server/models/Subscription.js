const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  subscriptionName: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    min: [1, "value can't be less than 0"],
    require: true,
  },
  cycle: {
    type: String,
    require: true,
  },
  startDate: {
    type: String,
    require: true,
  },
  alertNotice: {
    type: String,
    require: true,
  },
  alertType: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
module.exports = Subscription;
