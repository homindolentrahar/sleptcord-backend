const express = require("express");
const router = express.Router();
const {
  getAllSleep,
  getSleepById,
  addSleep,
  updateSleep,
  deleteSleep,
} = require("../controller/sleep");

router.route("/").get(getAllSleep).post(addSleep);
router.route("/:id").get(getSleepById).patch(updateSleep).delete(deleteSleep);

module.exports = router;
