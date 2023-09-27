const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// get applications
router.get("/application", async (req, res) => {
  const allpost = await prisma.applications.findMany();
  res.send(allpost);
});
// create application
router.post("/application", async (req, res) => {
  const newpost = await prisma.applications.create({ data: req.body });
  res.send(newpost);
});

module.exports = router;
