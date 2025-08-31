const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  userAuth,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

// Protecting the user-auth route with the protect middleware
router.get("/user-auth", protect, userAuth);

module.exports = router;
