const asyncHandler = require("express-async-handler");
const Subscription = require("../models/Subscription");
const User = require("../models/User");
const ApiError = require("../utils/ApiError");

module.exports = {
  // read all subscriptions
  getSubscriptions: asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.uid).populate("subscriptions");

    if (user.subscriptions === "") {
      return next(new ApiError("No subscription were found", 404));
    }
    res.status(200).json({ foundSubscription: user });
  }),

  // add a subscription
  addSubscription: asyncHandler(async (req, res, next) => {
    const {
      subscriptionName,
      value,
      cycle,
      startDate,
      alertNotice,
      alertType,
      isActive,
    } = req.body;

    const subscription = await Subscription.create({
      subscriptionName,
      value,
      cycle,
      startDate,
      alertNotice,
      alertType,
      isActive: true,
      user: req.payload.user._id,
    });

    await User.findByIdAndUpdate(req.payload.user._id, {
      $addToSet: {
        subscriptions: subscription._id,
      },
    });

    res.status(200).json({ subscription: subscription });
  }),

  // upadte a subscription
  updateSubscription: asyncHandler(async (req, res, next) => {
    const {
      subscriptionName,
      value,
      cycle,
      startDate,
      alertNotice,
      alertType,
      isActive,
    } = req.body;
    await Subscription.findByIdAndUpdate(req.params.subId, {
      subscriptionName,
      value,
      cycle,
      startDate,
      alertNotice,
      alertType,
      isActive,
    });
    res.status(200).json({
      message: "subscription updated",
    });
  }),

  // delete a subscription
  deleteSubscription: asyncHandler(async (req, res, next) => {
    await Subscription.findByIdAndDelete(req.params.subId);
    await User.findByIdAndUpdate(req.payload.user._id, {
      $pull: {
        subscriptions: req.params.id,
      },
    });
    res.status(200).json({ message: "subscription deleted" });
  }),
};
