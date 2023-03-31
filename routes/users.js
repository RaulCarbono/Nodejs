const express = require("express");
const router = express.Router();
const servicesUsers = ("../services/servicesUsers")


router.get("/", (req, res) => {
  const getUsers = servicesUsers.getAllUsers(req,res)
  return getUsers
});

module.exports = router;
     