const router = require("express").Router();
const controller = require("../controllers/subscriptionController");
const validate = require("../middleware/validate");
const verifyToken = require("../middleware/verifyToken");
// read all subscriptions
router.get("/subscriptions/:uid", verifyToken, controller.getSubscriptions);

// add a subscription
router.post(
  "/subscriptions",
  verifyToken,
  validate.subscriptionValidation,
  controller.addSubscription
);

// upadte a subscription
router.put("/subscriptions/:subId", verifyToken, controller.updateSubscription);

// delete a subscription
router.delete(
  "/subscriptions/:subId",
  verifyToken,
  controller.deleteSubscription
);

module.exports = router;
