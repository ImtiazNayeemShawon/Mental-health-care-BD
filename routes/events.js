const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// get events
router.get("/events", async (req, res) => {
  const allpost = await prisma.events.findMany();
  res.send(allpost);
});

// get single events
router.get("/events/:id", async (req, res) => {
  const { id } = req.params;
  const singlepost = await prisma.events.findUnique({
    where: {
      id: id,
    },
  });
  res.send(singlepost);
});

// update single events
router.put("/events", async (req, res) => {
  const UpdatedData = await req.body;
  const updatepost = await prisma.events.update({
    where: {
      id: UpdatedData?.id,
    },
    data: {
      title: UpdatedData?.title,
      shortDescription: UpdatedData?.shortDescription,
      image: UpdatedData?.image,
    },
  });
  res.send(updatepost);
});

// create events
router.post("/events", async (req, res) => {
  const newpost = await prisma.events.create({ data: req.body });
  res.send(newpost);
});

// Delete events
router.delete("/events/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.events.delete({
    where: {
      id: id,
    },
  });
  res.send({ message: "Post Deleted" });
});

module.exports = router;
