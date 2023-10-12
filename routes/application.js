const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// get applications
router.get("/application", async (req, res) => {
  try {
    const allpost = await prisma.applications.findMany();
    res.status(200).send(allpost);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});
// create application
router.post("/application", async (req, res) => {
  try {
    const newpost = await prisma.applications.create({ data: req.body });
    res.status(201).send(newpost);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

module.exports = router;
