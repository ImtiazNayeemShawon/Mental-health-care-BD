const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// get Posts
router.get("/blog", async (req, res) => {
  try {
    const allpost = await prisma.post.findMany();
    res.status(200).send(allpost);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

// get single Posts
router.get("/blog/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singlepost = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).send(singlepost);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

// update single Posts
router.put("/blog", async (req, res) => {
  try {
    const UpdatedData = await req.body;
    const updatepost = await prisma.post.update({
      where: {
        id: UpdatedData?.id,
      },
      data: {
        title: UpdatedData?.title,
        description: UpdatedData?.description,
        image: UpdatedData?.image,
      },
    });
    res.send(updatepost);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

// create post
router.post("/blog", async (req, res) => {
  try {
    const newpost = await prisma.post.create({ data: req.body });
    res.status(201).send(newpost);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

// Delete Post
router.delete("/blog/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.post.delete({
      where: {
        id: id,
      },
    });
    res.send({ message: "Blog Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

module.exports = router;
