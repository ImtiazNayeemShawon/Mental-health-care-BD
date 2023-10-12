const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// get events
router.get("/events", async (req, res) => {
  try {
    const allpost = await prisma.events.findMany();
    res.status(200).send(allpost);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

// get single events
router.get("/events/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singlepost = await prisma.events.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).send(singlepost);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

// update single events
router.put("/events", async (req, res) => {
  try {
    const UpdatedData = await req.body;
    const updatepost = await prisma.events.update({
      where: {
        id: UpdatedData?.id,
      },
      data: {
        title: UpdatedData?.title,
        shortDescription: UpdatedData?.shortDescription,
        image: UpdatedData?.image,
        address: UpdatedData?.address,
        date: UpdatedData?.date,
      },
    });
    res.send(updatepost);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

// create events
router.post("/events", async (req, res) => {
  try {
    const newpost = await prisma.events.create({ data: req.body });
    res.status(201).send(newpost);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

// Delete events
router.delete("/events/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.events.delete({
      where: {
        id: id,
      },
    });
    res.send({ message: "Post Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

module.exports = router;
