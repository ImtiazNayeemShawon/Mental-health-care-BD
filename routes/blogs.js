const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// get Posts
router.get("/blog", async (req, res) => {
  const allpost = await prisma.post.findMany();
  res.send(allpost);
});

// get single Posts
router.get("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const singlepost = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  res.send(singlepost);
});

// update single Posts
router.put("/blog", async (req, res) => {
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
});

// create post
router.post("/blog", async (req, res) => {
  const newpost = await prisma.post.create({ data: req.body });
  res.send(newpost);
});

// Delete Post
router.delete("/blog/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
  res.send({ message: "Blog Deleted" });
});

module.exports = router;
